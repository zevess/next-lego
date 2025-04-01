"use client"
import React, { useState } from 'react'
import { Input } from '../ui';
import { UserAvatar } from './user-avatar';

interface Props {
    className?: string
}

interface Props {
    className?: string;
    avatarUrl?: string | null
   
    setImage: React.Dispatch<React.SetStateAction<File | null>>
}

export const AvatarUploader: React.FC<Props> = ({ avatarUrl,  setImage }) => {

    const [file, setFile] = useState<string | null>(avatarUrl ? avatarUrl : null);
 
    const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setImage(event.target.files[0]);
            const fileUrl = URL.createObjectURL(event.target.files[0]);
            setFile(fileUrl);
        }
    };

    return (
        <div className='flex flex-col items-center '>
            {file && <UserAvatar variant='big' src={file} />}
            <Input type='file' accept='image/*' className='w-3/4' onChange={handleImageSelect} />
        </div>
    );
};
