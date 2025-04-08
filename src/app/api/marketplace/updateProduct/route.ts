import { prisma } from "@/lib/prisma/prisma";
import { ProductData } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    const body: ProductData = await request.json();
    try {
        const updatedProduct = prisma.product.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                description: body.description,
                location: body.location,
                price: body.price,
                images: body.images,
                userId: String(body.userId),
                sets: JSON.parse(JSON.stringify(body.sets))
            }
        })
        return NextResponse.json({ message: "Товар добавлен!", updatedProduct });
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
        return NextResponse.json({ error: "Произошла ошибка при обработке запроса" }, { status: 500 });
    }
}