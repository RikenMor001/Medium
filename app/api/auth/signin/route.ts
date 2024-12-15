import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"; 

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const { username, password } = await req.json();

        if (!username || !password) {
            return NextResponse.json(
                { error: "Username and password are required." },
                { status: 400 }
            );
        }

        const user = await prisma.user.findUnique({
            where: { username },
        });

        if (!user) {
            return NextResponse.json(
                { error: "User not found." },
                { status: 404 }
            );
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return NextResponse.json(
                { error: "Incorrect password." },
                { status: 401 }
            );
        }

        return NextResponse.json(
            { message: "User logged in successfully." },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Login error:", error); 
        return NextResponse.json(
            { error: "An unexpected error occurred. Please try again later." },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect(); 
    }
}
