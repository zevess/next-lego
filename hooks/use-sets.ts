import { getDataTest, getSets, getSingleSet } from '@/app/actions';
import { MultipleSetsDataJSON } from '@/utils/types';
import React from 'react'

export const useSets = (searchQuery: string) => {

  const [sets, setSets] = React.useState<any>();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getSetsByQuery(searchQuery:string) {
      try {
        setLoading(true);
        const sets = await getDataTest(searchQuery);
        setSets(sets)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getSetsByQuery(searchQuery)
  }, [searchQuery])

  return{
    sets, loading
  }
}
