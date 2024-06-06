  import { defineStore } from 'pinia'

interface IFavoritesListItem {
	title: string;
  tags: string[];
	logo: string;
	author: string;
	authorLink: string;
	description: string;
	rss: string;
	webSite: string;
	isFree: boolean;
}

export const useMyFavoritesListStore = defineStore({
  id: 'myFavoritesListStore',
  state: () => ({
    favoritesList: [] as IFavoritesListItem[],
  }),
  actions: {
    addFavorite(item: IFavoritesListItem) {
      const index = this.favoritesList.findIndex((i) => i.webSite === item.webSite)
      if (index === -1) {
        this.favoritesList.push(item)
        return true;
      }
      else return false;
    },
    removeFavorite(item: IFavoritesListItem) {
      const index = this.favoritesList.findIndex((i) => i.webSite === item.webSite)
      if (index !== -1) {
        this.favoritesList.splice(index, 1)
      }
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
})
