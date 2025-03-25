import { CreateProductPage, Typography } from "@/components/shared";
import { auth } from "@/lib/auth";

export default async function Page() {
      const session = await auth()
    
    return(
        <div>
            <CreateProductPage userId={String(session?.user?.id)}/>
        </div>
    )
}