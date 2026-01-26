import mongoose from "mongoose";

interface IUser {
  _id: string;
  name: string;
  email: string;
  password?: string;
  mobile?: string;
  role: "user" | "deliveryboy" | "admin";
  image?: String;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
    mobile: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "deliveryboy", "admin"],
      default: "user",
    },
    image: {
      type: String,
    },
  },
  { timestamps: true },
);

const UserModel = mongoose.models.users || mongoose.model("users", userSchema);

export default UserModel;
