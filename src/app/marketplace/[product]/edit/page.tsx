import React from 'react'

interface Props {
    className?: string
}

export default async function Page({ params }: { params: Promise<{ product: string }> }) {
    const productId = (await params).product

    return (
        <>
            <p>{productId}</p>
        </>
    )
}
