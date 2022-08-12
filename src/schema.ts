// Generated by ts-to-zod
import { z } from "zod";

export const tPaginatedEndpointQueryDataSchema = z.object({
  skip: z.number(),
  take: z.number(),
});

export const tRecordDefaultFieldsSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const tCollectionFieldsFlatSchema = z.object({
  networkName: z.string(),
  contractAddress: z.string(),
  thumbnailUrl: z.string(),
  name: z.string(),
  description: z.string().optional(),
});

export const tTokenFieldsFlatSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  tokenId: z.string(),
});

export const tTokenMediaItemFieldsSchema = z.object({
  representation: z.string(),
  type: z.string(),
  mimeType: z.string(),
  url: z.string(),
});

export const tTokenUrlFieldsSchema = z.object({
  type: z.string(),
  url: z.string(),
});

export const tMintOptionMintArgSchema = z
  .union([z.string(), z.number()])
  .nullable();

export const tMintArgBignumValueSchema = z.object({
  type: z.literal("BigNumber"),
  hex: z.string(),
});

export const tCollectionsListQueryDataSchema = tPaginatedEndpointQueryDataSchema.and(
  z.object({
    maxTokensPerCollection: z.number().optional(),
  })
);

export const tTokenFieldsSchema = tTokenFieldsFlatSchema.and(
  z.object({
    tokenMediaItems: z.array(tTokenMediaItemFieldsSchema),
    tokenUrls: z.array(tTokenUrlFieldsSchema),
  })
);

export const tMintOptionSchema = z.object({
  networkName: z.string(),
  contractAddress: z.string(),
  mintQuantity: z.number(),
  mintPriceInWei: z.string(),
  mintMethod: z.string(),
  mintArgs: z.array(tMintOptionMintArgSchema),
});

export const tCallableMintOptionSchema = tMintOptionSchema.and(
  z.object({
    executeMint: z.function().args().returns(z.void()),
  })
);

export const tRawMintArgSchema = z
  .object({
    name: z.string(),
  })
  .and(
    z.union([
      z.object({
        type: z.literal("address"),
        value: z.literal("string"),
      }),
      z.object({
        type: z.literal("uint256"),
        value: tMintArgBignumValueSchema,
      }),
      z.object({
        type: z.literal("bytes32[]"),
        value: z.array(z.string()),
      }),
    ])
  );

export const tCollectionFieldsSimplifiedSchema = tCollectionFieldsFlatSchema.and(
  z.object({
    id: z.string(),
    tokenMediaItems: z.array(tTokenMediaItemFieldsSchema),
    mintOptions: z.array(tMintOptionSchema),
  })
);

export const tClaimPhaseFieldsSchema = z.object({
  mintMethod: z.string(),
  mintArgs: z.array(tRawMintArgSchema),
  mintPriceInWei: z.string(),
});

export const tCollectionsListResponseDataSchema = z.object({
  collections: z.array(tCollectionFieldsSimplifiedSchema),
});

export const tCollectionFieldsSchema = tCollectionFieldsFlatSchema.and(
  z.object({
    tokens: z.array(tTokenFieldsSchema),
    claimPhases: z.array(tClaimPhaseFieldsSchema),
  })
);

export const tCurationSelectionFieldsSchema = z.object({
  type: z.string(),
  collection: tCollectionFieldsSchema.optional(),
  content: z.string().optional(),
});

export const tCurationFieldsSchema = z.object({
  publishedAt: z.string().optional(),
  curationSelections: z.array(tCurationSelectionFieldsSchema),
});
