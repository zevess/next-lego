
import { prisma } from "@/lib/prisma/prisma";
import { SetDataJSON } from "@/lib/types";
import { NextResponse } from "next/server";



export async function POST(request: Request) {

    const body = await request.json();

    const set: SetDataJSON = body.set

    const type = body.type

    try {

        const userCollection = await prisma.userCollection.findFirst({
            where: {
                userId: body.userId
            }
        })

        const userWishes = await prisma.userWishes.findFirst({
            where: {
                userId: body.userId
            }
        })

        if (type == "collection") {

            const existingSet = await prisma.set.findFirst({
                where: {
                    set_num: set.set_num,
                    wishesId: { not: null },
                }
            })

            if (existingSet) {
                await prisma.set.update({
                    where: {
                        id: existingSet.id,
                    },
                    data: {
                        collectionId: userCollection?.id
                    }
                })
            } else {
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
                return NextResponse.json({ newSet });
            }

        }

        if (type == "wishes") {
            const existingSet = await prisma.set.findFirst({
                where: {
                    set_num: set.set_num,
                    collectionId: { not: null },
                }
            })

            if (existingSet) {
                await prisma.set.update({
                    where: {
                        id: existingSet.id,
                    },
                    data: {
                        wishesId: userWishes?.id
                    }
                })
            } else {
                const newSet = await prisma.set.create({
                    data: {
                        name: set.name,
                        set_num: set.set_num,
                        year: set.year,
                        theme_id: set.theme_id,
                        num_parts: set.num_parts,
                        set_img_url: set.set_img_url,
                        set_url: set.set_url,
                        wishes: {
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
                return NextResponse.json({ newSet });
            }
        }

    } catch (error) {
        return NextResponse.json({ error });
    }
}



export async function DELETE(request: Request) {
    const body = await request.json();

    const set: SetDataJSON = body.set

    const type = body.type


    try {

        const userCollection = await prisma.userCollection.findFirst({
            where: {
                userId: body.userId
            }
        })

        const userWishes = await prisma.userWishes.findFirst({
            where: {
                userId: body.userId
            }
        })


        if (type == "collection") {
            const existingSet = await prisma.set.findFirst({
                where:{
                    set_num: set.set_num,
                    collectionId: userCollection?.id
                }
            })

            if (existingSet){
                if(existingSet.wishesId){
                    await prisma.set.update({
                        where:{ id: existingSet.id},
                        data: {collectionId: null}
                    })
                } else{
                    await prisma.set.delete({
                        where:{ id: existingSet.id}
                    })
                }
            }
            return NextResponse.json({message: "Набор удален"});

        }

        if (type == "wishes") {
            const existingSet = await prisma.set.findFirst({
                where:{
                    set_num: set.set_num,
                    wishesId: userWishes?.id
                }
            })

            if (existingSet){
                if(existingSet.collectionId){
                    await prisma.set.update({
                        where:{ id: existingSet.id},
                        data: {wishesId: null}
                    })
                } else{
                    await prisma.set.delete({
                        where:{ id: existingSet.id}
                    })
                }
            }
            return NextResponse.json({message: "Набор удален"});
        }
    } catch (error) {
        return NextResponse.json({ error });
    }
}
