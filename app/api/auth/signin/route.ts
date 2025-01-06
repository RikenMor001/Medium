
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
export default async function POST(req: NextRequest){
    const [ username, password ] = await req.json();
    const user = await prisma.user.findUnique({
        where: {
            username: username,
        }
    })
    if (!user){
        return NextResponse.json({
            error: "User not found."
        },{status: 401})
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect){
        return NextResponse.json({
            error: "Incorrect password"
        }, {status: 401})
    }
}
