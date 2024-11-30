import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
export async function POST(req: NextRequest, res: NextResponse){
    const { username, password } = await req.json();
    const user = await prisma.user.findUnique({
        where: {
            username: username
        }
    })
    if (!user){
        return NextResponse.json({
            error: "User not found"
        })
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect){
        return NextResponse.json({
            error: "Incorrect password"
        })
    }
    return NextResponse.json({
        message: "User logged in successfully"
    })
}