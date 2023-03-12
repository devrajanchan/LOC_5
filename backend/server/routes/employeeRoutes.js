const express = require("express")
const route = express.Router()

const employeeservices=require("../services/employee")
const Employee = require("../model/Employee")
const loginEmp = require("../model/loginEmployee")


/**
 *  @description Root Route
 *  @method GET /
 */
route.get("/",employeeservices.homeRoutes)

/**
 *  @description Employee login Route
 *  @method POST /
 */
route.post("/login",employeeservices.Login)
route.post("/register",employeeservices.Register)
// route.post("/profile",employeeservices.createProfile)
route.put("/profile/:id",employeeservices.updateProfile)
route.post("/profile",employeeservices.Profiles)
route.get("/profiledisplay",employeeservices.ProfileDisplay)

module.exports=route