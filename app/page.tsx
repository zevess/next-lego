import { auth } from "@/auth";
import { getDataTest, getSets, getUser, getUserByNick, getUserCollection, getUserWishes } from "./actions";
import { PaginationDemo, SetSearch, SetSearchResults, SetsTable } from "@/components/shared";
import useSessionStore from "@/store/user";


export default async function Home({
  searchParams,
}: {
  searchParams?: {
    search?: string;
    page?: string
    themeId?: string,
    minYear?: string,
    maxYear?: string
  };
}) {

  const query = searchParams?.search || '';
  const page = searchParams?.page || '';
  const themeId = searchParams?.themeId || '';
  const minYear = searchParams?.minYear || '';
  const maxYear = searchParams?.maxYear || '';

  const data = page ? await getSets(Number(page), query, Number(themeId), Number(minYear), Number(maxYear)) : "";
  // const data = query ? await getDataTest(query, Number(page)) : null;
  // console.log(data)

  const session = await auth()
  // const session = useSessionStore((state) => state.session)

  const userData = session?.user?.id ? await getUser(session.user.id) : null;
  console.log(userData)

  const userCollections = userData?.id ? await getUserCollection(userData?.id) : "";
  const userWishes = userData?.id ? await getUserWishes(userData?.id) : "";

  const isSameUser = session?.user?.id == userData?.id
  console.log(isSameUser)
  return (
    <>
      <SetSearch />
      {data &&
        <div className="mb-4">
          <SetsTable isSameUser={isSameUser} userWishes={userWishes} userCollection={userCollections} setsData={data.results} />
          {data.count != 0 && <PaginationDemo totalCount={data.count} />}
        </div>
      }
    </>
  )
}
