export interface ProviderInterface {
  name: string,
  provider: string
}

export interface ProviderApiInterface {
  data: [{
    name: string,
    provider: string
  }]
}
