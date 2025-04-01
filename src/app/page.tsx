import { auth } from "@/lib/auth";

import { PaginationDemo, SetSearch, SetsTable } from "@/components/shared";

import { Metadata } from 'next';
import { getSets, getUser, getUserCollection, getUserWishes } from "@/lib/actions";


export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Promise<{
    search?: string;
  }>;
}): Promise<Metadata> {
  const search = (await searchParams)?.search
  const searchTitle = "Поиск по запросу " + search
  return {
    title: search ? searchTitle : "MYLEGOLIST"
  };
}

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

  const data = page ? await getSets(Number(page), query, Number(themeId), Number(minYear), Number(maxYear)) : "";

  const session = await auth()

  const userData = session?.user?.id ? await getUser(session.user.id) : null;
  const userCollections = userData ? await getUserCollection(userData.id) : "";
  const userWishes = userData ? await getUserWishes(userData.id) : "";

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
