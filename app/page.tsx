import { Container } from "@/components/shared/container";
import { Header } from "@/components/shared/header";

import { Logo } from "@/components/shared/logo";
import { SetSearch } from "@/components/shared/set-search";
import { SetsTable } from "@/components/shared/sets-table";
import { Typography } from "@/components/shared/typography";
import React, { useEffect, useState } from "react";
import { addSetToCollection, getDataTest, getSets, getUserCollection } from "./actions";
import { testData } from "@/utils/types";
import { auth } from "@/auth";

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

  // addSetToCollection(testData.results[0], "cm24hc1wa00008azwx90bev6b")

  return (
    <>
      <SetSearch />
      {query.length !== 0 && <SetsTable setsData={data.results} />}
    </>
  )
}

//   async function getSetsTest(searchQuery: string) {
//     try {
//       setLoading(true);
//       const sets = await getDataTest(searchQuery);
//       setData(sets);
//     } catch (error) {
//       console.log(error)
//     } finally{
//       setLoading(false)
//     }
//   }
//   getSetsTest(query)
// }, [])

// console.log(query);