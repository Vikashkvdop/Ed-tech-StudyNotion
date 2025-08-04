const express = require("express")
const { contactUsController } = require("../controllers/Contactus")

const router = express.Router()


router.post("/reach/contact",contactUsController)

module.exports = router