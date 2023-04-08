import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res) => {
    try{
        const {
            name,
            email,
            password,
            picturePath,
            phone,
            location,
            occupation
        } = req.body;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: passwordHash,
            picturePath,
            phone,
            location,
            occupation,
        });
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// LOGIN

 const login = async (req, res) => {
    try{
            const { email, password } = req.body;
            const user = await User.findOne({email: email});
            console.log(user);
            if(!user) return res.status(400).json({msg: "User is not exist. "});

            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch) return res.status(400).json({msg: "Invalid credentials. "});

            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
            delete user.password;
            res.status(200).json({ token, user});

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export default login;


