import User from "../model/userModel.js";

export const signup = async (req, res)=>{
    console.log(req.body,"req body")

    const {email, name , password} = req.body;

    try {
        const existUser = await User.findOne({email: email});
        if (!existUser) {
            const newUser = new User({name, email , password});
            await newUser.save();
            res.status(200).json({success: true, message: "User registered successfully", newUser})
        } else {
            res.status(500).json("User Already Exist")
        }
        
    } catch (error) {
        res.status(500).json({success: false, message: "Error registering user"})
        console.log(error)
    }

    // try {
    //     const exsistingUser = await User.findOne({email})
    //     if (!exsistingUser) {
    //         const newUser = await new User();
    //     } else {
    // res.json({message: "Req body", data : req.body})
            
       }
//     } catch (error) {
//         res.status(500).json({success: false, message: "Failed to register user"})
//     }
// }