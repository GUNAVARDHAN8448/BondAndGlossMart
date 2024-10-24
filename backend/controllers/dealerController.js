const bcrypt = require("bcrypt");
const zod = require("zod");
const { dealerModel } = require("../models/dealer");
const { saltNumber } = require("../config");

async function dealerSingup(req, res) {
    const signupSchema = zod.object({
        email: zod.string().email("Invalid email address"),
        phoneNo: zod.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
        password: zod.string().min(6, "Password must be at least 6 characters long"),
        confirmPassword: zod.string(),
        dealerName: zod.string().min(1, "Dealer name is required"),
        shopName: zod.string().min(1, "Shop name is required"),
        firstLine: zod.string().min(1, "Address line 1 is required"),
        secondLine: zod.string().optional(),
        city: zod.string().min(1, "City is required"),
        state: zod.string().min(1, "State is required"),
        pincode: zod.string().regex(/^\d{6}$/, "Pincode must be 6 digits"),
    })
    const validatedData = signupSchema.safeParse(req.body);

    if (!validatedData.success) {
        return res.status(400).json({
            message: "Incorrect data format",
            error: validatedData.error,
        });
    }

    try {
        const salt = await  bcrypt.genSalt(10);
        let securedPassword = await bcrypt.hash(req.body.password, salt);
        await dealerModel.create({
            email: req.body.email,
            phoneNo: req.body.phoneNo,
            dealerName: req.body.dealerName,
            shopName: req.body.shopName,
            password: securedPassword,
            address: {
                firstLine: req.body.firstLine,
                secondLine: req.body.secondLine,
                city: req.body.city,
                state: req.body.state,
                pincode: req.body.pincode
            }
        });
        res.status(201).json({
            message: "Singup Successfull"
        })

    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                message: "User already exists",
            });
        }
        res.status(500).json({
            message: "Internal Server Error",
        });

    }

}

module.exports = {
    dealerSingup
}