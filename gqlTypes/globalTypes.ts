/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * An enumeration.
 */
export enum AccountErrorCode {
  ACTIVATE_OWN_ACCOUNT = "ACTIVATE_OWN_ACCOUNT",
  ACTIVATE_SUPERUSER_ACCOUNT = "ACTIVATE_SUPERUSER_ACCOUNT",
  DEACTIVATE_OWN_ACCOUNT = "DEACTIVATE_OWN_ACCOUNT",
  DEACTIVATE_SUPERUSER_ACCOUNT = "DEACTIVATE_SUPERUSER_ACCOUNT",
  DELETE_NON_STAFF_USER = "DELETE_NON_STAFF_USER",
  DELETE_OWN_ACCOUNT = "DELETE_OWN_ACCOUNT",
  DELETE_STAFF_ACCOUNT = "DELETE_STAFF_ACCOUNT",
  DELETE_SUPERUSER_ACCOUNT = "DELETE_SUPERUSER_ACCOUNT",
  DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
  INVALID_PASSWORD = "INVALID_PASSWORD",
  LEFT_NOT_MANAGEABLE_PERMISSION = "LEFT_NOT_MANAGEABLE_PERMISSION",
  NOT_FOUND = "NOT_FOUND",
  OUT_OF_SCOPE_GROUP = "OUT_OF_SCOPE_GROUP",
  OUT_OF_SCOPE_PERMISSION = "OUT_OF_SCOPE_PERMISSION",
  OUT_OF_SCOPE_SERVICE_ACCOUNT = "OUT_OF_SCOPE_SERVICE_ACCOUNT",
  OUT_OF_SCOPE_USER = "OUT_OF_SCOPE_USER",
  PASSWORD_ENTIRELY_NUMERIC = "PASSWORD_ENTIRELY_NUMERIC",
  PASSWORD_TOO_COMMON = "PASSWORD_TOO_COMMON",
  PASSWORD_TOO_SHORT = "PASSWORD_TOO_SHORT",
  PASSWORD_TOO_SIMILAR = "PASSWORD_TOO_SIMILAR",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

/**
 * An enumeration.
 */
export enum ConversationCategory {
  INBOX = "INBOX",
  ORDER = "ORDER",
  TASK = "TASK",
}

/**
 * An enumeration.
 */
export enum ConversationMessageMessageType {
  GENERATED = "GENERATED",
  MEDIA = "MEDIA",
  TEXT = "TEXT",
}

/**
 * An enumeration.
 */
export enum TaskLocationType {
  IN_PERSON = "IN_PERSON",
  REMOTE = "REMOTE",
}

/**
 * An enumeration.
 */
export enum UserLanguageLevel {
  BEGINNER = "BEGINNER",
  FLUENT = "FLUENT",
  PROFESSIONAL = "PROFESSIONAL",
}

export interface AccountInput {
  avatarUrl?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  jobTitle?: string | null;
  mobile?: string | null;
  bio?: string | null;
  skills?: (string | null)[] | null;
  educations?: (EducationInput | null)[] | null;
  deleteEducation?: string | null;
  workExperiences?: (WorkExperienceInput | null)[] | null;
  deleteWorkExperience?: string | null;
  portfolios?: (PortfolioInput | null)[] | null;
  deletePortfolio?: string | null;
}

export interface EducationInput {
  id?: string | null;
  school: string;
  degree: string;
  startYear: string;
  endYear: string;
  description?: string | null;
}

export interface PortfolioInput {
  id?: string | null;
  title: string;
  description?: string | null;
  imageUrl?: string | null;
}

export interface PriceRangeInput {
  gte?: number | null;
  lte?: number | null;
}

export interface TaskFilterInput {
  budget?: PriceRangeInput | null;
}

export interface WorkExperienceInput {
  id?: string | null;
  title: string;
  company: string;
  location?: string | null;
  startMonth: string;
  startYear: string;
  endMonth?: string | null;
  endYear?: string | null;
  startDate?: any | null;
  endDate?: any | null;
  description?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
