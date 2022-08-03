/* 
https://github.com/fabien0102/ts-to-zod
*/

export type TCollectionsListQueryData = TPaginatedEndpointQueryData & {};

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

export type TCollectionFields = {
  networkName: string;
  contractAddress: string;
  thumbnailUrl: string;
  title: string;
  description: string;
  tokens: TTokenFields[];
  claimPhases: TClaimPhaseFields[];
};

export type TClaimPhaseFields = {
  mintMethod: string;
  mintArgs: string;
  mintStartAt: string;
  mintEndAt: string;
  mintPriceInWei: string;
  mintSupply: number;
};

export type TTokenFields = {
  name: string;
  description?: string;
  tokenId: string;
  tokenMediaItems: TTokenMediaItemFields[];
  tokenUrls: TTokenUrlFields[];
};

export type TTokenMediaItemFields = {
  role: string;
  origin_field: string;
  mime: string;
  uri: string;
};

export type TTokenUrlFields = {
  type: string;
  url: string;
};
