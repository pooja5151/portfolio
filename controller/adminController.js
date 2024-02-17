const Admin = require("../models/Admin")
const asyncHandler = require("express-async-handler");
const sendEmail = require("../utils/email");

exports.sendEmailController = asyncHandler(async (req, res) => {
    const { name, email, message } = req.body

    await sendEmail({
        // to: email,
        subject: "Welcome to portfolio",
        message: `my name is ${name}`,
    });
    await Admin.create(req.body)
    console.log(req.body);
    // try {
    //     return res.status(200).json({
    //         success: true,
    //         message: 'Your Message Send Successfully'
    //     })
    // } catch (error) {
    //     console.log(error)
    //     return res.status(500).json({
    //         success: false,
    //         message: 'Send Email API error',
    //         error
    //     })
    // }
    res.status(200).json({
        success: true,
        message: 'Your Message Send Successfully'
    })
})

// module.exports = sendEmailController;