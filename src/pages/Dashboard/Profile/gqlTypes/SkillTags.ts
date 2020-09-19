/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SkillTags
// ====================================================

export interface SkillTags_skillTags_edges_node {
  __typename: "SkillTag";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface SkillTags_skillTags_edges {
  __typename: "SkillTagCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: SkillTags_skillTags_edges_node;
}

export interface SkillTags_skillTags {
  __typename: "SkillTagCountableConnection";
  edges: SkillTags_skillTags_edges[];
}

export interface SkillTags {
  /**
   * List of the marketplace's skills.
   */
  skillTags: SkillTags_skillTags | null;
}
