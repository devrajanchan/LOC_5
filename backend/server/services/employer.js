const loginEmp = require("../model/loginEmployee")
const jwt=require("jsonwebtoken")


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
        console.log(req.body)
        const emp = await loginEmp.findOne({ email: req.body.email })
        if(!emp){
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

