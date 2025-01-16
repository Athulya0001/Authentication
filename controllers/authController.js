import User from "../model/userModel.js";
import bcrypt from "bcrypt";


export const signup = async (req, res) => {
    console.log(req.body, "req body")

    const { name, email, password } = req.body;

    try {
        const salt = await bcrypt.genSalt();
        console.log(salt, " generatedsalt");

        const hashedPassword = await bcrypt.hash(password, salt);
        console.log(hashedPassword, "hashed password");


        const existUser = await User.findOne({ email: email });

        if (!existUser) {
            const newUser = new User({
                name: name,
                email: email,
                password: hashedPassword,
            });
            await newUser.save();
            return res.status(200).json({ success: true, message: "User registered successfully", user: newUser })
        } else {
            return res.status(500).json("User Already Exist")
        }

    } catch (error) {
        return res.status(500).json({ success: false, message: "Error registering user" })
    }

}

export const getAllUsers = async (req, res) => {

    try {

        const allUsers = await User.find();
        console.log(allUsers, "All users")
        return res.status(200).json({ success: true, message: "Listed all users", allUsers })

    } catch (error) {
        return res.status(201).json({ success: false, message: "Error listing all users" })
    }

}


export const signin = async (req, res) => {

    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email: email });

        if (existingUser) {
            const matchPassword = await bcrypt.compare(password, existingUser.password);

            if (!matchPassword) {
                return res.status(401).json({ success: false, message: "incorrect password" })

            }

            return res.status(200).json({ success: true, message: "user logged in successfully", user: existingUser })

        }
        return res.status(404).json({ success: false, message: "User not found" });




    } catch (error) {
        return res.status(201).json({ success: false, message: "Error logging In" })
    }

}

export const dummy = async (req, res) => {
    res.status(200).json({ message: "dummy file" })
}