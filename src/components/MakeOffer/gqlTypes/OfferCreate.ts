/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OfferCreateInput, OfferStatus, OfferErrorCode } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: OfferCreate
// ====================================================

export interface OfferCreate_offerCreate_offer_amount {
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

export interface OfferCreate_offerCreate_offer_createdBy {
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

export interface OfferCreate_offerCreate_offer {
  __typename: "Offer";
  /**
   * The ID of the object.
   */
  id: string;
  status: OfferStatus | null;
  amount: OfferCreate_offerCreate_offer_amount | null;
  message: string | null;
  createdBy: OfferCreate_offerCreate_offer_createdBy;
}

export interface OfferCreate_offerCreate_offerErrors {
  __typename: "OfferError";
  /**
   * The error message.
   */
  message: string | null;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error code.
   */
  code: OfferErrorCode;
}

export interface OfferCreate_offerCreate {
  __typename: "OfferCreate";
  offer: OfferCreate_offerCreate_offer | null;
  offerErrors: OfferCreate_offerCreate_offerErrors[];
}

export interface OfferCreate {
  /**
   * Creates a new offer.
   */
  offerCreate: OfferCreate_offerCreate | null;
}

export interface OfferCreateVariables {
  input: OfferCreateInput;
}
