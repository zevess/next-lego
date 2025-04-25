import { CreateProductPage } from '@/components/shared'
import { getProduct } from '@/lib/actions/product'
import { auth } from '@/lib/auth'
import React from 'react'

interface Props {
    className?: string
}

export default async function Page({ params }: { params: Promise<{ product: string }> }) {

    const productId = (await params).product
    const session = await auth()
    const product = await getProduct(productId)

    return (
        <>
            <p>{productId}</p>
            <CreateProductPage isEditing product={product} userId={session?.user?.id as string}  />
        </>
    )
}
