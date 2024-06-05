import { countTopWords } from "~/utils/countTopWords"
import { soraData } from "../data/soraList"

const topWords = countTopWords(soraData)
export default defineEventHandler(async (event) => {
  return topWords.map(item => item[0])
})
