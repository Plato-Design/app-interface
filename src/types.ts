/* 
https://github.com/fabien0102/ts-to-zod
*/

export type TCollectionsListQueryData = TPaginatedEndpointQueryData & {}

export type TCollectionsListResponseData = {
  collections: TCollectionFields[]
}

export type TPaginatedEndpointQueryData = {
  skip: number
  take: number
}

export type TRecordDefaultFields = {
  id: string
  createdAt: string
  updatedAt: string
}

export type TCurationFields = {
  publishedAt?: string
  curationSelections: TCurationSelectionFields[]
}

export type TCurationSelectionFields = {
  type: string
  collection?: TCollectionFields
  content?: string
}

export type TCollectionFields = {
  networkName: string
  contractAddress: string
  thumbnailUrl: string
  title: string
  description: string
  tokens: TTokenFields[]
}

export type TTokenFields = {
  name: string
  description?: string
  tokenId: string
  tokenMediaItems: TTokenMediaItemFields[]
  tokenUrls: TTokenUrlFields[]
}

export type TTokenMediaItemFields = {
  type: string
  mime: string
  url: string
}

export type TTokenUrlFields = {
  type: string
  url: string
}
