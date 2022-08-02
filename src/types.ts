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
  curationSelections: TCurationSelection[]
}

export type TCurationSelection = {
  type: number
  collectionId?: string
  curationId?: string
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
  title: string
  description: string
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
