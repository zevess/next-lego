import { auth } from "@/lib/auth";
import { getSets, getUser, getUserCollection, getUserWishes } from "@/lib/actions";
import { PaginationDemo, SetSearch, SetsTable } from "@/components/shared";

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{
    search?: string;
    page?: string
    themeId?: string,
    minYear?: string,
    maxYear?: string
  }>;
}) {

  const query = (await searchParams)?.search;
  const page = (await searchParams)?.page;
  const themeId = (await searchParams)?.themeId;
  const minYear = (await searchParams)?.minYear;
  const maxYear = (await searchParams)?.maxYear;
  
  // const query = searchParams?.search || '';
  // const page = searchParams?.page || '';
  // const themeId = searchParams?.themeId || '';
  // const minYear = searchParams?.minYear || '';
  // const maxYear = searchParams?.maxYear || '';

  const data = page ? await getSets(Number(page), query, Number(themeId), Number(minYear), Number(maxYear)) : "";

  const session = await auth()

  const userData = session?.user?.id ? await getUser(session.user.id) : null;
  const userCollections = userData?.id ? await getUserCollection(userData?.id) : "";
  const userWishes = userData?.id ? await getUserWishes(userData?.id) : "";

  const isSameUser = (session?.user?.id == userData?.id) && (session !== null)

  return (
    <>
      <SetSearch />
      {data &&
        <div className="mb-4">
          <SetsTable userId={userData?.id} isSameUser={isSameUser} userWishes={userWishes} userCollection={userCollections} setsData={data.results} />
          {data.count != 0 && <PaginationDemo totalCount={data.count} />}
        </div>
      }
    </>
  )
}
