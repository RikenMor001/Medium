
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse){
    try {
    const body = await req.json();
    prisma.user.create({
        data:{
            username: body.username,
            password: body.password 
        }
    })
    return Response.json({
        message: "User created successfully!!",        
    })}catch (e){
        NextResponse.json({
            message: "error while creating the user"
        })
        console.log(e)
    }
}

/*1. Get the headers
  2. Verify the headers
  3. Get the jwt token
  4. Verify the token 
  5. If the token and secret is correct than 
  6. Pass the token to the user and let them access the information from the database.
*/

// export async function GET(req: NextRequest, res: NextResponse){
//     const header = req.headers;
//     const authHeader = req.headers.get("Authorization");
//     try{
//         if(!authHeader){
//             return NextResponse.json({
//                 message:"No authorization header present" 
//             }, {status: 401})
//         }
//         const bearer = authHeader.split(" ")[1];
    
//         if (!bearer){
//             return NextResponse.json({
//                 message: "No bearer token present"
//             }, {status: 401})
//         }
        
//         const username = req.nextUrl.searchParams.get("username");
//         const password = req.nextUrl.searchParams.get("password");
    
//         if(!username || !password){
//             return NextResponse.json({
//                 message: "No username or password present"
//             }, {status: 401})
//         }
    
//         const user = await prisma.user.findMany({
//             where: {
//                 username: username,
//                 password: password
//             }
//         })
//         if (user){
//             return NextResponse.json({
//                 message: "User exists"
//             })
//         }
//     }catch(error){
//         return NextResponse.json({
//             message: "The errpr is :-" + error
//         })
//     }finally{
//         return NextResponse.json({
//             message: "User does not exist"
//         })
//     }
// }

export async function GET(req: NextRequest, res: NextResponse){
    const headers = req.headers;
    const body = await  req.json();
    const authHeader = req.headers.get("Authorisation");

    if (!authHeader){
        return NextResponse.json({
            error: "Sent header is not right"
        }, {status: 400})
    }

    const token = authHeader.split(" ")[1];
    const decoded = await jwt.verify(token, "secret");
    if (!decoded){
        return NextResponse.json({
            error: "Token is not right"
        }, {status: 400})
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);
    const user = await prisma.user.findUnique({
        where: {
            username: body.username,
            password: body.password
        }
    })
    if(!user){
        return NextResponse.json({
            error: "The user does not exist"
        }, {status: 400})
    }

    const newUser = await prisma.user.create({
        data: {
            username: body.username,
            password: hashedPassword
        }
    })

    if(newUser){
        return NextResponse.json({
            message: "User has been successfully created"
        })
    }
} 
