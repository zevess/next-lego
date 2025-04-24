import { prisma } from "@/lib/prisma/prisma";
import { ProductData } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body: ProductData = await request.json();
    try {
        const newProduct = await prisma.product.create({
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
        return NextResponse.json({ message: "Товар добавлен!", newProduct });
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
        return NextResponse.json({ error: "Произошла ошибка при обработке запроса" }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    const body = await request.json();
    const product: ProductData = body.product;
    const productId = body.productId
    try {
        const updatedProduct = await prisma.product.update({
            where: {
                id: productId
            },
            data: {
                title: product.title,
                description: product.description,
                location: product.location,
                price: product.price,
                images: product.images,
                userId: String(product.userId),
                sets: JSON.parse(JSON.stringify(product.sets))
            }
        })
        return NextResponse.json({ message: "Товар обновлен!", updatedProduct });
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
        return NextResponse.json({ error: "Произошла ошибка при обработке запроса" }, { status: 500 });
    }
}