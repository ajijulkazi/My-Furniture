import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 100
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true
        },
        password:{
            type: String,
            required: true,
            min:5,
        },
        picturePath:{
            type: String,
            default: "",
        },
        location: String,
        phone: String,
        occupation: String
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;