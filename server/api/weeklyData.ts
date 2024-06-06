import { weeklyData } from '../data/weeklyData';
import { curIndex } from "../flexsearch"

interface IUserQuery {
  search: string;
}

export default defineEventHandler(async (event) => {
  const { search }: IUserQuery = getQuery(event); 
  if(!search) return weeklyData

  const results = curIndex.search(search);
  return results.map((index) => weeklyData[+index]);
})
