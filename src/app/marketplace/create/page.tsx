import { CreateProductPage } from "@/components/shared";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Page() {
    const session = await auth()

    if(!session) redirect('/')

    return (
        <div>
            <CreateProductPage userId={String(session?.user?.id)} />
        </div>
    )
}