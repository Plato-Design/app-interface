export declare type TCollectionsListQueryData = TPaginatedEndpointQueryData & {};
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
export declare type TCollectionFields = {
    networkName: string;
    contractAddress: string;
    thumbnailUrl: string;
    title: string;
    description: string;
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
export declare type TTokenFields = {
    name: string;
    description?: string;
    tokenId: string;
    tokenMediaItems: TTokenMediaItemFields[];
    tokenUrls: TTokenUrlFields[];
};
export declare type TTokenMediaItemFields = {
    role: string;
    origin_field: string;
    mime: string;
    uri: string;
};
export declare type TTokenUrlFields = {
    type: string;
    url: string;
};
