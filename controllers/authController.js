import User from "../model/userModel.js";

// rendering signup form
export const signupForm = (req, res) => {
    return res.render('signup');
};

//  function handling signup data submission
export const signup = async (req, res) => {
    console.log(req.body, "req body")

    const { email, name, password } = req.body;

    try {
        const existUser = await User.findOne({ email: email });
        if (!existUser) {
            const newUser = new User({ name, email, password });
            await newUser.save();
            return res.status(200).json({ success: true, message: "User registered successfully", newUser })
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

export const signinForm = (req, res) => {
    return res.render('signin');
};

export const signin = async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email });
        // if(!user){
        //     return res.status(401).json({success: false, message: "User not found"})
        // }else{
        //     if(user.password === password){
        //         return res.status(200).json({success: true, message: "user logged in successfully", user})
        //     }
        // }

        if (user) {
            if (user.password === password) {
                return res.status(200).json({ success: true, message: "user logged in successfully", user })
            }else{
                return res.status(401).json({success: false, message: "User not found"})
            }
        }
    } catch (error) {
        return res.status(201).json({ success: false, message: "Error logging In" })
    }

}