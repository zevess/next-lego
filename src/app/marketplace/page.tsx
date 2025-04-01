import { MarketplacePage, StyledButton, StyledLink, Typography } from "@/components/shared";
import { Button } from "@/components/ui";
import { getAllProducts } from "@/lib/actions";



export default async function Page() {
    
    const allProducts = await getAllProducts()
    console.log(allProducts)

    return(
        <div>
            <MarketplacePage/>
        </div>
    )
}