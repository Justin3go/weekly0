import FlexSearch from 'flexsearch';
import { soraData } from '../data/soraList';

export const curIndex = new FlexSearch.Index({
  tokenize: 'full'
});
// build index
soraData.forEach((item, index) => {
  curIndex.add(index, item.prompt);
});
