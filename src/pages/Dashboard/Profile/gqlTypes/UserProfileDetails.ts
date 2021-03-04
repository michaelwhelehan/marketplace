/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserLanguageLevel } from "./../../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL query operation: UserProfileDetails
// ====================================================

export interface UserProfileDetails_me_skills {
  __typename: "SkillTag";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface UserProfileDetails_me_languages_language {
  __typename: "Language";
  name: string;
}

export interface UserProfileDetails_me_languages {
  __typename: "UserLanguage";
  /**
   * The ID of the object.
   */
  id: string;
  level: UserLanguageLevel | null;
  language: UserProfileDetails_me_languages_language;
}

export interface UserProfileDetails_me_educations {
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

export interface UserProfileDetails_me_workExperiences {
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

export interface UserProfileDetails_me_portfolios {
  __typename: "Portfolio";
  /**
   * The ID of the object.
   */
  id: string;
  title: string;
  description: string;
  imageUrl: string | null;
}

export interface UserProfileDetails_me {
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
  lastNotificationsSeenTimestamp: any | null;
  /**
   * List of user's skills.
   */
  skills: (UserProfileDetails_me_skills | null)[] | null;
  /**
   * List of user's languages.
   */
  languages: (UserProfileDetails_me_languages | null)[] | null;
  /**
   * List of user's education.
   */
  educations: (UserProfileDetails_me_educations | null)[] | null;
  /**
   * List of user's work experience.
   */
  workExperiences: (UserProfileDetails_me_workExperiences | null)[] | null;
  /**
   * List of user's portfolios.
   */
  portfolios: (UserProfileDetails_me_portfolios | null)[] | null;
}

export interface UserProfileDetails {
  /**
   * Return the currently authenticated user.
   */
  me: UserProfileDetails_me | null;
}
