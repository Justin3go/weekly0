# 提交您的周刊

1. fork 本仓库
2. clone 到本地或者直接在 GitHub 上编辑
3. 进入`/server/data/weeklyData.ts`
4. 根据以往格式添加您的周刊信息，像下面这样

```typescript
{
  title: 'FAV0周刊',
  author: 'Justin3go',
  authorLink: 'https://justin3go.com',
  logo: 'https://fav0.com/favicon.ico',
  description: '《FAV0周刊》：记录每周所见所闻，主要关注独立开发、前端、AI领域以及计算机相关内容',
  tags: ['独立开发', '前端', 'AI', '软件'],
  rss: 'https://fav0.com/feed.xml',
  webSite: 'https://fav0.com',
  isFree: true
},
```
5. 提交 PR 即可（在Pull Requests里面New一个），等待合并即可，我会迅速处理...
