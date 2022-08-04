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
export declare const tClaimPhaseFieldsSchema: z.ZodObject<{
    mintMethod: z.ZodString;
    mintArgs: z.ZodString;
    mintStartAt: z.ZodString;
    mintEndAt: z.ZodString;
    mintPriceInWei: z.ZodString;
    mintSupply: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    mintMethod: string;
    mintArgs: string;
    mintStartAt: string;
    mintEndAt: string;
    mintPriceInWei: string;
    mintSupply: number;
}, {
    mintMethod: string;
    mintArgs: string;
    mintStartAt: string;
    mintEndAt: string;
    mintPriceInWei: string;
    mintSupply: number;
}>;
export declare const tTokenMediaItemFieldsSchema: z.ZodObject<{
    representation: z.ZodString;
    type: z.ZodString;
    mimeType: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
    representation: string;
    mimeType: string;
    url: string;
}, {
    type: string;
    representation: string;
    mimeType: string;
    url: string;
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
export declare const tCollectionsListQueryDataSchema: z.ZodIntersection<z.ZodObject<{
    skip: z.ZodNumber;
    take: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    skip: number;
    take: number;
}, {
    skip: number;
    take: number;
}>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
export declare const tTokenFieldsSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    tokenId: z.ZodString;
    tokenMediaItems: z.ZodArray<z.ZodObject<{
        representation: z.ZodString;
        type: z.ZodString;
        mimeType: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        representation: string;
        mimeType: string;
        url: string;
    }, {
        type: string;
        representation: string;
        mimeType: string;
        url: string;
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
    description?: string | undefined;
    name: string;
    tokenId: string;
    tokenMediaItems: {
        type: string;
        representation: string;
        mimeType: string;
        url: string;
    }[];
    tokenUrls: {
        type: string;
        url: string;
    }[];
}, {
    description?: string | undefined;
    name: string;
    tokenId: string;
    tokenMediaItems: {
        type: string;
        representation: string;
        mimeType: string;
        url: string;
    }[];
    tokenUrls: {
        type: string;
        url: string;
    }[];
}>;
export declare const tCollectionFieldsSchema: z.ZodObject<{
    networkName: z.ZodString;
    contractAddress: z.ZodString;
    thumbnailUrl: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    tokens: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        tokenId: z.ZodString;
        tokenMediaItems: z.ZodArray<z.ZodObject<{
            representation: z.ZodString;
            type: z.ZodString;
            mimeType: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            representation: string;
            mimeType: string;
            url: string;
        }, {
            type: string;
            representation: string;
            mimeType: string;
            url: string;
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
        description?: string | undefined;
        name: string;
        tokenId: string;
        tokenMediaItems: {
            type: string;
            representation: string;
            mimeType: string;
            url: string;
        }[];
        tokenUrls: {
            type: string;
            url: string;
        }[];
    }, {
        description?: string | undefined;
        name: string;
        tokenId: string;
        tokenMediaItems: {
            type: string;
            representation: string;
            mimeType: string;
            url: string;
        }[];
        tokenUrls: {
            type: string;
            url: string;
        }[];
    }>, "many">;
    claimPhases: z.ZodArray<z.ZodObject<{
        mintMethod: z.ZodString;
        mintArgs: z.ZodString;
        mintStartAt: z.ZodString;
        mintEndAt: z.ZodString;
        mintPriceInWei: z.ZodString;
        mintSupply: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        mintMethod: string;
        mintArgs: string;
        mintStartAt: string;
        mintEndAt: string;
        mintPriceInWei: string;
        mintSupply: number;
    }, {
        mintMethod: string;
        mintArgs: string;
        mintStartAt: string;
        mintEndAt: string;
        mintPriceInWei: string;
        mintSupply: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    description?: string | undefined;
    name: string;
    networkName: string;
    contractAddress: string;
    thumbnailUrl: string;
    tokens: {
        description?: string | undefined;
        name: string;
        tokenId: string;
        tokenMediaItems: {
            type: string;
            representation: string;
            mimeType: string;
            url: string;
        }[];
        tokenUrls: {
            type: string;
            url: string;
        }[];
    }[];
    claimPhases: {
        mintMethod: string;
        mintArgs: string;
        mintStartAt: string;
        mintEndAt: string;
        mintPriceInWei: string;
        mintSupply: number;
    }[];
}, {
    description?: string | undefined;
    name: string;
    networkName: string;
    contractAddress: string;
    thumbnailUrl: string;
    tokens: {
        description?: string | undefined;
        name: string;
        tokenId: string;
        tokenMediaItems: {
            type: string;
            representation: string;
            mimeType: string;
            url: string;
        }[];
        tokenUrls: {
            type: string;
            url: string;
        }[];
    }[];
    claimPhases: {
        mintMethod: string;
        mintArgs: string;
        mintStartAt: string;
        mintEndAt: string;
        mintPriceInWei: string;
        mintSupply: number;
    }[];
}>;
export declare const tCollectionsListResponseDataSchema: z.ZodObject<{
    collections: z.ZodArray<z.ZodObject<{
        networkName: z.ZodString;
        contractAddress: z.ZodString;
        thumbnailUrl: z.ZodString;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        tokens: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            tokenId: z.ZodString;
            tokenMediaItems: z.ZodArray<z.ZodObject<{
                representation: z.ZodString;
                type: z.ZodString;
                mimeType: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                representation: string;
                mimeType: string;
                url: string;
            }, {
                type: string;
                representation: string;
                mimeType: string;
                url: string;
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
            description?: string | undefined;
            name: string;
            tokenId: string;
            tokenMediaItems: {
                type: string;
                representation: string;
                mimeType: string;
                url: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        }, {
            description?: string | undefined;
            name: string;
            tokenId: string;
            tokenMediaItems: {
                type: string;
                representation: string;
                mimeType: string;
                url: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        }>, "many">;
        claimPhases: z.ZodArray<z.ZodObject<{
            mintMethod: z.ZodString;
            mintArgs: z.ZodString;
            mintStartAt: z.ZodString;
            mintEndAt: z.ZodString;
            mintPriceInWei: z.ZodString;
            mintSupply: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            mintMethod: string;
            mintArgs: string;
            mintStartAt: string;
            mintEndAt: string;
            mintPriceInWei: string;
            mintSupply: number;
        }, {
            mintMethod: string;
            mintArgs: string;
            mintStartAt: string;
            mintEndAt: string;
            mintPriceInWei: string;
            mintSupply: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        description?: string | undefined;
        name: string;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        tokens: {
            description?: string | undefined;
            name: string;
            tokenId: string;
            tokenMediaItems: {
                type: string;
                representation: string;
                mimeType: string;
                url: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        }[];
        claimPhases: {
            mintMethod: string;
            mintArgs: string;
            mintStartAt: string;
            mintEndAt: string;
            mintPriceInWei: string;
            mintSupply: number;
        }[];
    }, {
        description?: string | undefined;
        name: string;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        tokens: {
            description?: string | undefined;
            name: string;
            tokenId: string;
            tokenMediaItems: {
                type: string;
                representation: string;
                mimeType: string;
                url: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        }[];
        claimPhases: {
            mintMethod: string;
            mintArgs: string;
            mintStartAt: string;
            mintEndAt: string;
            mintPriceInWei: string;
            mintSupply: number;
        }[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    collections: {
        description?: string | undefined;
        name: string;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        tokens: {
            description?: string | undefined;
            name: string;
            tokenId: string;
            tokenMediaItems: {
                type: string;
                representation: string;
                mimeType: string;
                url: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        }[];
        claimPhases: {
            mintMethod: string;
            mintArgs: string;
            mintStartAt: string;
            mintEndAt: string;
            mintPriceInWei: string;
            mintSupply: number;
        }[];
    }[];
}, {
    collections: {
        description?: string | undefined;
        name: string;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        tokens: {
            description?: string | undefined;
            name: string;
            tokenId: string;
            tokenMediaItems: {
                type: string;
                representation: string;
                mimeType: string;
                url: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        }[];
        claimPhases: {
            mintMethod: string;
            mintArgs: string;
            mintStartAt: string;
            mintEndAt: string;
            mintPriceInWei: string;
            mintSupply: number;
        }[];
    }[];
}>;
export declare const tCurationSelectionFieldsSchema: z.ZodObject<{
    type: z.ZodString;
    collection: z.ZodOptional<z.ZodObject<{
        networkName: z.ZodString;
        contractAddress: z.ZodString;
        thumbnailUrl: z.ZodString;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        tokens: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            tokenId: z.ZodString;
            tokenMediaItems: z.ZodArray<z.ZodObject<{
                representation: z.ZodString;
                type: z.ZodString;
                mimeType: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                representation: string;
                mimeType: string;
                url: string;
            }, {
                type: string;
                representation: string;
                mimeType: string;
                url: string;
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
            description?: string | undefined;
            name: string;
            tokenId: string;
            tokenMediaItems: {
                type: string;
                representation: string;
                mimeType: string;
                url: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        }, {
            description?: string | undefined;
            name: string;
            tokenId: string;
            tokenMediaItems: {
                type: string;
                representation: string;
                mimeType: string;
                url: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        }>, "many">;
        claimPhases: z.ZodArray<z.ZodObject<{
            mintMethod: z.ZodString;
            mintArgs: z.ZodString;
            mintStartAt: z.ZodString;
            mintEndAt: z.ZodString;
            mintPriceInWei: z.ZodString;
            mintSupply: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            mintMethod: string;
            mintArgs: string;
            mintStartAt: string;
            mintEndAt: string;
            mintPriceInWei: string;
            mintSupply: number;
        }, {
            mintMethod: string;
            mintArgs: string;
            mintStartAt: string;
            mintEndAt: string;
            mintPriceInWei: string;
            mintSupply: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        description?: string | undefined;
        name: string;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        tokens: {
            description?: string | undefined;
            name: string;
            tokenId: string;
            tokenMediaItems: {
                type: string;
                representation: string;
                mimeType: string;
                url: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        }[];
        claimPhases: {
            mintMethod: string;
            mintArgs: string;
            mintStartAt: string;
            mintEndAt: string;
            mintPriceInWei: string;
            mintSupply: number;
        }[];
    }, {
        description?: string | undefined;
        name: string;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        tokens: {
            description?: string | undefined;
            name: string;
            tokenId: string;
            tokenMediaItems: {
                type: string;
                representation: string;
                mimeType: string;
                url: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        }[];
        claimPhases: {
            mintMethod: string;
            mintArgs: string;
            mintStartAt: string;
            mintEndAt: string;
            mintPriceInWei: string;
            mintSupply: number;
        }[];
    }>>;
    content: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    collection?: {
        description?: string | undefined;
        name: string;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        tokens: {
            description?: string | undefined;
            name: string;
            tokenId: string;
            tokenMediaItems: {
                type: string;
                representation: string;
                mimeType: string;
                url: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        }[];
        claimPhases: {
            mintMethod: string;
            mintArgs: string;
            mintStartAt: string;
            mintEndAt: string;
            mintPriceInWei: string;
            mintSupply: number;
        }[];
    } | undefined;
    content?: string | undefined;
    type: string;
}, {
    collection?: {
        description?: string | undefined;
        name: string;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        tokens: {
            description?: string | undefined;
            name: string;
            tokenId: string;
            tokenMediaItems: {
                type: string;
                representation: string;
                mimeType: string;
                url: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        }[];
        claimPhases: {
            mintMethod: string;
            mintArgs: string;
            mintStartAt: string;
            mintEndAt: string;
            mintPriceInWei: string;
            mintSupply: number;
        }[];
    } | undefined;
    content?: string | undefined;
    type: string;
}>;
export declare const tCurationFieldsSchema: z.ZodObject<{
    publishedAt: z.ZodOptional<z.ZodString>;
    curationSelections: z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        collection: z.ZodOptional<z.ZodObject<{
            networkName: z.ZodString;
            contractAddress: z.ZodString;
            thumbnailUrl: z.ZodString;
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            tokens: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                tokenId: z.ZodString;
                tokenMediaItems: z.ZodArray<z.ZodObject<{
                    representation: z.ZodString;
                    type: z.ZodString;
                    mimeType: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    representation: string;
                    mimeType: string;
                    url: string;
                }, {
                    type: string;
                    representation: string;
                    mimeType: string;
                    url: string;
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
                description?: string | undefined;
                name: string;
                tokenId: string;
                tokenMediaItems: {
                    type: string;
                    representation: string;
                    mimeType: string;
                    url: string;
                }[];
                tokenUrls: {
                    type: string;
                    url: string;
                }[];
            }, {
                description?: string | undefined;
                name: string;
                tokenId: string;
                tokenMediaItems: {
                    type: string;
                    representation: string;
                    mimeType: string;
                    url: string;
                }[];
                tokenUrls: {
                    type: string;
                    url: string;
                }[];
            }>, "many">;
            claimPhases: z.ZodArray<z.ZodObject<{
                mintMethod: z.ZodString;
                mintArgs: z.ZodString;
                mintStartAt: z.ZodString;
                mintEndAt: z.ZodString;
                mintPriceInWei: z.ZodString;
                mintSupply: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                mintMethod: string;
                mintArgs: string;
                mintStartAt: string;
                mintEndAt: string;
                mintPriceInWei: string;
                mintSupply: number;
            }, {
                mintMethod: string;
                mintArgs: string;
                mintStartAt: string;
                mintEndAt: string;
                mintPriceInWei: string;
                mintSupply: number;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            description?: string | undefined;
            name: string;
            networkName: string;
            contractAddress: string;
            thumbnailUrl: string;
            tokens: {
                description?: string | undefined;
                name: string;
                tokenId: string;
                tokenMediaItems: {
                    type: string;
                    representation: string;
                    mimeType: string;
                    url: string;
                }[];
                tokenUrls: {
                    type: string;
                    url: string;
                }[];
            }[];
            claimPhases: {
                mintMethod: string;
                mintArgs: string;
                mintStartAt: string;
                mintEndAt: string;
                mintPriceInWei: string;
                mintSupply: number;
            }[];
        }, {
            description?: string | undefined;
            name: string;
            networkName: string;
            contractAddress: string;
            thumbnailUrl: string;
            tokens: {
                description?: string | undefined;
                name: string;
                tokenId: string;
                tokenMediaItems: {
                    type: string;
                    representation: string;
                    mimeType: string;
                    url: string;
                }[];
                tokenUrls: {
                    type: string;
                    url: string;
                }[];
            }[];
            claimPhases: {
                mintMethod: string;
                mintArgs: string;
                mintStartAt: string;
                mintEndAt: string;
                mintPriceInWei: string;
                mintSupply: number;
            }[];
        }>>;
        content: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        collection?: {
            description?: string | undefined;
            name: string;
            networkName: string;
            contractAddress: string;
            thumbnailUrl: string;
            tokens: {
                description?: string | undefined;
                name: string;
                tokenId: string;
                tokenMediaItems: {
                    type: string;
                    representation: string;
                    mimeType: string;
                    url: string;
                }[];
                tokenUrls: {
                    type: string;
                    url: string;
                }[];
            }[];
            claimPhases: {
                mintMethod: string;
                mintArgs: string;
                mintStartAt: string;
                mintEndAt: string;
                mintPriceInWei: string;
                mintSupply: number;
            }[];
        } | undefined;
        content?: string | undefined;
        type: string;
    }, {
        collection?: {
            description?: string | undefined;
            name: string;
            networkName: string;
            contractAddress: string;
            thumbnailUrl: string;
            tokens: {
                description?: string | undefined;
                name: string;
                tokenId: string;
                tokenMediaItems: {
                    type: string;
                    representation: string;
                    mimeType: string;
                    url: string;
                }[];
                tokenUrls: {
                    type: string;
                    url: string;
                }[];
            }[];
            claimPhases: {
                mintMethod: string;
                mintArgs: string;
                mintStartAt: string;
                mintEndAt: string;
                mintPriceInWei: string;
                mintSupply: number;
            }[];
        } | undefined;
        content?: string | undefined;
        type: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    publishedAt?: string | undefined;
    curationSelections: {
        collection?: {
            description?: string | undefined;
            name: string;
            networkName: string;
            contractAddress: string;
            thumbnailUrl: string;
            tokens: {
                description?: string | undefined;
                name: string;
                tokenId: string;
                tokenMediaItems: {
                    type: string;
                    representation: string;
                    mimeType: string;
                    url: string;
                }[];
                tokenUrls: {
                    type: string;
                    url: string;
                }[];
            }[];
            claimPhases: {
                mintMethod: string;
                mintArgs: string;
                mintStartAt: string;
                mintEndAt: string;
                mintPriceInWei: string;
                mintSupply: number;
            }[];
        } | undefined;
        content?: string | undefined;
        type: string;
    }[];
}, {
    publishedAt?: string | undefined;
    curationSelections: {
        collection?: {
            description?: string | undefined;
            name: string;
            networkName: string;
            contractAddress: string;
            thumbnailUrl: string;
            tokens: {
                description?: string | undefined;
                name: string;
                tokenId: string;
                tokenMediaItems: {
                    type: string;
                    representation: string;
                    mimeType: string;
                    url: string;
                }[];
                tokenUrls: {
                    type: string;
                    url: string;
                }[];
            }[];
            claimPhases: {
                mintMethod: string;
                mintArgs: string;
                mintStartAt: string;
                mintEndAt: string;
                mintPriceInWei: string;
                mintSupply: number;
            }[];
        } | undefined;
        content?: string | undefined;
        type: string;
    }[];
}>;
