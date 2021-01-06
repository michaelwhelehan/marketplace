/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserLanguageLevel } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: PublicUserDetails
// ====================================================

export interface PublicUserDetails_skills {
  __typename: "SkillTag";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface PublicUserDetails_languages_language {
  __typename: "Language";
  name: string;
}

export interface PublicUserDetails_languages {
  __typename: "UserLanguage";
  /**
   * The ID of the object.
   */
  id: string;
  level: UserLanguageLevel | null;
  language: PublicUserDetails_languages_language;
}

export interface PublicUserDetails_educations {
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

export interface PublicUserDetails_workExperiences {
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

export interface PublicUserDetails_portfolios {
  __typename: "Portfolio";
  /**
   * The ID of the object.
   */
  id: string;
  title: string;
  description: string;
  imageUrl: string | null;
}

export interface PublicUserDetails {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
  jobTitle: string | null;
  bio: string | null;
  /**
   * List of user's skills.
   */
  skills: (PublicUserDetails_skills | null)[] | null;
  /**
   * List of user's languages.
   */
  languages: (PublicUserDetails_languages | null)[] | null;
  /**
   * List of user's education.
   */
  educations: (PublicUserDetails_educations | null)[] | null;
  /**
   * List of user's work experience.
   */
  workExperiences: (PublicUserDetails_workExperiences | null)[] | null;
  /**
   * List of user's portfolios.
   */
  portfolios: (PublicUserDetails_portfolios | null)[] | null;
}
