const loginEmp = require("../model/loginEmployee")
const Emp = require("../model/Employee")
const jwt=require("jsonwebtoken")
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');

exports.homeRoutes = (req,res)=>{
    res.send("hello")
}


exports.Register = async (req,res)=>{
    try{
        // const hashedPassword = await bcrypt.hash(req.body.password, 10)
        try{
          const emp = new loginEmp({
            email:req.body.email,
            password:req.body.password
          });
          console.log("emp")
          const result = await emp.save()   
          res.status(201).send({message: "User Created Successfully",result});
        }catch(e){
          res.status(500).send({
            message: "Error creating user"
          });
        }    
      }catch(e){
        res.status(500).send({
          message: "Password was not hashed successfully",
          e,
        });
      }
}



exports.Login = async (req,res)=>{
    // check if email exists
    try{
        console.log("login: ",req.body)
        const emp = await loginEmp.findOne({ email: req.body.email })
        console.log(emp)
        if(!emp){
          console.log("logged use not exist")
          return res.status(400).send("user doesnt exist")
          
        }

        try{
          console.log("oldpass",emp.password)
          console.log("newpass",req.body.password)
          // const passCheck=await bcrypt.compare(req.body.password, user.password)
          // const newpass=await bcrypt.hash(req.body.password,10)
  
  
          
          const token = jwt.sign(
            {
              userId: emp._id,
              userEmail: emp.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );
  
          if(emp.password===req.body.password){
            console.log("old",emp.password,"   ","new",req.body.password)
            console.log(token)
            console.log("Successfully logged in")
            res.status(200).send({
              message: "Login Successful",
              email: emp.email,
              token,
              id:emp.id
            });
          }
  
        }catch(e){
          res.status(400).send({
            message: "Passwords does not match",
            e,
          });
        }
        // const hashed=await bcrypt.hash(req.body.password, 10)
      }catch(e){
  
        res.status(404).send({
          message: "Email not found",
          e,
        });
      }
}

exports.createProfile = async (req,res)=>{
    console.log("req.body", req.body)
    // console.log(res)
    if(!req.body){
        res.status(400).send({message:"Content cannot be empty"})
        return
    }
    const employee = req.query.id
    const emp = new Emp({

        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        birth:req.body.birth,
        linkeldin:req.body.linkeldin,
        skill:req.body.skill,
        // image: {
        //     data: fs.readFileSync(req.file.path),
        //     contentType: req.file.mimetype
        // },
        exp:req.body.exp,
        gap:req.body.gap
        
    })
    try{
        const result = await emp.save()
        if(result){
            res.status(201).json(result);
        }
    }catch(e){
        res.status(500).send({
            message: e.message
        })
    }
}

exports.updateProfile= async (req,res)=>{
    if(!req.body){
        res.status(400).send({message : "Data to update cannot be empty"})
    }

    const id =req.params.id
    try{
        const data = await Emp.findByIdAndUpdate(id,req.body,{returnOriginal:false})
        console.log(data)
        if(!data){
            res.status(404).send({message : `Cannot Update user with ${id}, maybe user not found`})
        }
        else{
            console.log("his")
            res.status(200).send({message : `Employee with ${id} updated successfully`})
            console.log("bye")
        }
    }catch(e){
        res.status(500).send(e)
    }
}


exports.Profiles= async (req,res)=>{
    const {email, ...otherFields} = req.body
    try{
        const existingUser = await Emp.findOne({email});
        if(existingUser){
            try{
                const data = await Emp.updateOne({ email }, { $set: otherFields });
                if(data){
                    res.status(200).send("updated successfully")
                }
                else{
                    res.status(400).send("maybe user not find")
                }
            }catch(e){
                res.status(500).send("Problem in updateOne")
            }
        }else{
            const emp = new Emp({

                firstname:req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                birth:req.body.birth,
                linkeldin:req.body.linkeldin,
                skill:req.body.skill,
                // image: {
                //     data: fs.readFileSync(req.file.path),
                //     contentType: req.file.mimetype
                // },
                exp:req.body.exp,
                gap:req.body.gap
                
            })
            try{
                const result = await emp.save()
                if(result){
                    res.status(201).json(result);
                }
            }catch(e){
                res.status(500).send({
                    message: e.message
                })
            }
        }
    }catch(e){
        res.status(500).send(e,": problem in finding email")
    }
}

exports.ProfileDisplay= async (req,res)=>{
  const id = req.query.id;
  try{
    const data = await Emp.findById(id)
    if(!data){
      res.status(404).send({ message : "Not found user with id "+ id})
  }else{
      res.send(data)
  }
  }catch(e){
    res.status(500).send({ message: "Error in retrieving user with id " + id})
  }

}


