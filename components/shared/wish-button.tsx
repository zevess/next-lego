import React from 'react'
import { Button } from '../ui'
import { Heart } from 'lucide-react'

interface Props {
    className?: string,
    isWish: boolean,
    isOwn: boolean,
    onClick: () => void
}

export const WishButton: React.FC<Props> = ({ className, isOwn, isWish, onClick }) => {
    return (
        <Button disabled={isOwn} onClick={onClick} variant={'ghost'} className={className}>
            {isWish ? <Heart fill="red" strokeWidth={1} /> : <Heart />}
        </Button>
    )
}
