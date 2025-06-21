/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
};

export type CreateEducationInput = {
  courses: Array<Scalars['String']['input']>;
  degree: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  institution: Scalars['String']['input'];
  location: Scalars['String']['input'];
  points: Array<Scalars['String']['input']>;
  /** Array of skill IDs */
  skillIds: Array<Scalars['Int']['input']>;
  startDate: Scalars['Date']['input'];
};

export type CreateExperienceInput = {
  company: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  location: Scalars['String']['input'];
  points: Array<Scalars['String']['input']>;
  /** Array of skill IDs */
  skillIds: Array<Scalars['Int']['input']>;
  startDate: Scalars['Date']['input'];
  title: Scalars['String']['input'];
};

export type CreateProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  points: Array<Scalars['String']['input']>;
  /** Array of skill IDs */
  skillIds: Array<Scalars['Int']['input']>;
  startDate: Scalars['Date']['input'];
  title: Scalars['String']['input'];
  website?: InputMaybe<Scalars['String']['input']>;
};

export type Education = {
  __typename?: 'Education';
  courses: Array<Scalars['String']['output']>;
  degree: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Int']['output'];
  institution: Scalars['String']['output'];
  location: Scalars['String']['output'];
  points: Array<Scalars['String']['output']>;
  skills: Array<Skill>;
  startDate: Scalars['Date']['output'];
  user: User;
};

export type Experience = {
  __typename?: 'Experience';
  company: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['Int']['output'];
  location: Scalars['String']['output'];
  points: Array<Scalars['String']['output']>;
  skills: Array<Skill>;
  startDate: Scalars['Date']['output'];
  title: Scalars['String']['output'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEducation: Education;
  createExperience: Experience;
  createProject: Project;
  createSkill: Skill;
  deleteEducation: Scalars['Boolean']['output'];
  deleteExperience: Scalars['Boolean']['output'];
  deleteProject: Scalars['Boolean']['output'];
  /** Returns a JWT token of the logged in user */
  login: Scalars['String']['output'];
  /** Returns a JWT token of the created user's session */
  signup: Scalars['String']['output'];
  updateEducation: Education;
  updateExperience: Experience;
  updateProject: Project;
  updateUser: User;
};


export type MutationCreateEducationArgs = {
  input: CreateEducationInput;
};


export type MutationCreateExperienceArgs = {
  input: CreateExperienceInput;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationCreateSkillArgs = {
  name: Scalars['String']['input'];
};


export type MutationDeleteEducationArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteExperienceArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationUpdateEducationArgs = {
  input: UpdateEducationInput;
};


export type MutationUpdateExperienceArgs = {
  input: UpdateExperienceInput;
};


export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Project = {
  __typename?: 'Project';
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  icon?: Maybe<ProjectIconType>;
  id: Scalars['Int']['output'];
  points: Array<Scalars['String']['output']>;
  skills: Array<Skill>;
  startDate: Scalars['Date']['output'];
  title: Scalars['String']['output'];
  user: User;
  website?: Maybe<Scalars['String']['output']>;
};

export enum ProjectIconType {
  Github = 'GITHUB'
}

export type Query = {
  __typename?: 'Query';
  autocompleteSkills: Array<Skill>;
  education?: Maybe<Education>;
  educations: Array<Education>;
  experience?: Maybe<Experience>;
  experiences: Array<Experience>;
  project?: Maybe<Project>;
  projects: Array<Project>;
  skill?: Maybe<Skill>;
  user: User;
};


export type QueryAutocompleteSkillsArgs = {
  query: Scalars['String']['input'];
};


export type QueryEducationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryExperienceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProjectArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySkillArgs = {
  id: Scalars['Int']['input'];
};

export type Skill = {
  __typename?: 'Skill';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type UpdateEducationInput = {
  courses?: InputMaybe<Array<Scalars['String']['input']>>;
  degree?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['Int']['input'];
  institution?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Array of skill IDs */
  skillIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateExperienceInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['Int']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Array of skill IDs */
  skillIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['Int']['input'];
  points?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Array of skill IDs */
  skillIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  github?: InputMaybe<Scalars['String']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  skillIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  educations: Array<Education>;
  email?: Maybe<Scalars['String']['output']>;
  experiences: Array<Experience>;
  github?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  linkedin?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  projects: Array<Project>;
  skills: Array<Skill>;
  website?: Maybe<Scalars['String']['output']>;
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: string };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;