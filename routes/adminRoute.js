const { sendEmailController } = require("../controller/adminController")

const router = require("express").Router()

// const Router = express.Router()

router.post('/sendEmail', sendEmailController)

module.exports = router

