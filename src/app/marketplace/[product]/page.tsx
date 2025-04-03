import { NotFound, ProductPage } from "@/components/shared";
import { getProduct } from "@/lib/actions/product";


export default async function Page({ params }: { params: Promise<{ product: string }>}) {

    const productId = (await params).product

    const product = await getProduct(productId);

    console.log(product);

    if(!product){
        return (
            <NotFound type={'product'}/>
        )
    }

    return(
        <ProductPage product={product} user={product.user}/>
    )
}