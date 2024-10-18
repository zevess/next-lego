import prisma from "@/prisma/prisma-client";
import { SetData } from "@/utils/types";
import { NextResponse } from "next/server";



export async function POST(request: Request) {
    
    const body: SetData = await request.json();

    try {
        const newSet = await prisma.set.create({
            data: {
                name: body.name,
                setNum: body.setNum,
                year: body.year,
                themeId: body.themeId,
                numParts: body.numParts,
                setImageUrl: body.setImgUrl,
                setUrl: body.setUrl,
                collection: {
                    connectOrCreate: {
                        where: {
                            userId: body.userId
                        },
                        create: {
                            userId: body.userId
                        }
                    }
                }
            },
        });

        return NextResponse.json({newSet}); 
    } catch (error) {
        return NextResponse.json({error}); 
    }
}
