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
export enum OfferErrorCode {
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  OFFER_ERROR = "OFFER_ERROR",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

/**
 * An enumeration.
 */
export enum OfferStatus {
  ACCEPTED = "ACCEPTED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

/**
 * An enumeration.
 */
export enum TaskErrorCode {
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  TASK_ERROR = "TASK_ERROR",
  UNIQUE = "UNIQUE",
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
export enum TaskStatus {
  ASSIGNED = "ASSIGNED",
  CANCELLED = "CANCELLED",
  COMPLETE = "COMPLETE",
  DELIVERED = "DELIVERED",
  DRAFT = "DRAFT",
  OPEN = "OPEN",
}

export enum TaskStatusFilter {
  ASSIGNED = "ASSIGNED",
  CANCELLED = "CANCELLED",
  COMPLETE = "COMPLETE",
  DELIVERED = "DELIVERED",
  DRAFT = "DRAFT",
  OPEN = "OPEN",
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
  lastNotificationsSeenTimestamp?: any | null;
  skills?: (string | null)[] | null;
  educations?: (EducationInput | null)[] | null;
  deleteEducation?: string | null;
  workExperiences?: (WorkExperienceInput | null)[] | null;
  deleteWorkExperience?: string | null;
  portfolios?: (PortfolioInput | null)[] | null;
  deletePortfolio?: string | null;
}

export interface ActivityInput {
  read?: boolean | null;
}

export interface EducationInput {
  id?: string | null;
  school: string;
  degree: string;
  startYear: string;
  endYear: string;
  description?: string | null;
}

export interface OfferCreateInput {
  task: string;
  amountAmount: any;
  message?: string | null;
  status?: string | null;
  shortlisted?: boolean | null;
}

export interface OfferFilterInput {
  amount?: PriceRangeInput | null;
  taskSlug?: string | null;
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
  status?: (TaskStatusFilter | null)[] | null;
}

export interface TaskInput {
  title?: string | null;
  categories?: (string | null)[] | null;
  details?: string | null;
  locationType?: string | null;
  location?: string | null;
  locationLatitude?: string | null;
  locationLongitude?: string | null;
  dueDate?: any | null;
  budgetType?: string | null;
  budgetAmount?: any | null;
  budgetDuration?: number | null;
}

export interface UserTaskFilterInput {
  budget?: PriceRangeInput | null;
  status?: (TaskStatusFilter | null)[] | null;
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
