export declare type TCollectionsListQueryData = TPaginatedEndpointQueryData & {
    maxTokensPerCollection?: number;
};
export declare type TCollectionsListResponseData = {
    collections: TCollectionFields[];
};
export declare type TPaginatedEndpointQueryData = {
    skip: number;
    take: number;
};
export declare type TRecordDefaultFields = {
    id: string;
    createdAt: string;
    updatedAt: string;
};
export declare type TCurationFields = {
    publishedAt?: string;
    curationSelections: TCurationSelectionFields[];
};
export declare type TCurationSelectionFields = {
    type: string;
    collection?: TCollectionFields;
    content?: string;
};
export declare type TCollectionFieldsFlat = {
    networkName: string;
    contractAddress: string;
    thumbnailUrl: string;
    name: string;
    description?: string;
};
export declare type TCollectionFields = TCollectionFieldsFlat & {
    tokens: TTokenFields[];
    claimPhases: TClaimPhaseFields[];
};
export declare type TClaimPhaseFields = {
    mintMethod: string;
    mintArgs: string;
    mintStartAt: string;
    mintEndAt: string;
    mintPriceInWei: string;
    mintSupply: number;
};
export declare type TTokenFieldsFlat = {
    name: string;
    description?: string;
    tokenId: string;
};
export declare type TTokenFields = TTokenFieldsFlat & {
    tokenMediaItems: TTokenMediaItemFields[];
    tokenUrls: TTokenUrlFields[];
};
export declare type TTokenMediaItemFields = {
    representation: string;
    type: string;
    mimeType: string;
    url: string;
};
export declare type TTokenUrlFields = {
    type: string;
    url: string;
};
