import { prisma } from "@/lib/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ productId: string }> }) {
    try {
        const { productId } = await params

        await prisma.product.delete({
            where:{
                id: productId
            }
        })

        return NextResponse.json({ message: "Товар удален!" })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });

    }
}