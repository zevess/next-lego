"use client"
import React from 'react'
import { Typography } from './typography'
import { Button, Input, Label, Textarea } from '../ui'
import { StyledButton } from './styled-button'
import { X } from 'lucide-react'
import { SetSearchDropdown } from './set-search-dropdown'
import { useRouter } from 'next/navigation'
import { NewProductData, ProductData, SetData } from '@/lib/types'
import { createProduct, deleteProduct, updateProduct } from '@/lib/actions/product'
import { uploadImageToImgbb } from '@/lib/actions/user'
import { productSchema, ProductSchema } from '@/lib/schemas/productSchema'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Alert } from './alert'
import { handleRemoveProductImage, handleUploadProductImage } from '@/lib/functions'

interface Props {
    className?: string,
    userId: string,
    product?: ProductData,
    isEditing: boolean
}

export const CreateProductPage: React.FC<Props> = ({ className, userId, product, isEditing }) => {

    const [productImages, setProductImages] = React.useState<File[]>([]);
    const [productImagePreviews, setProductImagePreviews] = React.useState<string[]>(!isEditing ? [] : product?.images as string[]);
    const [selectedItems, setSelectedItems] = React.useState<SetData[]>(!isEditing ? [] : product?.sets as SetData[]);
    const [isLoading, setIsLoading] = React.useState(false);
    const router = useRouter()

    const { register, handleSubmit, setError, watch, formState: { errors, isDirty, isValid, isSubmitting } } = useForm<ProductSchema>({
        defaultValues: {
            title: product?.title,
            description: product?.description,
            location: product?.location,
            price: product?.price
        },
        resolver: zodResolver(productSchema),
        mode: "onChange"
    })

    const title = watch("title")
    const description = watch("description")
    const location = watch("location")
    const price = watch("price")

    const productId = product?.id as string
    let allImages = product?.images ? Array.from(product?.images) : []


    const isAllFormFilled = Boolean(title && description && location && price && (productImages.length || productImagePreviews.length))

    const onSubmit: SubmitHandler<ProductSchema> = async (data) => {
        try {
            setIsLoading(true);

            const promises = productImages.map(async (item) => {
                return await uploadImageToImgbb(item);
            })

            const uploadedImages: string[] = await Promise.all(promises);
            allImages.push(...uploadedImages)
            console.log(data)
            const product: ProductData = {
                title: data.title,
                description: data.description,
                location: data.location,
                price: data.price,
                userId: userId,
                images: allImages,
                sets: selectedItems
            }

            const createdProduct: NewProductData = !isEditing ? await createProduct(product).catch(() => setIsLoading(false)) : await updateProduct(product, productId).catch(() => setIsLoading(false))

            router.push(!isEditing ? `/marketplace/${createdProduct.newProduct.id}` : `/marketplace/${productId}`)

        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }

    }

    return (
        <div className={className}>
            <Typography variant='h2' text={!isEditing ? 'Добавить товар' : "Изменить товар"} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor='title'>Название товара</Label>
                <Input {...register('title', { required: true })} placeholder='введите название товара' required name='title' id='title' />

                <Label htmlFor='description'>Описание товара</Label>
                <Textarea {...register('description', { required: true })} placeholder='введите описание товара' name='description' id='description' />

                <Label htmlFor='location'>Местоположение</Label>
                <Input {...register('location', { required: true })} placeholder='введите местоположение' name='location' id='location' type='text' />

                <Label htmlFor='price'>Цена</Label>
                <Input {...register('price', {
                    required: true,
                    setValueAs: (value) => (Number(value))
                })} placeholder='введите цену' id='price' name='price' type='number' />

                <Label htmlFor='images'>Изображения</Label>
                <Input placeholder='загрузите фото' id='images' name='images' type='file' accept='image/*' onChange={(event) => handleUploadProductImage(event, setProductImages, setProductImagePreviews)} />

                <div className='flex flex-wrap'>
                    {productImagePreviews.map((preview, index) => (
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
                                onClick={() => handleRemoveProductImage(index, setProductImages, setProductImagePreviews)}
                                className='absolute top-0 right-0 dark:shadow-gray-500 dark:bg-zinc-300'
                            >
                                <X />
                            </StyledButton>
                        </div>
                    ))}
                </div>

                <Label htmlFor='sets'>Связанные наборы</Label>
                <SetSearchDropdown selectedItems={selectedItems} setSelectedItems={setSelectedItems} />

                <div className='flex justify-between'>
                    <Button type='submit' disabled={!isAllFormFilled || !userId || isLoading}>{isLoading ? "Загрузка..." : (!isEditing ? "Создать товар" : "Изменить товар")}</Button>
                    {isEditing && <Alert alertActionText='Удалить' alertCancelText='Отмена' alertTitle='Вы уверены что хотите удалить товар?' onClick={() => deleteProduct(productId).then(() => router.push('/marketplace'))}>
                        <Button className='bg-red-500 hover:bg-red-700'>Удалить товар</Button>
                    </Alert>}
                </div>

            </form>
        </div>
    )
}
