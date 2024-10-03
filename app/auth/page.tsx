
import { Auth } from '@/components/shared/auth'
import React from 'react'

interface Props {
    className?: string
}

export default function Page({ params: { className } }: { params: Props }) {
    return (
        <div className={className}>
            <Auth/>
        </div>
    )
}

