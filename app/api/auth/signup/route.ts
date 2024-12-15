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

        const existingUser = await prisma.user.findUnique({
            where: { username },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "User already exists." },
                { status: 409 } 
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
                username,
                password: hashedPassword,
            },
        });

        return NextResponse.json(
            { message: "User created successfully and added to the database." },
            { status: 201 } 
        );
    } catch (error: any) {
        console.error("Error creating user:", error); 
        return NextResponse.json(
            { error: "An unexpected error occurred. Please try again later." },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect(); 
    }
}
