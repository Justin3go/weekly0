import FlexSearch from 'flexsearch';
import { weeklyData } from '../data/weeklyData';

export const curIndex = new FlexSearch.Index({
  tokenize: 'full',
  // 中文 https://github.com/nextapps-de/flexsearch?tab=readme-ov-file#cjk-word-break-chinese-japanese-korean
  // 同时支持中文和英文搜索 https://github.com/nextapps-de/flexsearch/issues/202  
  encode: function (str) {
    const cjkItems = str.replace(/[\x00-\x7F]/g, "").split("");
    const asciiItems = str.split(/\W+/);
    return cjkItems.concat(asciiItems);
  }
});
// build index
weeklyData.forEach((item, index) => {
  curIndex.add(index, item.description);
  curIndex.add(index, item.title);
  curIndex.add(index, item.author);
  curIndex.add(index, item.tags.join(' '));
});