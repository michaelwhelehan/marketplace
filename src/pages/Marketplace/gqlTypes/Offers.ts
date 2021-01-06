/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OfferFilterInput, OfferStatus } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL query operation: Offers
// ====================================================

export interface Offers_offers_edges_node_createdBy {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  avatarUrl: string | null;
  jobTitle: string | null;
}

export interface Offers_offers_edges_node_amount {
  __typename: "Money";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money.
   */
  amount: number;
}

export interface Offers_offers_edges_node {
  __typename: "Offer";
  /**
   * The ID of the object.
   */
  id: string;
  created: any;
  offerStatus: OfferStatus | null;
  createdBy: Offers_offers_edges_node_createdBy;
  message: string | null;
  amount: Offers_offers_edges_node_amount | null;
}

export interface Offers_offers_edges {
  __typename: "OfferCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: Offers_offers_edges_node;
}

export interface Offers_offers_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
}

export interface Offers_offers {
  __typename: "OfferCountableConnection";
  /**
   * A total count of items in the collection.
   */
  totalCount: number | null;
  edges: Offers_offers_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: Offers_offers_pageInfo;
}

export interface Offers {
  /**
   * List of the marketplace's offers.
   */
  offers: Offers_offers | null;
}

export interface OffersVariables {
  after?: string | null;
  pageSize?: number | null;
  filter?: OfferFilterInput | null;
}
