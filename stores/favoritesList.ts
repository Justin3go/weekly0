  import { defineStore } from 'pinia'

interface IFavoritesListItem {
  prompt: string;
  author: string;
  homepage: string;
  video: string;
  publish: string;
}

export const useMyFavoritesListStore = defineStore({
  id: 'myFavoritesListStore',
  state: () => ({
    favoritesList: [] as IFavoritesListItem[],
  }),
  actions: {
    addFavorite(item: IFavoritesListItem) {
      const index = this.favoritesList.findIndex((i) => i.prompt === item.prompt)
      if (index === -1) {
        this.favoritesList.push(item)
        return true;
      }
      else return false;
    },
    removeFavorite(item: IFavoritesListItem) {
      const index = this.favoritesList.findIndex((i) => i.prompt === item.prompt)
      if (index !== -1) {
        this.favoritesList.splice(index, 1)
      }
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
})
