/* 
https://github.com/fabien0102/ts-to-zod
*/

export type TCollectionsListQueryData = TPaginatedEndpointQueryData & {
  maxTokensPerCollection?: number;
};

export type TCollectionsListResponseData = {
  collections: TCollectionFieldsSimplified[];
};

export type TCollectionFieldsSimplified = TCollectionFieldsFlat & {
  id: string;
  tokenMediaItems: TTokenMediaItemFields[];
  mintOptions: TMintOption[];
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
  description: string;
  urls: {
    type: string;
    url: string;
  }[]
  mintsLastHour: number;
  lastEvent: string
  firstEvent: string
  totalMints: number
  maxSupply: number
  metadataSource: string
  mediaSource: string
  contractKind: string
  floor: {
    amount: string;
    currency: string;
  }
};

export type TCollectionFields = TCollectionFieldsFlat & {
  tokens: TTokenFields[];
  claimPhases: TClaimPhaseFields[];
};

export type TClaimPhaseFields = {
  mintMethod: string;
  mintArgs: TRawMintArg[];
  mintPriceInWei: string;
};

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonObject
  | JsonArray;

export type JsonArray = JsonValue[];

export type JsonObject = { [key: string]: JsonValue };

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

export type TMintOption = {
  networkName: string;
  contractAddress: string;
  mintQuantity: string;
  mintPriceInWei: string;
  mintMethod: string;
  mintArgs: TMintOptionMintArg[];
};

export type TMintOptionMintArg = string | number | null;

export type TCallableMintOption = TMintOption & {
  executeMint: () => void;
};

export type TRawMintArg = {
  name: string;
} & (
  | {
      type: "address";
      value: "string";
    }
  | {
      type: "uint256";
      value: TMintArgBignumValue;
    }
  | {
      type: "bytes32[]";
      value: string[];
    }
);

export type TMintArgBignumValue = {
  type: "BigNumber";
  hex: string;
};

export type TABIElement = {
  name?: string;
  type: "error" | "event" | "function" | "constructor";
  anonymous?: boolean;
  stateMutability?: "view" | "nonpayable" | "payable";
  inputs: any[];
  outputs: any[];
};
