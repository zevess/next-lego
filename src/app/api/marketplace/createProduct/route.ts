import { prisma } from "@/lib/prisma/prisma";
import { productProps, SetDataJSON } from "@/lib/types";
import { Product } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body: Product = await request.json();
    try {
        const newProduct = await prisma.product.create({
            data: {
                title: body.title,
                description: body.description,
                location: body.location,
                price: body.price,
                images: body.images,
                userId: body.userId,
                sets: body.sets ? body.sets : ''
            }
        })
        return NextResponse.json({ message: "Товар добавлен!", newProduct });
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
        return NextResponse.json({ error: "Произошла ошибка при обработке запроса" }, { status: 500 });
    }
}