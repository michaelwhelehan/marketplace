/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserLanguageLevel } from "./../../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: UserDetails
// ====================================================

export interface UserDetails_skills {
  __typename: "SkillTag";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface UserDetails_languages_language {
  __typename: "Language";
  name: string;
}

export interface UserDetails_languages {
  __typename: "UserLanguage";
  /**
   * The ID of the object.
   */
  id: string;
  level: UserLanguageLevel | null;
  language: UserDetails_languages_language;
}

export interface UserDetails_educations {
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

export interface UserDetails_workExperiences {
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

export interface UserDetails_portfolios {
  __typename: "Portfolio";
  /**
   * The ID of the object.
   */
  id: string;
  title: string;
  description: string;
  imageUrl: string | null;
}

export interface UserDetails {
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
  skills: (UserDetails_skills | null)[] | null;
  /**
   * List of user's languages.
   */
  languages: (UserDetails_languages | null)[] | null;
  /**
   * List of user's education.
   */
  educations: (UserDetails_educations | null)[] | null;
  /**
   * List of user's work experience.
   */
  workExperiences: (UserDetails_workExperiences | null)[] | null;
  /**
   * List of user's portfolios.
   */
  portfolios: (UserDetails_portfolios | null)[] | null;
}
