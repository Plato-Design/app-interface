export declare type TCollectionsListQueryData = TPaginatedEndpointQueryData & {
    maxTokensPerCollection?: number;
};
export declare type TCollectionsListResponseData = {
    collections: TCollectionFieldsSimplified[];
};
export declare type TCollectionFieldsSimplified = TCollectionFieldsFlat & {
    id: string;
    tokenMediaItems: TTokenMediaItemFields[];
    mintOptions: TMintOption[];
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
    mintArgs: TRawMintArg[];
    mintPriceInWei: string;
};
export declare type JsonValue = string | number | boolean | null | JsonObject | JsonArray;
export declare type JsonArray = JsonValue[];
export declare type JsonObject = {
    [key: string]: JsonValue;
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
export declare type TMintOption = {
    networkName: string;
    contractAddress: string;
    mintQuantity: number;
    mintPriceInWei: string;
    mintMethod: string;
    mintArgs: TMintOptionMintArg[];
};
export declare type TMintOptionMintArg = string | number | null;
export declare type TCallableMintOption = TMintOption & {
    executeMint: () => void;
};
export declare type TRawMintArg = {
    name: string;
} & ({
    type: "address";
    value: "string";
} | {
    type: "uint256";
    value: TMintArgBignumValue;
} | {
    type: "bytes32[]";
    value: string[];
});
export declare type TMintArgBignumValue = {
    type: "BigNumber";
    hex: string;
};
export declare type TABIElement = {
    name?: string;
    type: "error" | "event" | "function" | "constructor";
    anonymous?: boolean;
    stateMutability?: "view" | "nonpayable" | "payable";
    inputs: any[];
    outputs: any[];
};
