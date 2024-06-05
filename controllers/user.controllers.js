import { User } from "../model/user.models.js";
import bcryptjs from "bcryptjs";


export const RegisterPost = async (req, res) => {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email })

    if (user)
        return res.status(404).json({ success: false, masasage: "User Already Exist" })

    const hashpass = bcryptjs.hashSync(password, 10)

    await User.create({
        name, email, password: hashpass
    })


    res.status(201).json({
        success: true,
        massage: "Register successfully"
    })
}

