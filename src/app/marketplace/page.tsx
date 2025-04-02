import { MarketplacePage, StyledButton, StyledLink, Typography } from "@/components/shared";
import { Button } from "@/components/ui";
import { getAllProducts } from "@/lib/actions";
import { ProductData } from "@/lib/types";



export default async function Page() {
    
    const allProducts = await getAllProducts()
    console.log(allProducts)

    return(
        <div>
            <MarketplacePage products={allProducts}/>
        </div>
    )
}