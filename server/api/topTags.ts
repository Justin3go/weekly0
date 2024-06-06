import { countTopTags } from "~/utils/countTopTags"
import { weeklyData } from "../data/weeklyData"

const topWords = countTopTags(weeklyData)
export default defineEventHandler(async (event) => {
  return topWords.map(item => item[0])
})
