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
    curationSelections: TCurationSelection[];
};
export declare type TCurationSelection = {
    type: number;
    collectionId?: string;
    curationId?: string;
    content?: string;
};
export declare type TCollectionFields = {
    networkName: string;
    contractAddress: string;
    thumbnailUrl: string;
    title: string;
    description: string;
    tokens: TTokenFields[];
};
export declare type TTokenFields = {
    title: string;
    description: string;
    tokenMediaItems: TTokenMediaItemFields[];
    tokenUrls: TTokenUrlFields[];
};
export declare type TTokenMediaItemFields = {
    type: string;
    mime: string;
    url: string;
};
export declare type TTokenUrlFields = {
    type: string;
    url: string;
};
