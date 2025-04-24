import { MarketplacePage } from "@/components/shared";
import { getAllProducts } from "@/lib/actions/product";

export default async function Page() {
    
    const allProducts = await getAllProducts()
 
    return(
        <div>
            <MarketplacePage products={allProducts}/>
        </div>
    )
}