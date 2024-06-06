export function countTopTags(data: { tags: string[] }[]) {
  const wordCount: { [key: string]: number } = {};

  data.forEach(item => {
    item.tags.forEach(tag => {
      wordCount[tag] = (wordCount[tag] || 0) + 1;
    });
  });

const sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);

return sortedWords.slice(0, 16);
};
