import { auth } from "@/auth";
import { getDataTest, getSets, getUserCollection, getUserWishes } from "./actions";
import { PaginationDemo, SetSearch, SetSearchResults, SetsTable } from "@/components/shared";


export default async function Home({
  searchParams,
}: {
  searchParams?: {
    search?: string;
    page?: string
  };
}) {


  const query = searchParams?.search || '';
  const page = searchParams?.page || '';
  // console.log(query, page);

  const data = query ? await getSets(query, Number(page)) : null;
  // const data = query ? await getDataTest(query, Number(page)) : null;
  console.log(data)

  const session = await auth()

  const userData = session?.user

  const userCollections = userData?.id ? await getUserCollection(userData?.id) : "";
  const userWishes = userData?.id ? await getUserWishes(userData?.id) : "";


  return (
    <>
      <SetSearch />
      {query.length !== 0 &&
        <>
          <SetsTable userWishes={userWishes} userCollection={userCollections} setsData={data.results} />
          {data.count !=0 && <PaginationDemo totalCount={data.count} />}
          
        </>
      }
    </>
  )
}
