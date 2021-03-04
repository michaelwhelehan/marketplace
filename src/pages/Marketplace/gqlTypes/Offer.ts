/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OfferStatus } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: Offer
// ====================================================

export interface Offer_createdBy {
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

export interface Offer_amount {
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

export interface Offer {
  __typename: "Offer";
  /**
   * The ID of the object.
   */
  id: string;
  created: any;
  offerStatus: OfferStatus | null;
  createdBy: Offer_createdBy;
  message: string | null;
  amount: Offer_amount | null;
}
