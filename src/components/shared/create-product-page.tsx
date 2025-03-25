"use client"
import React from 'react'
import { Typography } from './typography'
import { Button, Input, Label, Textarea } from '../ui'
import Image from 'next/image'
import { StyledButton } from './styled-button'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SetSearchDropdown } from './set-search-dropdown'
import { StyledInput } from './styled-input'
import { useDebounce } from 'react-use'
import { createProduct, getDataTest, getSets, uploadImageToImgbb } from '@/lib/actions'
import { productProps, SetDataJSON } from '@/lib/types'
import { useSession } from 'next-auth/react'


interface Props {
    className?: string,
    userId: string,
}

export const CreateProductPage: React.FC<Props> = ({ className, userId }) => {

    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [location, setLocation] = React.useState('')
    const [price, setPrice] = React.useState(0)
    const [selectedItems, setSelectedItems] = React.useState<SetDataJSON[]>([]);

    const [images, setImages] = React.useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = React.useState<string[]>([]);

    const handleCreateProduct = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const promises = images.map(async (item) => {
                return await uploadImageToImgbb(item);
            })
            const uploadedImages = await Promise.all(promises);
            
            const obj: productProps = {
                title: title,
                description: description,
                location: location,
                price: price,
                userId: userId,
                images: uploadedImages,
                sets: selectedItems
            }
            console.log(obj);


            await createProduct(obj)

        } catch (error) {
            console.log(error)
        }

    }

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const newImages = Array.from(files); // Преобразуем FileList в массив
            setImages((prevImages) => [...prevImages, ...newImages]); // Добавляем новые изображения в массив

            // Создаем URL-представления для новых изображений
            const newPreviews = newImages.map((file) => URL.createObjectURL(file));
            setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
        }
    };

    const handleRemoveImage = (index: number) => {
        setImages((prevImages) => {
            const updatedImages = prevImages.filter((_, i) => i !== index);
            return updatedImages;
        });

        setImagePreviews((prevPreviews) => {
            const updatedPreviews = prevPreviews.filter((_, i) => i !== index);
            return updatedPreviews;
        });
    };

    return (
        <div className={className}>
            <Typography variant='h2' text={'Добавить товар'} />
            <form onSubmit={handleCreateProduct}>
                <Label htmlFor='title'>Название товара</Label>
                <Input placeholder='введите название товара' required name='title' type='text' value={title} onChange={(e) => setTitle(e.target.value)} id='title' />

                <Label htmlFor='description'>Описание товара</Label>
                <Textarea placeholder='введите описание товара' value={description} onChange={(e) => setDescription(e.target.value)} name='description' id='description' />

                <Label htmlFor='location'>Местоположение</Label>
                <Input placeholder='введите местоположение' value={location} onChange={(e) => setLocation(e.target.value)} name='location' id='location' type='text' />

                <Label htmlFor='price'>Цена</Label>
                <Input placeholder='введите цену' id='price' name='price' type='number' value={price} onChange={(e) => setPrice(Number(e.target.value))} />

                <Label htmlFor='images'>Изображения</Label>
                <Input placeholder='загрузите фото' id='images' name='images' type='file' accept='image/*' onChange={handleImageUpload} />

                <div className='flex flex-wrap'>
                    {imagePreviews.map((preview, index) => (
                        <div
                            key={index}
                            className='relative w-5/6 md:w-3/4 lg:w-2/5 m-1 mx-auto'
                        >
                            <img
                                src={preview}
                                alt={`Preview ${index}`}
                                className='h-full object-cover rounded-lg border-gray-400 border-[1px]'
                            />

                            <StyledButton
                                onClick={() => handleRemoveImage(index)}
                                className='absolute top-0 right-0 dark:shadow-gray-500 dark:bg-zinc-300'
                            >
                                <X />
                            </StyledButton>
                        </div>
                    ))}
                </div>

                <Label htmlFor='sets'>Связанные наборы</Label>
                <SetSearchDropdown selectedItems={selectedItems} setSelectedItems={setSelectedItems} />

                <Button type='submit'>Создать товар</Button>
            </form>
        </div>
    )
}
