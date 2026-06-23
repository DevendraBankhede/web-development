import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    photo:{
        url:{
           type:String, 
        },
        publicId:{
            type:String,
        },
    },
    password:{
        type:String,
        required:true,
    },
    dob:{
        type:DataTransfer,
        required:true,
    },

});
const User = mongoose.model(UserSchema,"User");
export default User;