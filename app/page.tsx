import { auth } from "@/auth";
import { getSets, getUserCollection, getUserWishes } from "./actions";
import { SetSearch, SetsTable } from "@/components/shared";


export default async function Home({
  searchParams,
}: {
  searchParams?: {
    search?: string;
  };
}) {


  const query = searchParams?.search || '';


  const data = query ? await getSets(query) : null;

  console.log(data)

  const session = await auth()

  const userData = session?.user

  const userCollections = userData?.id ? await getUserCollection(userData?.id) : "";
  const userWishes = userData?.id ? await getUserWishes(userData?.id) : "";
  

  return (
    <>
      <SetSearch />
      {query.length !== 0 && <SetsTable userWishes={userWishes} userCollection={userCollections} setsData={data.results} />}
    </>
  )
}
