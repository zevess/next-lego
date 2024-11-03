import { Container } from "@/components/shared/container";
import { Header } from "@/components/shared/header";

import { Logo } from "@/components/shared/logo";
import { SetSearch } from "@/components/shared/set-search";
import { SetsTable } from "@/components/shared/sets-table";
import { Typography } from "@/components/shared/typography";
import React, { useEffect, useState } from "react";
import { addSetToCollection, getDataTest, getSets, getUserCollection, getUserWishes } from "./actions";
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
