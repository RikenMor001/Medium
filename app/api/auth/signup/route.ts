import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import  bcrypt  from "bcrypt"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "kingRiken"

export async function POST(req: NextRequest){
    try {
        const { username, password } = await req.json();
    
        if (!username || !password){
            NextResponse.json({
                error: "Invalid username or password"
            }, { status: 400 })
        }
        const existsingUser = await prisma.user.findUnique({
            where: {
                username: username
            }
        })
        
        if (existsingUser){
            NextResponse.json({
                error: "Invalid username or password"
            }, { status: 400 })
        }
    
        const hashingPassword = await bcrypt.hash(password, 10);
    
        const newUser = await prisma.user.create({
            data: {
                username: username,
                password: hashingPassword
            }
        })
    
        const jwtToken = jwt.sign({
            id: newUser.id
        }, JWT_SECRET)
        return NextResponse.json({
            message: "User created successfully!", jwtToken 
        })
    }
    catch(error: any){
        NextResponse.json({
            error: "There was an error while doing this process"
        }, {status: 403})
    }
}
