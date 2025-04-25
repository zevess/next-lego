"use server"

import { api } from "../axios.config"
import { prisma } from "../prisma/prisma"
import { ProductData, SetData } from "../types"

export const createProduct = async (product: ProductData) => {
    const newProduct = await api.post("/marketplace/product", product)
    return newProduct.data
}

export const updateProduct = async (product: ProductData, productId: string) => {
    const updatedProduct = await api.patch("/marketplace/product", { product, productId })
    return updatedProduct.data
}

export const deleteProduct = async (productId: string) => {
    return await prisma.product.delete({
        where: {
            id: productId
        }
    })
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

export const getAllProducts = async (searchQuery?: string) => {
    const products = await prisma.product.findMany({
        where: {
            title: {
                contains: searchQuery
            }
        }
    })
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