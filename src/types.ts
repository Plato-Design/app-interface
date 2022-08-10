/* 
https://github.com/fabien0102/ts-to-zod
*/

export type TCollectionsListQueryData = TPaginatedEndpointQueryData & {
  maxTokensPerCollection?: number;
};

export type TCollectionsListResponseData = {
  collections: TCollectionFields[];
};

export type TPaginatedEndpointQueryData = {
  skip: number;
  take: number;
};

export type TRecordDefaultFields = {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type TCurationFields = {
  publishedAt?: string;
  curationSelections: TCurationSelectionFields[];
};

export type TCurationSelectionFields = {
  type: string;
  collection?: TCollectionFields;
  content?: string;
};

export type TCollectionFieldsFlat = {
  networkName: string;
  contractAddress: string;
  thumbnailUrl: string;
  name: string;
  description?: string;
};

export type TCollectionFields = TCollectionFieldsFlat & {
  tokens: TTokenFields[];
  claimPhases: TClaimPhaseFields[];
};

export type TClaimPhaseFields = {
  mintMethod: string;
  mintArgs: string;
  mintPriceInWei: string;
};

export type TTokenFieldsFlat = {
  name: string;
  description?: string;
  tokenId: string;
};

export type TTokenFields = TTokenFieldsFlat & {
  tokenMediaItems: TTokenMediaItemFields[];
  tokenUrls: TTokenUrlFields[];
};

export type TTokenMediaItemFields = {
  representation: string;
  type: string;
  mimeType: string;
  url: string;
};

export type TTokenUrlFields = {
  type: string;
  url: string;
};
