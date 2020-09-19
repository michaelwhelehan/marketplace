/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PreSignedUploadParams
// ====================================================

export interface PreSignedUploadParams_preSignedUploadParams {
  __typename: "PreSignedUploadData";
  /**
   * Presigned fields.
   */
  fields: string;
  /**
   * URL to upload to on S3.
   */
  uploadUrl: string;
  /**
   * URL where file will be stored on S3.
   */
  fileUrl: string;
}

export interface PreSignedUploadParams {
  /**
   * Pre-signed upload data for uploading to AWS S3
   */
  preSignedUploadParams: PreSignedUploadParams_preSignedUploadParams | null;
}

export interface PreSignedUploadParamsVariables {
  directory: string;
  fileName: string;
}
