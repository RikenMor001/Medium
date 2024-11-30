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
    if (user){
        return NextResponse.json({
            error: "User already exists"
        })
    }

    const hasedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
        data: {
            username: username,
            password: hasedPassword
        }
    })
    return NextResponse.json({
        message: "User creared successfully and added to the database"
    }, {status: 200})
}