import { soraData } from '../data/soraList';
import { curIndex } from "../flexsearch"

interface ISoraQuery {
  search: string;
}

export default defineEventHandler(async (event) => {
  const { search }: ISoraQuery = getQuery(event); 
  if(!search) return soraData

  const results = curIndex.search(search);
  return results.map((index) => soraData[+index]);
})
