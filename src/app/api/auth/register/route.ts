import connectDb from "@/lib/db";
import UserModel from "@/models/user.model";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST (req:NextRequest){
  try {
    await connectDb()
    const {name,email,password}=await req.json();
    const existUser = await UserModel.findOne({email})
    if(existUser){
      return new NextResponse("user already exists",{status:400})
    }
    if(password.length<6){
      return new NextResponse("password must be at least 6 characters long",{status:400})
    }
    const hashedPassword = await bcrypt.hash(password,10)
    const newUser = await UserModel.create({
      name,email,password:hashedPassword
    })
    return NextResponse.json(newUser,{status:201})
    
  } catch (error) {
      return NextResponse.json({message:`register error ${error}`},
        {status:500}
      )
  }
}