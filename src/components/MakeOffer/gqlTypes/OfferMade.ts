/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OfferStatus } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: OfferMade
// ====================================================

export interface OfferMade_amount {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface OfferMade_createdBy {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  avatarUrl: string | null;
  firstName: string;
  lastName: string;
  username: string;
}

export interface OfferMade {
  __typename: "Offer";
  /**
   * The ID of the object.
   */
  id: string;
  status: OfferStatus | null;
  amount: OfferMade_amount | null;
  message: string | null;
  createdBy: OfferMade_createdBy;
}
