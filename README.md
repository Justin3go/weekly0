<div align="center">

<a href="https://weekly0.com" target="blank">
  <img src="https://weekly0.com/favicon.ico" height="50px" alt="logo" style="border-radius: 10px"/>
</a>

# weekly0 - 优质周刊集合

[![Nuxt3](https://img.shields.io/badge/Nuxt3-00C58E?style=for-the-badge&logo=nuxt.js&logoColor=white)](https://nuxt.com/)
[![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=white)](https://vuetifyjs.com/)
[![License MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/license/mit/)

收刮中文互联网上的奇迹...

<img src="https://weekly0.com/cover-2.png" alt="cover" style="border-radius: 10px"/>

</div>

## 功能

- 🌞 支持明/暗双主题
- 🔍 支持多字段搜索，如标签、标题、作者、描述等
- 📁 支持收藏到本地，纯浏览器本地存储，保证隐私
- 🔢 支持多种字段的排序，如收藏与未收藏、付费与免费的排序等
- 🔥 支持热门标签统计及筛选
- 🔗 支持复制RSS链接
- 🌐 支持网站预览与跳转

## 本地开发

```bash
npm i -g pnpm
pnpm install
pnpm dev
``` 

## 如何提交周刊

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

