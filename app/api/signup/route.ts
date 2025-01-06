
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
export async function POST(req:NextRequest){
    const { username, password } = await req.json();
    const user = await prisma.user.findUnique({
        where: {
            username: username
        }
    })   

    if( user ){
        NextResponse.json({
            error: "User already exists."
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
        data: {
            username,
            password: hashedPassword
        }
    })

    if (newUser){
        return NextResponse.json({
            message: "User createed successfully."
        })
    }
}