"use server"

import { prisma } from "../prisma/prisma"
import { ProductData, SetData } from "../types"

export const createProduct = async (product: ProductData) => {
    const newSet = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/marketplace/createProduct`, {
        method: "POST",
        body: JSON.stringify(product)
    })
    return newSet.json()
}

export const getProduct = async (productId: string) => {

    const product = await prisma.product.findFirst({
        where: {
            id: productId
        },
        include: {
            user: true
        }
    })

    const typedProduct = {
        ...product,
        sets: product?.sets as unknown as SetData[]
    }

    return typedProduct as ProductData

}

export const getAllProducts = async () => {
    const products = await prisma.product.findMany()
    const typedProducts = products.map(product => ({
        ...product,
        sets: product.sets as unknown as SetData[]
    }))
    return typedProducts
}

export const getAllProductsByUser = async (userId: string) => {
    const products = await prisma.product.findMany({
        where: {
            userId
        }
    })
    const typedProducts = products.map(product => ({
        ...product,
        sets: product.sets as unknown as SetData[]
    }))
    return typedProducts
}