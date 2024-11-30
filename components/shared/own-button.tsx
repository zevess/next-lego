import React from 'react'
import { Button } from '../ui'
import { Plus, X } from 'lucide-react'

interface Props {
    className?: string,
    isWish: boolean,
    isOwn: boolean,
    onClick: () => void
}

export const OwnButton: React.FC<Props> = ({ className, isOwn, isWish, onClick }) => {
    return (
        <Button disabled={isWish} onClick={onClick} variant={'ghost'} className={className}>
            {isOwn ? <X /> : <Plus />}
        </Button>
    )
}
