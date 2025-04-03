import React from 'react'
import { Card, Carousel } from '../ui'
import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { CardContent } from '../ui/card'

interface Props {
    className?: string,
    images: string[]
}

export const ImageCarousel: React.FC<Props> = ({ className, images }) => {
    console.log(images)
    return (
        <div className={'w-8/12 mt-4 lg:w-1/2'}>
            <Carousel className="">
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <img src={String(image)} alt='w' />
                                        {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {images.length > 1 && <>
                    <CarouselPrevious />
                    <CarouselNext />
                </>}

            </Carousel>
        </div>
    )
}
