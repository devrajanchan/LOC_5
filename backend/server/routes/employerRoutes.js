const express = require("express")
const route = express.Router()

const employerservices=require("../services/employer")
// const Employee = require("../model/Employer")
const loginEmp = require("../model/loginEmployer")


/**
 *  @description Root Route
 *  @method GET /
 */
route.get("/",employerservices.homeRoutes)

/**
 *  @description Employee login Route
 *  @method POST /
 */
route.post("/login",employerservices.Login)
route.post("/register",employerservices.Register)

module.exports=route