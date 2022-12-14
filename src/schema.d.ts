import { z } from "zod";
export declare const tPaginatedEndpointQueryDataSchema: z.ZodObject<{
    skip: z.ZodNumber;
    take: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    skip: number;
    take: number;
}, {
    skip: number;
    take: number;
}>;
export declare const tRecordDefaultFieldsSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: string;
    updatedAt: string;
}, {
    id: string;
    createdAt: string;
    updatedAt: string;
}>;
export declare const tCollectionFieldsFlatSchema: z.ZodObject<{
    networkName: z.ZodString;
    contractAddress: z.ZodString;
    thumbnailUrl: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    urls: z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        url: string;
    }, {
        type: string;
        url: string;
    }>, "many">;
    mintsLastHour: z.ZodNumber;
    lastEvent: z.ZodString;
    firstEvent: z.ZodString;
    totalMints: z.ZodNumber;
    maxSupply: z.ZodNumber;
    metadataSource: z.ZodString;
    mediaSource: z.ZodString;
    contractKind: z.ZodString;
    floor: z.ZodOptional<z.ZodObject<{
        amount: z.ZodString;
        currency: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        amount: string;
        currency: string;
    }, {
        amount: string;
        currency: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    floor?: {
        amount: string;
        currency: string;
    } | undefined;
    networkName: string;
    contractAddress: string;
    thumbnailUrl: string;
    name: string;
    description: string;
    urls: {
        type: string;
        url: string;
    }[];
    mintsLastHour: number;
    lastEvent: string;
    firstEvent: string;
    totalMints: number;
    maxSupply: number;
    metadataSource: string;
    mediaSource: string;
    contractKind: string;
}, {
    floor?: {
        amount: string;
        currency: string;
    } | undefined;
    networkName: string;
    contractAddress: string;
    thumbnailUrl: string;
    name: string;
    description: string;
    urls: {
        type: string;
        url: string;
    }[];
    mintsLastHour: number;
    lastEvent: string;
    firstEvent: string;
    totalMints: number;
    maxSupply: number;
    metadataSource: string;
    mediaSource: string;
    contractKind: string;
}>;
export declare const tTokenFieldsFlatSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    tokenId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    description?: string | undefined;
    name: string;
    tokenId: string;
}, {
    description?: string | undefined;
    name: string;
    tokenId: string;
}>;
export declare const tTokenMediaItemFieldsSchema: z.ZodObject<{
    representation: z.ZodString;
    type: z.ZodString;
    mimeType: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
    url: string;
    representation: string;
    mimeType: string;
}, {
    type: string;
    url: string;
    representation: string;
    mimeType: string;
}>;
export declare const tTokenUrlFieldsSchema: z.ZodObject<{
    type: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
    url: string;
}, {
    type: string;
    url: string;
}>;
export declare const tMintOptionMintArgSchema: z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
export declare const tMintArgBignumValueSchema: z.ZodObject<{
    type: z.ZodLiteral<"BigNumber">;
    hex: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "BigNumber";
    hex: string;
}, {
    type: "BigNumber";
    hex: string;
}>;
export declare const tABIElementSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    type: z.ZodUnion<[z.ZodLiteral<"error">, z.ZodLiteral<"event">, z.ZodLiteral<"function">, z.ZodLiteral<"constructor">]>;
    anonymous: z.ZodOptional<z.ZodBoolean>;
    stateMutability: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"view">, z.ZodLiteral<"nonpayable">, z.ZodLiteral<"payable">]>>;
    inputs: z.ZodArray<z.ZodAny, "many">;
    outputs: z.ZodArray<z.ZodAny, "many">;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    anonymous?: boolean | undefined;
    stateMutability?: "view" | "nonpayable" | "payable" | undefined;
    type: "function" | "error" | "event" | "constructor";
    inputs: any[];
    outputs: any[];
}, {
    name?: string | undefined;
    anonymous?: boolean | undefined;
    stateMutability?: "view" | "nonpayable" | "payable" | undefined;
    type: "function" | "error" | "event" | "constructor";
    inputs: any[];
    outputs: any[];
}>;
export declare const tCollectionsListQueryDataSchema: z.ZodIntersection<z.ZodObject<{
    skip: z.ZodNumber;
    take: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    skip: number;
    take: number;
}, {
    skip: number;
    take: number;
}>, z.ZodObject<{
    maxTokensPerCollection: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    maxTokensPerCollection?: number | undefined;
}, {
    maxTokensPerCollection?: number | undefined;
}>>;
export declare const tTokenFieldsSchema: z.ZodIntersection<z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    tokenId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    description?: string | undefined;
    name: string;
    tokenId: string;
}, {
    description?: string | undefined;
    name: string;
    tokenId: string;
}>, z.ZodObject<{
    tokenMediaItems: z.ZodArray<z.ZodObject<{
        representation: z.ZodString;
        type: z.ZodString;
        mimeType: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        url: string;
        representation: string;
        mimeType: string;
    }, {
        type: string;
        url: string;
        representation: string;
        mimeType: string;
    }>, "many">;
    tokenUrls: z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        url: string;
    }, {
        type: string;
        url: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    tokenMediaItems: {
        type: string;
        url: string;
        representation: string;
        mimeType: string;
    }[];
    tokenUrls: {
        type: string;
        url: string;
    }[];
}, {
    tokenMediaItems: {
        type: string;
        url: string;
        representation: string;
        mimeType: string;
    }[];
    tokenUrls: {
        type: string;
        url: string;
    }[];
}>>;
export declare const tMintOptionSchema: z.ZodObject<{
    networkName: z.ZodString;
    contractAddress: z.ZodString;
    mintQuantity: z.ZodString;
    mintPriceInWei: z.ZodString;
    mintMethod: z.ZodString;
    mintArgs: z.ZodArray<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodNumber]>>, "many">;
}, "strip", z.ZodTypeAny, {
    networkName: string;
    contractAddress: string;
    mintQuantity: string;
    mintPriceInWei: string;
    mintMethod: string;
    mintArgs: (string | number | null)[];
}, {
    networkName: string;
    contractAddress: string;
    mintQuantity: string;
    mintPriceInWei: string;
    mintMethod: string;
    mintArgs: (string | number | null)[];
}>;
export declare const tCallableMintOptionSchema: z.ZodIntersection<z.ZodObject<{
    networkName: z.ZodString;
    contractAddress: z.ZodString;
    mintQuantity: z.ZodString;
    mintPriceInWei: z.ZodString;
    mintMethod: z.ZodString;
    mintArgs: z.ZodArray<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodNumber]>>, "many">;
}, "strip", z.ZodTypeAny, {
    networkName: string;
    contractAddress: string;
    mintQuantity: string;
    mintPriceInWei: string;
    mintMethod: string;
    mintArgs: (string | number | null)[];
}, {
    networkName: string;
    contractAddress: string;
    mintQuantity: string;
    mintPriceInWei: string;
    mintMethod: string;
    mintArgs: (string | number | null)[];
}>, z.ZodObject<{
    executeMint: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodVoid>;
}, "strip", z.ZodTypeAny, {
    executeMint: (...args: unknown[]) => void;
}, {
    executeMint: (...args: unknown[]) => void;
}>>;
export declare const tRawMintArgSchema: z.ZodIntersection<z.ZodObject<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>, z.ZodUnion<[z.ZodObject<{
    type: z.ZodLiteral<"address">;
    value: z.ZodLiteral<"string">;
}, "strip", z.ZodTypeAny, {
    type: "address";
    value: "string";
}, {
    type: "address";
    value: "string";
}>, z.ZodObject<{
    type: z.ZodLiteral<"uint256">;
    value: z.ZodObject<{
        type: z.ZodLiteral<"BigNumber">;
        hex: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "BigNumber";
        hex: string;
    }, {
        type: "BigNumber";
        hex: string;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "uint256";
    value: {
        type: "BigNumber";
        hex: string;
    };
}, {
    type: "uint256";
    value: {
        type: "BigNumber";
        hex: string;
    };
}>, z.ZodObject<{
    type: z.ZodLiteral<"bytes32[]">;
    value: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    type: "bytes32[]";
    value: string[];
}, {
    type: "bytes32[]";
    value: string[];
}>]>>;
export declare const tCollectionFieldsSimplifiedSchema: z.ZodIntersection<z.ZodObject<{
    networkName: z.ZodString;
    contractAddress: z.ZodString;
    thumbnailUrl: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    urls: z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        url: string;
    }, {
        type: string;
        url: string;
    }>, "many">;
    mintsLastHour: z.ZodNumber;
    lastEvent: z.ZodString;
    firstEvent: z.ZodString;
    totalMints: z.ZodNumber;
    maxSupply: z.ZodNumber;
    metadataSource: z.ZodString;
    mediaSource: z.ZodString;
    contractKind: z.ZodString;
    floor: z.ZodOptional<z.ZodObject<{
        amount: z.ZodString;
        currency: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        amount: string;
        currency: string;
    }, {
        amount: string;
        currency: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    floor?: {
        amount: string;
        currency: string;
    } | undefined;
    networkName: string;
    contractAddress: string;
    thumbnailUrl: string;
    name: string;
    description: string;
    urls: {
        type: string;
        url: string;
    }[];
    mintsLastHour: number;
    lastEvent: string;
    firstEvent: string;
    totalMints: number;
    maxSupply: number;
    metadataSource: string;
    mediaSource: string;
    contractKind: string;
}, {
    floor?: {
        amount: string;
        currency: string;
    } | undefined;
    networkName: string;
    contractAddress: string;
    thumbnailUrl: string;
    name: string;
    description: string;
    urls: {
        type: string;
        url: string;
    }[];
    mintsLastHour: number;
    lastEvent: string;
    firstEvent: string;
    totalMints: number;
    maxSupply: number;
    metadataSource: string;
    mediaSource: string;
    contractKind: string;
}>, z.ZodObject<{
    id: z.ZodString;
    tokenMediaItems: z.ZodArray<z.ZodObject<{
        representation: z.ZodString;
        type: z.ZodString;
        mimeType: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        url: string;
        representation: string;
        mimeType: string;
    }, {
        type: string;
        url: string;
        representation: string;
        mimeType: string;
    }>, "many">;
    mintOptions: z.ZodArray<z.ZodObject<{
        networkName: z.ZodString;
        contractAddress: z.ZodString;
        mintQuantity: z.ZodString;
        mintPriceInWei: z.ZodString;
        mintMethod: z.ZodString;
        mintArgs: z.ZodArray<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodNumber]>>, "many">;
    }, "strip", z.ZodTypeAny, {
        networkName: string;
        contractAddress: string;
        mintQuantity: string;
        mintPriceInWei: string;
        mintMethod: string;
        mintArgs: (string | number | null)[];
    }, {
        networkName: string;
        contractAddress: string;
        mintQuantity: string;
        mintPriceInWei: string;
        mintMethod: string;
        mintArgs: (string | number | null)[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    tokenMediaItems: {
        type: string;
        url: string;
        representation: string;
        mimeType: string;
    }[];
    mintOptions: {
        networkName: string;
        contractAddress: string;
        mintQuantity: string;
        mintPriceInWei: string;
        mintMethod: string;
        mintArgs: (string | number | null)[];
    }[];
}, {
    id: string;
    tokenMediaItems: {
        type: string;
        url: string;
        representation: string;
        mimeType: string;
    }[];
    mintOptions: {
        networkName: string;
        contractAddress: string;
        mintQuantity: string;
        mintPriceInWei: string;
        mintMethod: string;
        mintArgs: (string | number | null)[];
    }[];
}>>;
export declare const tClaimPhaseFieldsSchema: z.ZodObject<{
    mintMethod: z.ZodString;
    mintArgs: z.ZodArray<z.ZodIntersection<z.ZodObject<{
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
    }, {
        name: string;
    }>, z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"address">;
        value: z.ZodLiteral<"string">;
    }, "strip", z.ZodTypeAny, {
        type: "address";
        value: "string";
    }, {
        type: "address";
        value: "string";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"uint256">;
        value: z.ZodObject<{
            type: z.ZodLiteral<"BigNumber">;
            hex: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "BigNumber";
            hex: string;
        }, {
            type: "BigNumber";
            hex: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "uint256";
        value: {
            type: "BigNumber";
            hex: string;
        };
    }, {
        type: "uint256";
        value: {
            type: "BigNumber";
            hex: string;
        };
    }>, z.ZodObject<{
        type: z.ZodLiteral<"bytes32[]">;
        value: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "bytes32[]";
        value: string[];
    }, {
        type: "bytes32[]";
        value: string[];
    }>]>>, "many">;
    mintPriceInWei: z.ZodString;
}, "strip", z.ZodTypeAny, {
    mintPriceInWei: string;
    mintMethod: string;
    mintArgs: ({
        name: string;
    } & ({
        type: "address";
        value: "string";
    } | {
        type: "uint256";
        value: {
            type: "BigNumber";
            hex: string;
        };
    } | {
        type: "bytes32[]";
        value: string[];
    }))[];
}, {
    mintPriceInWei: string;
    mintMethod: string;
    mintArgs: ({
        name: string;
    } & ({
        type: "address";
        value: "string";
    } | {
        type: "uint256";
        value: {
            type: "BigNumber";
            hex: string;
        };
    } | {
        type: "bytes32[]";
        value: string[];
    }))[];
}>;
export declare const tCollectionsListResponseDataSchema: z.ZodObject<{
    collections: z.ZodArray<z.ZodIntersection<z.ZodObject<{
        networkName: z.ZodString;
        contractAddress: z.ZodString;
        thumbnailUrl: z.ZodString;
        name: z.ZodString;
        description: z.ZodString;
        urls: z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            url: string;
        }, {
            type: string;
            url: string;
        }>, "many">;
        mintsLastHour: z.ZodNumber;
        lastEvent: z.ZodString;
        firstEvent: z.ZodString;
        totalMints: z.ZodNumber;
        maxSupply: z.ZodNumber;
        metadataSource: z.ZodString;
        mediaSource: z.ZodString;
        contractKind: z.ZodString;
        floor: z.ZodOptional<z.ZodObject<{
            amount: z.ZodString;
            currency: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            amount: string;
            currency: string;
        }, {
            amount: string;
            currency: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        floor?: {
            amount: string;
            currency: string;
        } | undefined;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        name: string;
        description: string;
        urls: {
            type: string;
            url: string;
        }[];
        mintsLastHour: number;
        lastEvent: string;
        firstEvent: string;
        totalMints: number;
        maxSupply: number;
        metadataSource: string;
        mediaSource: string;
        contractKind: string;
    }, {
        floor?: {
            amount: string;
            currency: string;
        } | undefined;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        name: string;
        description: string;
        urls: {
            type: string;
            url: string;
        }[];
        mintsLastHour: number;
        lastEvent: string;
        firstEvent: string;
        totalMints: number;
        maxSupply: number;
        metadataSource: string;
        mediaSource: string;
        contractKind: string;
    }>, z.ZodObject<{
        id: z.ZodString;
        tokenMediaItems: z.ZodArray<z.ZodObject<{
            representation: z.ZodString;
            type: z.ZodString;
            mimeType: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            url: string;
            representation: string;
            mimeType: string;
        }, {
            type: string;
            url: string;
            representation: string;
            mimeType: string;
        }>, "many">;
        mintOptions: z.ZodArray<z.ZodObject<{
            networkName: z.ZodString;
            contractAddress: z.ZodString;
            mintQuantity: z.ZodString;
            mintPriceInWei: z.ZodString;
            mintMethod: z.ZodString;
            mintArgs: z.ZodArray<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodNumber]>>, "many">;
        }, "strip", z.ZodTypeAny, {
            networkName: string;
            contractAddress: string;
            mintQuantity: string;
            mintPriceInWei: string;
            mintMethod: string;
            mintArgs: (string | number | null)[];
        }, {
            networkName: string;
            contractAddress: string;
            mintQuantity: string;
            mintPriceInWei: string;
            mintMethod: string;
            mintArgs: (string | number | null)[];
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        tokenMediaItems: {
            type: string;
            url: string;
            representation: string;
            mimeType: string;
        }[];
        mintOptions: {
            networkName: string;
            contractAddress: string;
            mintQuantity: string;
            mintPriceInWei: string;
            mintMethod: string;
            mintArgs: (string | number | null)[];
        }[];
    }, {
        id: string;
        tokenMediaItems: {
            type: string;
            url: string;
            representation: string;
            mimeType: string;
        }[];
        mintOptions: {
            networkName: string;
            contractAddress: string;
            mintQuantity: string;
            mintPriceInWei: string;
            mintMethod: string;
            mintArgs: (string | number | null)[];
        }[];
    }>>, "many">;
}, "strip", z.ZodTypeAny, {
    collections: ({
        floor?: {
            amount: string;
            currency: string;
        } | undefined;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        name: string;
        description: string;
        urls: {
            type: string;
            url: string;
        }[];
        mintsLastHour: number;
        lastEvent: string;
        firstEvent: string;
        totalMints: number;
        maxSupply: number;
        metadataSource: string;
        mediaSource: string;
        contractKind: string;
    } & {
        id: string;
        tokenMediaItems: {
            type: string;
            url: string;
            representation: string;
            mimeType: string;
        }[];
        mintOptions: {
            networkName: string;
            contractAddress: string;
            mintQuantity: string;
            mintPriceInWei: string;
            mintMethod: string;
            mintArgs: (string | number | null)[];
        }[];
    })[];
}, {
    collections: ({
        floor?: {
            amount: string;
            currency: string;
        } | undefined;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        name: string;
        description: string;
        urls: {
            type: string;
            url: string;
        }[];
        mintsLastHour: number;
        lastEvent: string;
        firstEvent: string;
        totalMints: number;
        maxSupply: number;
        metadataSource: string;
        mediaSource: string;
        contractKind: string;
    } & {
        id: string;
        tokenMediaItems: {
            type: string;
            url: string;
            representation: string;
            mimeType: string;
        }[];
        mintOptions: {
            networkName: string;
            contractAddress: string;
            mintQuantity: string;
            mintPriceInWei: string;
            mintMethod: string;
            mintArgs: (string | number | null)[];
        }[];
    })[];
}>;
export declare const tCollectionFieldsSchema: z.ZodIntersection<z.ZodObject<{
    networkName: z.ZodString;
    contractAddress: z.ZodString;
    thumbnailUrl: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    urls: z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        url: string;
    }, {
        type: string;
        url: string;
    }>, "many">;
    mintsLastHour: z.ZodNumber;
    lastEvent: z.ZodString;
    firstEvent: z.ZodString;
    totalMints: z.ZodNumber;
    maxSupply: z.ZodNumber;
    metadataSource: z.ZodString;
    mediaSource: z.ZodString;
    contractKind: z.ZodString;
    floor: z.ZodOptional<z.ZodObject<{
        amount: z.ZodString;
        currency: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        amount: string;
        currency: string;
    }, {
        amount: string;
        currency: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    floor?: {
        amount: string;
        currency: string;
    } | undefined;
    networkName: string;
    contractAddress: string;
    thumbnailUrl: string;
    name: string;
    description: string;
    urls: {
        type: string;
        url: string;
    }[];
    mintsLastHour: number;
    lastEvent: string;
    firstEvent: string;
    totalMints: number;
    maxSupply: number;
    metadataSource: string;
    mediaSource: string;
    contractKind: string;
}, {
    floor?: {
        amount: string;
        currency: string;
    } | undefined;
    networkName: string;
    contractAddress: string;
    thumbnailUrl: string;
    name: string;
    description: string;
    urls: {
        type: string;
        url: string;
    }[];
    mintsLastHour: number;
    lastEvent: string;
    firstEvent: string;
    totalMints: number;
    maxSupply: number;
    metadataSource: string;
    mediaSource: string;
    contractKind: string;
}>, z.ZodObject<{
    tokens: z.ZodArray<z.ZodIntersection<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        tokenId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        description?: string | undefined;
        name: string;
        tokenId: string;
    }, {
        description?: string | undefined;
        name: string;
        tokenId: string;
    }>, z.ZodObject<{
        tokenMediaItems: z.ZodArray<z.ZodObject<{
            representation: z.ZodString;
            type: z.ZodString;
            mimeType: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            url: string;
            representation: string;
            mimeType: string;
        }, {
            type: string;
            url: string;
            representation: string;
            mimeType: string;
        }>, "many">;
        tokenUrls: z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            url: string;
        }, {
            type: string;
            url: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        tokenMediaItems: {
            type: string;
            url: string;
            representation: string;
            mimeType: string;
        }[];
        tokenUrls: {
            type: string;
            url: string;
        }[];
    }, {
        tokenMediaItems: {
            type: string;
            url: string;
            representation: string;
            mimeType: string;
        }[];
        tokenUrls: {
            type: string;
            url: string;
        }[];
    }>>, "many">;
    claimPhases: z.ZodArray<z.ZodObject<{
        mintMethod: z.ZodString;
        mintArgs: z.ZodArray<z.ZodIntersection<z.ZodObject<{
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
        }, {
            name: string;
        }>, z.ZodUnion<[z.ZodObject<{
            type: z.ZodLiteral<"address">;
            value: z.ZodLiteral<"string">;
        }, "strip", z.ZodTypeAny, {
            type: "address";
            value: "string";
        }, {
            type: "address";
            value: "string";
        }>, z.ZodObject<{
            type: z.ZodLiteral<"uint256">;
            value: z.ZodObject<{
                type: z.ZodLiteral<"BigNumber">;
                hex: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "BigNumber";
                hex: string;
            }, {
                type: "BigNumber";
                hex: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "uint256";
            value: {
                type: "BigNumber";
                hex: string;
            };
        }, {
            type: "uint256";
            value: {
                type: "BigNumber";
                hex: string;
            };
        }>, z.ZodObject<{
            type: z.ZodLiteral<"bytes32[]">;
            value: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            type: "bytes32[]";
            value: string[];
        }, {
            type: "bytes32[]";
            value: string[];
        }>]>>, "many">;
        mintPriceInWei: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        mintPriceInWei: string;
        mintMethod: string;
        mintArgs: ({
            name: string;
        } & ({
            type: "address";
            value: "string";
        } | {
            type: "uint256";
            value: {
                type: "BigNumber";
                hex: string;
            };
        } | {
            type: "bytes32[]";
            value: string[];
        }))[];
    }, {
        mintPriceInWei: string;
        mintMethod: string;
        mintArgs: ({
            name: string;
        } & ({
            type: "address";
            value: "string";
        } | {
            type: "uint256";
            value: {
                type: "BigNumber";
                hex: string;
            };
        } | {
            type: "bytes32[]";
            value: string[];
        }))[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    tokens: ({
        description?: string | undefined;
        name: string;
        tokenId: string;
    } & {
        tokenMediaItems: {
            type: string;
            url: string;
            representation: string;
            mimeType: string;
        }[];
        tokenUrls: {
            type: string;
            url: string;
        }[];
    })[];
    claimPhases: {
        mintPriceInWei: string;
        mintMethod: string;
        mintArgs: ({
            name: string;
        } & ({
            type: "address";
            value: "string";
        } | {
            type: "uint256";
            value: {
                type: "BigNumber";
                hex: string;
            };
        } | {
            type: "bytes32[]";
            value: string[];
        }))[];
    }[];
}, {
    tokens: ({
        description?: string | undefined;
        name: string;
        tokenId: string;
    } & {
        tokenMediaItems: {
            type: string;
            url: string;
            representation: string;
            mimeType: string;
        }[];
        tokenUrls: {
            type: string;
            url: string;
        }[];
    })[];
    claimPhases: {
        mintPriceInWei: string;
        mintMethod: string;
        mintArgs: ({
            name: string;
        } & ({
            type: "address";
            value: "string";
        } | {
            type: "uint256";
            value: {
                type: "BigNumber";
                hex: string;
            };
        } | {
            type: "bytes32[]";
            value: string[];
        }))[];
    }[];
}>>;
export declare const tCurationSelectionFieldsSchema: z.ZodObject<{
    type: z.ZodString;
    collection: z.ZodOptional<z.ZodIntersection<z.ZodObject<{
        networkName: z.ZodString;
        contractAddress: z.ZodString;
        thumbnailUrl: z.ZodString;
        name: z.ZodString;
        description: z.ZodString;
        urls: z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            url: string;
        }, {
            type: string;
            url: string;
        }>, "many">;
        mintsLastHour: z.ZodNumber;
        lastEvent: z.ZodString;
        firstEvent: z.ZodString;
        totalMints: z.ZodNumber;
        maxSupply: z.ZodNumber;
        metadataSource: z.ZodString;
        mediaSource: z.ZodString;
        contractKind: z.ZodString;
        floor: z.ZodOptional<z.ZodObject<{
            amount: z.ZodString;
            currency: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            amount: string;
            currency: string;
        }, {
            amount: string;
            currency: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        floor?: {
            amount: string;
            currency: string;
        } | undefined;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        name: string;
        description: string;
        urls: {
            type: string;
            url: string;
        }[];
        mintsLastHour: number;
        lastEvent: string;
        firstEvent: string;
        totalMints: number;
        maxSupply: number;
        metadataSource: string;
        mediaSource: string;
        contractKind: string;
    }, {
        floor?: {
            amount: string;
            currency: string;
        } | undefined;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        name: string;
        description: string;
        urls: {
            type: string;
            url: string;
        }[];
        mintsLastHour: number;
        lastEvent: string;
        firstEvent: string;
        totalMints: number;
        maxSupply: number;
        metadataSource: string;
        mediaSource: string;
        contractKind: string;
    }>, z.ZodObject<{
        tokens: z.ZodArray<z.ZodIntersection<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            tokenId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            description?: string | undefined;
            name: string;
            tokenId: string;
        }, {
            description?: string | undefined;
            name: string;
            tokenId: string;
        }>, z.ZodObject<{
            tokenMediaItems: z.ZodArray<z.ZodObject<{
                representation: z.ZodString;
                type: z.ZodString;
                mimeType: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                url: string;
                representation: string;
                mimeType: string;
            }, {
                type: string;
                url: string;
                representation: string;
                mimeType: string;
            }>, "many">;
            tokenUrls: z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                url: string;
            }, {
                type: string;
                url: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            tokenMediaItems: {
                type: string;
                url: string;
                representation: string;
                mimeType: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        }, {
            tokenMediaItems: {
                type: string;
                url: string;
                representation: string;
                mimeType: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        }>>, "many">;
        claimPhases: z.ZodArray<z.ZodObject<{
            mintMethod: z.ZodString;
            mintArgs: z.ZodArray<z.ZodIntersection<z.ZodObject<{
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
            }, {
                name: string;
            }>, z.ZodUnion<[z.ZodObject<{
                type: z.ZodLiteral<"address">;
                value: z.ZodLiteral<"string">;
            }, "strip", z.ZodTypeAny, {
                type: "address";
                value: "string";
            }, {
                type: "address";
                value: "string";
            }>, z.ZodObject<{
                type: z.ZodLiteral<"uint256">;
                value: z.ZodObject<{
                    type: z.ZodLiteral<"BigNumber">;
                    hex: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    type: "BigNumber";
                    hex: string;
                }, {
                    type: "BigNumber";
                    hex: string;
                }>;
            }, "strip", z.ZodTypeAny, {
                type: "uint256";
                value: {
                    type: "BigNumber";
                    hex: string;
                };
            }, {
                type: "uint256";
                value: {
                    type: "BigNumber";
                    hex: string;
                };
            }>, z.ZodObject<{
                type: z.ZodLiteral<"bytes32[]">;
                value: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                type: "bytes32[]";
                value: string[];
            }, {
                type: "bytes32[]";
                value: string[];
            }>]>>, "many">;
            mintPriceInWei: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            mintPriceInWei: string;
            mintMethod: string;
            mintArgs: ({
                name: string;
            } & ({
                type: "address";
                value: "string";
            } | {
                type: "uint256";
                value: {
                    type: "BigNumber";
                    hex: string;
                };
            } | {
                type: "bytes32[]";
                value: string[];
            }))[];
        }, {
            mintPriceInWei: string;
            mintMethod: string;
            mintArgs: ({
                name: string;
            } & ({
                type: "address";
                value: "string";
            } | {
                type: "uint256";
                value: {
                    type: "BigNumber";
                    hex: string;
                };
            } | {
                type: "bytes32[]";
                value: string[];
            }))[];
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        tokens: ({
            description?: string | undefined;
            name: string;
            tokenId: string;
        } & {
            tokenMediaItems: {
                type: string;
                url: string;
                representation: string;
                mimeType: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        })[];
        claimPhases: {
            mintPriceInWei: string;
            mintMethod: string;
            mintArgs: ({
                name: string;
            } & ({
                type: "address";
                value: "string";
            } | {
                type: "uint256";
                value: {
                    type: "BigNumber";
                    hex: string;
                };
            } | {
                type: "bytes32[]";
                value: string[];
            }))[];
        }[];
    }, {
        tokens: ({
            description?: string | undefined;
            name: string;
            tokenId: string;
        } & {
            tokenMediaItems: {
                type: string;
                url: string;
                representation: string;
                mimeType: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        })[];
        claimPhases: {
            mintPriceInWei: string;
            mintMethod: string;
            mintArgs: ({
                name: string;
            } & ({
                type: "address";
                value: "string";
            } | {
                type: "uint256";
                value: {
                    type: "BigNumber";
                    hex: string;
                };
            } | {
                type: "bytes32[]";
                value: string[];
            }))[];
        }[];
    }>>>;
    content: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    collection?: ({
        floor?: {
            amount: string;
            currency: string;
        } | undefined;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        name: string;
        description: string;
        urls: {
            type: string;
            url: string;
        }[];
        mintsLastHour: number;
        lastEvent: string;
        firstEvent: string;
        totalMints: number;
        maxSupply: number;
        metadataSource: string;
        mediaSource: string;
        contractKind: string;
    } & {
        tokens: ({
            description?: string | undefined;
            name: string;
            tokenId: string;
        } & {
            tokenMediaItems: {
                type: string;
                url: string;
                representation: string;
                mimeType: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        })[];
        claimPhases: {
            mintPriceInWei: string;
            mintMethod: string;
            mintArgs: ({
                name: string;
            } & ({
                type: "address";
                value: "string";
            } | {
                type: "uint256";
                value: {
                    type: "BigNumber";
                    hex: string;
                };
            } | {
                type: "bytes32[]";
                value: string[];
            }))[];
        }[];
    }) | undefined;
    content?: string | undefined;
    type: string;
}, {
    collection?: ({
        floor?: {
            amount: string;
            currency: string;
        } | undefined;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        name: string;
        description: string;
        urls: {
            type: string;
            url: string;
        }[];
        mintsLastHour: number;
        lastEvent: string;
        firstEvent: string;
        totalMints: number;
        maxSupply: number;
        metadataSource: string;
        mediaSource: string;
        contractKind: string;
    } & {
        tokens: ({
            description?: string | undefined;
            name: string;
            tokenId: string;
        } & {
            tokenMediaItems: {
                type: string;
                url: string;
                representation: string;
                mimeType: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        })[];
        claimPhases: {
            mintPriceInWei: string;
            mintMethod: string;
            mintArgs: ({
                name: string;
            } & ({
                type: "address";
                value: "string";
            } | {
                type: "uint256";
                value: {
                    type: "BigNumber";
                    hex: string;
                };
            } | {
                type: "bytes32[]";
                value: string[];
            }))[];
        }[];
    }) | undefined;
    content?: string | undefined;
    type: string;
}>;
export declare const tCurationFieldsSchema: z.ZodObject<{
    publishedAt: z.ZodOptional<z.ZodString>;
    curationSelections: z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        collection: z.ZodOptional<z.ZodIntersection<z.ZodObject<{
            networkName: z.ZodString;
            contractAddress: z.ZodString;
            thumbnailUrl: z.ZodString;
            name: z.ZodString;
            description: z.ZodString;
            urls: z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                url: string;
            }, {
                type: string;
                url: string;
            }>, "many">;
            mintsLastHour: z.ZodNumber;
            lastEvent: z.ZodString;
            firstEvent: z.ZodString;
            totalMints: z.ZodNumber;
            maxSupply: z.ZodNumber;
            metadataSource: z.ZodString;
            mediaSource: z.ZodString;
            contractKind: z.ZodString;
            floor: z.ZodOptional<z.ZodObject<{
                amount: z.ZodString;
                currency: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                amount: string;
                currency: string;
            }, {
                amount: string;
                currency: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            floor?: {
                amount: string;
                currency: string;
            } | undefined;
            networkName: string;
            contractAddress: string;
            thumbnailUrl: string;
            name: string;
            description: string;
            urls: {
                type: string;
                url: string;
            }[];
            mintsLastHour: number;
            lastEvent: string;
            firstEvent: string;
            totalMints: number;
            maxSupply: number;
            metadataSource: string;
            mediaSource: string;
            contractKind: string;
        }, {
            floor?: {
                amount: string;
                currency: string;
            } | undefined;
            networkName: string;
            contractAddress: string;
            thumbnailUrl: string;
            name: string;
            description: string;
            urls: {
                type: string;
                url: string;
            }[];
            mintsLastHour: number;
            lastEvent: string;
            firstEvent: string;
            totalMints: number;
            maxSupply: number;
            metadataSource: string;
            mediaSource: string;
            contractKind: string;
        }>, z.ZodObject<{
            tokens: z.ZodArray<z.ZodIntersection<z.ZodObject<{
                name: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                tokenId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                description?: string | undefined;
                name: string;
                tokenId: string;
            }, {
                description?: string | undefined;
                name: string;
                tokenId: string;
            }>, z.ZodObject<{
                tokenMediaItems: z.ZodArray<z.ZodObject<{
                    representation: z.ZodString;
                    type: z.ZodString;
                    mimeType: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    url: string;
                    representation: string;
                    mimeType: string;
                }, {
                    type: string;
                    url: string;
                    representation: string;
                    mimeType: string;
                }>, "many">;
                tokenUrls: z.ZodArray<z.ZodObject<{
                    type: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    url: string;
                }, {
                    type: string;
                    url: string;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                tokenMediaItems: {
                    type: string;
                    url: string;
                    representation: string;
                    mimeType: string;
                }[];
                tokenUrls: {
                    type: string;
                    url: string;
                }[];
            }, {
                tokenMediaItems: {
                    type: string;
                    url: string;
                    representation: string;
                    mimeType: string;
                }[];
                tokenUrls: {
                    type: string;
                    url: string;
                }[];
            }>>, "many">;
            claimPhases: z.ZodArray<z.ZodObject<{
                mintMethod: z.ZodString;
                mintArgs: z.ZodArray<z.ZodIntersection<z.ZodObject<{
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                }, {
                    name: string;
                }>, z.ZodUnion<[z.ZodObject<{
                    type: z.ZodLiteral<"address">;
                    value: z.ZodLiteral<"string">;
                }, "strip", z.ZodTypeAny, {
                    type: "address";
                    value: "string";
                }, {
                    type: "address";
                    value: "string";
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"uint256">;
                    value: z.ZodObject<{
                        type: z.ZodLiteral<"BigNumber">;
                        hex: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        type: "BigNumber";
                        hex: string;
                    }, {
                        type: "BigNumber";
                        hex: string;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    type: "uint256";
                    value: {
                        type: "BigNumber";
                        hex: string;
                    };
                }, {
                    type: "uint256";
                    value: {
                        type: "BigNumber";
                        hex: string;
                    };
                }>, z.ZodObject<{
                    type: z.ZodLiteral<"bytes32[]">;
                    value: z.ZodArray<z.ZodString, "many">;
                }, "strip", z.ZodTypeAny, {
                    type: "bytes32[]";
                    value: string[];
                }, {
                    type: "bytes32[]";
                    value: string[];
                }>]>>, "many">;
                mintPriceInWei: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                mintPriceInWei: string;
                mintMethod: string;
                mintArgs: ({
                    name: string;
                } & ({
                    type: "address";
                    value: "string";
                } | {
                    type: "uint256";
                    value: {
                        type: "BigNumber";
                        hex: string;
                    };
                } | {
                    type: "bytes32[]";
                    value: string[];
                }))[];
            }, {
                mintPriceInWei: string;
                mintMethod: string;
                mintArgs: ({
                    name: string;
                } & ({
                    type: "address";
                    value: "string";
                } | {
                    type: "uint256";
                    value: {
                        type: "BigNumber";
                        hex: string;
                    };
                } | {
                    type: "bytes32[]";
                    value: string[];
                }))[];
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            tokens: ({
                description?: string | undefined;
                name: string;
                tokenId: string;
            } & {
                tokenMediaItems: {
                    type: string;
                    url: string;
                    representation: string;
                    mimeType: string;
                }[];
                tokenUrls: {
                    type: string;
                    url: string;
                }[];
            })[];
            claimPhases: {
                mintPriceInWei: string;
                mintMethod: string;
                mintArgs: ({
                    name: string;
                } & ({
                    type: "address";
                    value: "string";
                } | {
                    type: "uint256";
                    value: {
                        type: "BigNumber";
                        hex: string;
                    };
                } | {
                    type: "bytes32[]";
                    value: string[];
                }))[];
            }[];
        }, {
            tokens: ({
                description?: string | undefined;
                name: string;
                tokenId: string;
            } & {
                tokenMediaItems: {
                    type: string;
                    url: string;
                    representation: string;
                    mimeType: string;
                }[];
                tokenUrls: {
                    type: string;
                    url: string;
                }[];
            })[];
            claimPhases: {
                mintPriceInWei: string;
                mintMethod: string;
                mintArgs: ({
                    name: string;
                } & ({
                    type: "address";
                    value: "string";
                } | {
                    type: "uint256";
                    value: {
                        type: "BigNumber";
                        hex: string;
                    };
                } | {
                    type: "bytes32[]";
                    value: string[];
                }))[];
            }[];
        }>>>;
        content: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        collection?: ({
            floor?: {
                amount: string;
                currency: string;
            } | undefined;
            networkName: string;
            contractAddress: string;
            thumbnailUrl: string;
            name: string;
            description: string;
            urls: {
                type: string;
                url: string;
            }[];
            mintsLastHour: number;
            lastEvent: string;
            firstEvent: string;
            totalMints: number;
            maxSupply: number;
            metadataSource: string;
            mediaSource: string;
            contractKind: string;
        } & {
            tokens: ({
                description?: string | undefined;
                name: string;
                tokenId: string;
            } & {
                tokenMediaItems: {
                    type: string;
                    url: string;
                    representation: string;
                    mimeType: string;
                }[];
                tokenUrls: {
                    type: string;
                    url: string;
                }[];
            })[];
            claimPhases: {
                mintPriceInWei: string;
                mintMethod: string;
                mintArgs: ({
                    name: string;
                } & ({
                    type: "address";
                    value: "string";
                } | {
                    type: "uint256";
                    value: {
                        type: "BigNumber";
                        hex: string;
                    };
                } | {
                    type: "bytes32[]";
                    value: string[];
                }))[];
            }[];
        }) | undefined;
        content?: string | undefined;
        type: string;
    }, {
        collection?: ({
            floor?: {
                amount: string;
                currency: string;
            } | undefined;
            networkName: string;
            contractAddress: string;
            thumbnailUrl: string;
            name: string;
            description: string;
            urls: {
                type: string;
                url: string;
            }[];
            mintsLastHour: number;
            lastEvent: string;
            firstEvent: string;
            totalMints: number;
            maxSupply: number;
            metadataSource: string;
            mediaSource: string;
            contractKind: string;
        } & {
            tokens: ({
                description?: string | undefined;
                name: string;
                tokenId: string;
            } & {
                tokenMediaItems: {
                    type: string;
                    url: string;
                    representation: string;
                    mimeType: string;
                }[];
                tokenUrls: {
                    type: string;
                    url: string;
                }[];
            })[];
            claimPhases: {
                mintPriceInWei: string;
                mintMethod: string;
                mintArgs: ({
                    name: string;
                } & ({
                    type: "address";
                    value: "string";
                } | {
                    type: "uint256";
                    value: {
                        type: "BigNumber";
                        hex: string;
                    };
                } | {
                    type: "bytes32[]";
                    value: string[];
                }))[];
            }[];
        }) | undefined;
        content?: string | undefined;
        type: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    publishedAt?: string | undefined;
    curationSelections: {
        collection?: ({
            floor?: {
                amount: string;
                currency: string;
            } | undefined;
            networkName: string;
            contractAddress: string;
            thumbnailUrl: string;
            name: string;
            description: string;
            urls: {
                type: string;
                url: string;
            }[];
            mintsLastHour: number;
            lastEvent: string;
            firstEvent: string;
            totalMints: number;
            maxSupply: number;
            metadataSource: string;
            mediaSource: string;
            contractKind: string;
        } & {
            tokens: ({
                description?: string | undefined;
                name: string;
                tokenId: string;
            } & {
                tokenMediaItems: {
                    type: string;
                    url: string;
                    representation: string;
                    mimeType: string;
                }[];
                tokenUrls: {
                    type: string;
                    url: string;
                }[];
            })[];
            claimPhases: {
                mintPriceInWei: string;
                mintMethod: string;
                mintArgs: ({
                    name: string;
                } & ({
                    type: "address";
                    value: "string";
                } | {
                    type: "uint256";
                    value: {
                        type: "BigNumber";
                        hex: string;
                    };
                } | {
                    type: "bytes32[]";
                    value: string[];
                }))[];
            }[];
        }) | undefined;
        content?: string | undefined;
        type: string;
    }[];
}, {
    publishedAt?: string | undefined;
    curationSelections: {
        collection?: ({
            floor?: {
                amount: string;
                currency: string;
            } | undefined;
            networkName: string;
            contractAddress: string;
            thumbnailUrl: string;
            name: string;
            description: string;
            urls: {
                type: string;
                url: string;
            }[];
            mintsLastHour: number;
            lastEvent: string;
            firstEvent: string;
            totalMints: number;
            maxSupply: number;
            metadataSource: string;
            mediaSource: string;
            contractKind: string;
        } & {
            tokens: ({
                description?: string | undefined;
                name: string;
                tokenId: string;
            } & {
                tokenMediaItems: {
                    type: string;
                    url: string;
                    representation: string;
                    mimeType: string;
                }[];
                tokenUrls: {
                    type: string;
                    url: string;
                }[];
            })[];
            claimPhases: {
                mintPriceInWei: string;
                mintMethod: string;
                mintArgs: ({
                    name: string;
                } & ({
                    type: "address";
                    value: "string";
                } | {
                    type: "uint256";
                    value: {
                        type: "BigNumber";
                        hex: string;
                    };
                } | {
                    type: "bytes32[]";
                    value: string[];
                }))[];
            }[];
        }) | undefined;
        content?: string | undefined;
        type: string;
    }[];
}>;
