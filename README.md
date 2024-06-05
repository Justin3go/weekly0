<div align="center">

<a href="https://usesora.app" target="blank">
  <img src="https://usesora.app/logobg.png" height="200px" alt="logo" style="border-radius: 20px"/>
</a>

# Use Sora

[![Nuxt3](https://img.shields.io/badge/Nuxt3-00C58E?style=for-the-badge&logo=nuxt.js&logoColor=white)](https://nuxt.com/)
[![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=white)](https://vuetifyjs.com/)
[![License MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/license/mit/)

Collecting the highest quality prompts for Sora, providing creators, researchers, and technology enthusiasts with a tool for sharing, exploring, and discovering the latest Sora video creations.

![demo](./images/demo.png)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FJustin3go%2Fusesora)

</div>

## Features

- [x] Basic functionality implemented;
- [ ] Collecting more high-quality prompts for Sora;
- [x] Optimize the search algorithm by using some open-source inverted index search engines;
- [x] Add hot words statistics
- [x] Add to favorites list and save it locally in the browser.

## Development

```bash
npm i -g pnpm
pnpm install
pnpm dev
``` 

## How to Submit a Prompt

1. Fork this repository.
2. Add your prompt to [`server/data/soraList.ts`](./server/data/soraList.ts) following the historical format.
3. Submit a PR (Pull Request).
4. Wait for review.

