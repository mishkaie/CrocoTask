import {gameInterface} from "./gameInterface";

export interface FilteredCategoryInterface {
  name: string,
  category: string,
  totalGames: number,
  games: gameInterface[]
}

export interface CategoryRequestApiInterface {
  data: CategoryInterface[]
}

export interface CategoryInterface {
  category: string,
  games: gameInterface[]
  name: string,
  order: number,
  platform: string,
  totalGames: number,
  icon: string,
}

