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
export declare const tTokenMediaItemFieldsSchema: z.ZodObject<{
    type: z.ZodString;
    mime: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
    mime: string;
    url: string;
}, {
    type: string;
    mime: string;
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
        type: z.ZodString;
        mime: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        mime: string;
        url: string;
    }, {
        type: string;
        mime: string;
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
        mime: string;
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
        mime: string;
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
    title: z.ZodString;
    description: z.ZodString;
    tokens: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        tokenId: z.ZodString;
        tokenMediaItems: z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            mime: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            mime: string;
            url: string;
        }, {
            type: string;
            mime: string;
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
            mime: string;
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
            mime: string;
            url: string;
        }[];
        tokenUrls: {
            type: string;
            url: string;
        }[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    description: string;
    networkName: string;
    contractAddress: string;
    thumbnailUrl: string;
    title: string;
    tokens: {
        description?: string | undefined;
        name: string;
        tokenId: string;
        tokenMediaItems: {
            type: string;
            mime: string;
            url: string;
        }[];
        tokenUrls: {
            type: string;
            url: string;
        }[];
    }[];
}, {
    description: string;
    networkName: string;
    contractAddress: string;
    thumbnailUrl: string;
    title: string;
    tokens: {
        description?: string | undefined;
        name: string;
        tokenId: string;
        tokenMediaItems: {
            type: string;
            mime: string;
            url: string;
        }[];
        tokenUrls: {
            type: string;
            url: string;
        }[];
    }[];
}>;
export declare const tCollectionsListResponseDataSchema: z.ZodObject<{
    collections: z.ZodArray<z.ZodObject<{
        networkName: z.ZodString;
        contractAddress: z.ZodString;
        thumbnailUrl: z.ZodString;
        title: z.ZodString;
        description: z.ZodString;
        tokens: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            tokenId: z.ZodString;
            tokenMediaItems: z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                mime: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                mime: string;
                url: string;
            }, {
                type: string;
                mime: string;
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
                mime: string;
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
                mime: string;
                url: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        description: string;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        title: string;
        tokens: {
            description?: string | undefined;
            name: string;
            tokenId: string;
            tokenMediaItems: {
                type: string;
                mime: string;
                url: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        }[];
    }, {
        description: string;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        title: string;
        tokens: {
            description?: string | undefined;
            name: string;
            tokenId: string;
            tokenMediaItems: {
                type: string;
                mime: string;
                url: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        }[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    collections: {
        description: string;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        title: string;
        tokens: {
            description?: string | undefined;
            name: string;
            tokenId: string;
            tokenMediaItems: {
                type: string;
                mime: string;
                url: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        }[];
    }[];
}, {
    collections: {
        description: string;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        title: string;
        tokens: {
            description?: string | undefined;
            name: string;
            tokenId: string;
            tokenMediaItems: {
                type: string;
                mime: string;
                url: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        }[];
    }[];
}>;
export declare const tCurationSelectionFieldsSchema: z.ZodObject<{
    type: z.ZodString;
    collection: z.ZodOptional<z.ZodObject<{
        networkName: z.ZodString;
        contractAddress: z.ZodString;
        thumbnailUrl: z.ZodString;
        title: z.ZodString;
        description: z.ZodString;
        tokens: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            tokenId: z.ZodString;
            tokenMediaItems: z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                mime: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                mime: string;
                url: string;
            }, {
                type: string;
                mime: string;
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
                mime: string;
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
                mime: string;
                url: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        description: string;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        title: string;
        tokens: {
            description?: string | undefined;
            name: string;
            tokenId: string;
            tokenMediaItems: {
                type: string;
                mime: string;
                url: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        }[];
    }, {
        description: string;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        title: string;
        tokens: {
            description?: string | undefined;
            name: string;
            tokenId: string;
            tokenMediaItems: {
                type: string;
                mime: string;
                url: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        }[];
    }>>;
    content: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    collection?: {
        description: string;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        title: string;
        tokens: {
            description?: string | undefined;
            name: string;
            tokenId: string;
            tokenMediaItems: {
                type: string;
                mime: string;
                url: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
        }[];
    } | undefined;
    content?: string | undefined;
    type: string;
}, {
    collection?: {
        description: string;
        networkName: string;
        contractAddress: string;
        thumbnailUrl: string;
        title: string;
        tokens: {
            description?: string | undefined;
            name: string;
            tokenId: string;
            tokenMediaItems: {
                type: string;
                mime: string;
                url: string;
            }[];
            tokenUrls: {
                type: string;
                url: string;
            }[];
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
            title: z.ZodString;
            description: z.ZodString;
            tokens: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                description: z.ZodOptional<z.ZodString>;
                tokenId: z.ZodString;
                tokenMediaItems: z.ZodArray<z.ZodObject<{
                    type: z.ZodString;
                    mime: z.ZodString;
                    url: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    mime: string;
                    url: string;
                }, {
                    type: string;
                    mime: string;
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
                    mime: string;
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
                    mime: string;
                    url: string;
                }[];
                tokenUrls: {
                    type: string;
                    url: string;
                }[];
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            description: string;
            networkName: string;
            contractAddress: string;
            thumbnailUrl: string;
            title: string;
            tokens: {
                description?: string | undefined;
                name: string;
                tokenId: string;
                tokenMediaItems: {
                    type: string;
                    mime: string;
                    url: string;
                }[];
                tokenUrls: {
                    type: string;
                    url: string;
                }[];
            }[];
        }, {
            description: string;
            networkName: string;
            contractAddress: string;
            thumbnailUrl: string;
            title: string;
            tokens: {
                description?: string | undefined;
                name: string;
                tokenId: string;
                tokenMediaItems: {
                    type: string;
                    mime: string;
                    url: string;
                }[];
                tokenUrls: {
                    type: string;
                    url: string;
                }[];
            }[];
        }>>;
        content: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        collection?: {
            description: string;
            networkName: string;
            contractAddress: string;
            thumbnailUrl: string;
            title: string;
            tokens: {
                description?: string | undefined;
                name: string;
                tokenId: string;
                tokenMediaItems: {
                    type: string;
                    mime: string;
                    url: string;
                }[];
                tokenUrls: {
                    type: string;
                    url: string;
                }[];
            }[];
        } | undefined;
        content?: string | undefined;
        type: string;
    }, {
        collection?: {
            description: string;
            networkName: string;
            contractAddress: string;
            thumbnailUrl: string;
            title: string;
            tokens: {
                description?: string | undefined;
                name: string;
                tokenId: string;
                tokenMediaItems: {
                    type: string;
                    mime: string;
                    url: string;
                }[];
                tokenUrls: {
                    type: string;
                    url: string;
                }[];
            }[];
        } | undefined;
        content?: string | undefined;
        type: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    publishedAt?: string | undefined;
    curationSelections: {
        collection?: {
            description: string;
            networkName: string;
            contractAddress: string;
            thumbnailUrl: string;
            title: string;
            tokens: {
                description?: string | undefined;
                name: string;
                tokenId: string;
                tokenMediaItems: {
                    type: string;
                    mime: string;
                    url: string;
                }[];
                tokenUrls: {
                    type: string;
                    url: string;
                }[];
            }[];
        } | undefined;
        content?: string | undefined;
        type: string;
    }[];
}, {
    publishedAt?: string | undefined;
    curationSelections: {
        collection?: {
            description: string;
            networkName: string;
            contractAddress: string;
            thumbnailUrl: string;
            title: string;
            tokens: {
                description?: string | undefined;
                name: string;
                tokenId: string;
                tokenMediaItems: {
                    type: string;
                    mime: string;
                    url: string;
                }[];
                tokenUrls: {
                    type: string;
                    url: string;
                }[];
            }[];
        } | undefined;
        content?: string | undefined;
        type: string;
    }[];
}>;
