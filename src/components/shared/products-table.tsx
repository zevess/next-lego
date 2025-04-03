import { ProductData } from '@/lib/types'
import React from 'react'
import { ProductCard } from './product-card'


interface Props {
  className?: string,
  products: ProductData[] | ""
}

export const ProductsTable: React.FC<Props> = ({ className, products }) => {
  return (
    <div className={'flex flex-wrap justify-evenly mt-8 gap-2 mb-4 sm:gap-8'}>
      {products && products.map(item => (
        <ProductCard product={item} key={item.id} />
      ))}
    </div>
  )
}
