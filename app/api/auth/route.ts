
/*1. Get the headers
  2. Verify the headers
  3. Get the jwt token
  4. Verify the token 
  5. If the token and secret is correct than 
  6. Pass the token to the user and let them access the information from the database.
// */  
// import { PrismaClient } from "@prisma/client";
// import { NextRequest, NextResponse } from "next/server";
// import bcrypt from "bcrypt";

// const prisma = new PrismaClient();

// export async function POST(req: NextRequest) {
//     try {
//         const body = await req.json();
//         const { username, password } = body;
//         if (!username || !password) {
//             return NextResponse.json({ error: "Username and password are required" }, { status: 400 });
//         }

//         const existingUser = await prisma.user.findUnique({
//             where: { username },
//         });

//         if (existingUser) {
//             return NextResponse.json({ error: "Username already exists" }, { status: 409 });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);

//         const newUser = await prisma.user.create({
//             data: { username, password: hashedPassword },
//         });

//         return NextResponse.json({ message: "User created successfully", user: newUser }, { status: 201 });
//     } catch (error) {
//         console.error(error);
//         return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//     }
// }


import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json() as { username: string; password: string };
        const { username, password } = body;

        if (!username || !password) {
            return NextResponse.json({ error: "Username and password are required" }, { status: 400 });
        }

        const existingUser = await prisma.user.findUnique({
            where: { username },
        });

        if (existingUser) {
            return NextResponse.json({ error: "Username already exists" }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: { username, password: hashedPassword },
        });

        return NextResponse.json({
            message: "User created successfully",
            user: { id: newUser.id, username: newUser.username },
        }, { status: 201 });
    } catch (error) {
        console.error("Error in user creation:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
