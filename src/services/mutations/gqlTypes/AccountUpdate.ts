/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AccountInput, AccountErrorCode, UserLanguageLevel } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: AccountUpdate
// ====================================================

export interface AccountUpdate_accountUpdate_errors {
  __typename: "AccountError";
  /**
   * The error code.
   */
  code: AccountErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface AccountUpdate_accountUpdate_user_skills {
  __typename: "SkillTag";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface AccountUpdate_accountUpdate_user_languages_language {
  __typename: "Language";
  name: string;
}

export interface AccountUpdate_accountUpdate_user_languages {
  __typename: "UserLanguage";
  /**
   * The ID of the object.
   */
  id: string;
  level: UserLanguageLevel | null;
  language: AccountUpdate_accountUpdate_user_languages_language;
}

export interface AccountUpdate_accountUpdate_user_educations {
  __typename: "Education";
  /**
   * The ID of the object.
   */
  id: string;
  school: string;
  startYear: string;
  endYear: string;
  degree: string | null;
  description: string | null;
}

export interface AccountUpdate_accountUpdate_user_workExperiences {
  __typename: "WorkExperience";
  /**
   * The ID of the object.
   */
  id: string;
  title: string;
  company: string;
  location: string | null;
  startDate: any;
  endDate: any;
  description: string;
}

export interface AccountUpdate_accountUpdate_user_portfolios {
  __typename: "Portfolio";
  /**
   * The ID of the object.
   */
  id: string;
  title: string;
  description: string;
  imageUrl: string | null;
}

export interface AccountUpdate_accountUpdate_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
  mobile: string | null;
  jobTitle: string | null;
  bio: string | null;
  /**
   * List of user's skills.
   */
  skills: (AccountUpdate_accountUpdate_user_skills | null)[] | null;
  /**
   * List of user's languages.
   */
  languages: (AccountUpdate_accountUpdate_user_languages | null)[] | null;
  /**
   * List of user's education.
   */
  educations: (AccountUpdate_accountUpdate_user_educations | null)[] | null;
  /**
   * List of user's work experience.
   */
  workExperiences: (AccountUpdate_accountUpdate_user_workExperiences | null)[] | null;
  /**
   * List of user's portfolios.
   */
  portfolios: (AccountUpdate_accountUpdate_user_portfolios | null)[] | null;
}

export interface AccountUpdate_accountUpdate {
  __typename: "AccountUpdate";
  errors: AccountUpdate_accountUpdate_errors[];
  user: AccountUpdate_accountUpdate_user | null;
}

export interface AccountUpdate {
  /**
   * Updates the account of the logged-in user.
   */
  accountUpdate: AccountUpdate_accountUpdate | null;
}

export interface AccountUpdateVariables {
  input: AccountInput;
}
