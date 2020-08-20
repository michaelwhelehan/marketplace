/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserLanguageLevel } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL query operation: PublicUserProfile
// ====================================================

export interface PublicUserProfile_publicUser_skills {
  __typename: "SkillTag";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface PublicUserProfile_publicUser_languages_language {
  __typename: "Language";
  name: string;
}

export interface PublicUserProfile_publicUser_languages {
  __typename: "UserLanguage";
  /**
   * The ID of the object.
   */
  id: string;
  level: UserLanguageLevel | null;
  language: PublicUserProfile_publicUser_languages_language;
}

export interface PublicUserProfile_publicUser_educations {
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

export interface PublicUserProfile_publicUser_workExperiences {
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

export interface PublicUserProfile_publicUser_portfolios {
  __typename: "Portfolio";
  /**
   * The ID of the object.
   */
  id: string;
  title: string;
  description: string;
  imageUrl: string | null;
}

export interface PublicUserProfile_publicUser {
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
  skills: (PublicUserProfile_publicUser_skills | null)[] | null;
  /**
   * List of user's languages.
   */
  languages: (PublicUserProfile_publicUser_languages | null)[] | null;
  /**
   * List of user's education.
   */
  educations: (PublicUserProfile_publicUser_educations | null)[] | null;
  /**
   * List of user's work experience.
   */
  workExperiences: (PublicUserProfile_publicUser_workExperiences | null)[] | null;
  /**
   * List of user's portfolios.
   */
  portfolios: (PublicUserProfile_publicUser_portfolios | null)[] | null;
}

export interface PublicUserProfile {
  /**
   * Look up a public user profiles by Username.
   */
  publicUser: PublicUserProfile_publicUser | null;
}

export interface PublicUserProfileVariables {
  username: string;
}
