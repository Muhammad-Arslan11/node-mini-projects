const UserModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const signup = async (req, res) => {
    try {
        console.log("BODY RECEIVED:", req.body); // Add this!
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (user) {
            return    res.status(409).json(
                { message: "user already exists: you can't login", success: false }
            )
        }
        else {

            const hashedPassword = await bcrypt.hash(password, 10);
            const userModel = new UserModel({
                name,
                email,
                password: hashedPassword,
            });


            await userModel.save();
            // send respons
            return res.status(201).json({ message: "signup successful!", success: true });

        }

    } catch (error) {
        console.log("error:", error);
        res.status(500).json({ message: "internal server error", success: false });
    }
}

const login = async (req, res) => {
    try {
        console.log("BODY RECEIVED:", req.body); // Add this!
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (!user) {
            return  res.status(401).json(
                { message: "Password not correct", success: false }
            )
        }
        else {
            const errorMsg = "wrong password"
            const isPassEqual = bcrypt.compare(password, user.password);
            if (!isPassEqual) {
                return   res.status(401).json(
                    { message: errorMsg, success: false }
                )
            }

            // create jwt token
            const jwtToken = jwt.sign(
                { email: user.email, _id: user._id },
                process.env.JWT_SECRET,
                { expiresIn: '24H' },
            )

            // send respons
            return    res.status(201).json({
                message: "login successful!",
                success: true,
                jwtToken,
                email,
                name: user.name,
            });

        }

    } catch (error) {
        console.log("error:", error);
        res.status(500).json({ message: "internal server error", success: false });
    }
}

module.exports = {
    signup,
    login,
}