import prisma from "@/prisma/prisma-client";
import { SetDataJSON } from "@/utils/types";
// import { SetData } from "@/utils/types";
import { NextResponse } from "next/server";



export async function POST(request: Request) {
    
    const body = await request.json();

    const set:SetDataJSON = body.set

    try {
        const newSet = await prisma.set.create({
            data: {
                name: set.name,
                set_num: set.set_num,
                year: set.year,
                theme_id: set.theme_id,
                num_parts: set.num_parts,
                set_img_url: set.set_img_url,
                set_url: set.set_url,
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
