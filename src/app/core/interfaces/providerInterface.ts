export interface FilteredProviderInterface {
  name: string,
  provider: string
}

export interface ProviderRequestApiInterface {
  data: ProviderInterface[]
}

export interface ProviderInterface {
  name: string,
  provider: string,
  enabled: boolean,
  gamesCount: number,
  tags: string[],
  type: string,
  logo: string
}
