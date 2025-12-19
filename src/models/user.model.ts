import mongoose from "mongoose"

interface IUser {
    _id:string
    name: string
  email: string
  password: string
  mobile?: string
  role: "user" | "deliveryboy" | "admin"

}

const userSchema = new mongoose.Schema<IUser>({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["user","deliveryboy","admin"],
        default:"user"
    }


}, { timestamps: true })

 const User= mongoose.models.users || mongoose.model("users",userSchema)

 export default User;

