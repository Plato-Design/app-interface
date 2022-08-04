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

export const tClaimPhaseFieldsSchema = z.object({
  mintMethod: z.string(),
  mintArgs: z.string(),
  mintStartAt: z.string(),
  mintEndAt: z.string(),
  mintPriceInWei: z.string(),
  mintSupply: z.number(),
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

export const tCollectionsListQueryDataSchema = tPaginatedEndpointQueryDataSchema.and(
  z.object({})
);

export const tTokenFieldsSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  tokenId: z.string(),
  tokenMediaItems: z.array(tTokenMediaItemFieldsSchema),
  tokenUrls: z.array(tTokenUrlFieldsSchema),
});

export const tCollectionFieldsSchema = z.object({
  networkName: z.string(),
  contractAddress: z.string(),
  thumbnailUrl: z.string(),
  name: z.string(),
  description: z.string().optional(),
  tokens: z.array(tTokenFieldsSchema),
  claimPhases: z.array(tClaimPhaseFieldsSchema),
});

export const tCollectionsListResponseDataSchema = z.object({
  collections: z.array(tCollectionFieldsSchema),
});

export const tCurationSelectionFieldsSchema = z.object({
  type: z.string(),
  collection: tCollectionFieldsSchema.optional(),
  content: z.string().optional(),
});

export const tCurationFieldsSchema = z.object({
  publishedAt: z.string().optional(),
  curationSelections: z.array(tCurationSelectionFieldsSchema),
});
