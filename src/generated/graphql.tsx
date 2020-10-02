import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  continents: Array<Continent>;
  continent?: Maybe<Continent>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  languages: Array<Language>;
  language?: Maybe<Language>;
};


export type QueryContinentsArgs = {
  filter?: Maybe<ContinentFilterInput>;
};


export type QueryContinentArgs = {
  code: Scalars['ID'];
};


export type QueryCountriesArgs = {
  filter?: Maybe<CountryFilterInput>;
};


export type QueryCountryArgs = {
  code: Scalars['ID'];
};


export type QueryLanguagesArgs = {
  filter?: Maybe<LanguageFilterInput>;
};


export type QueryLanguageArgs = {
  code: Scalars['ID'];
};

export type ContinentFilterInput = {
  code?: Maybe<StringQueryOperatorInput>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type Continent = {
  __typename?: 'Continent';
  code: Scalars['ID'];
  name: Scalars['String'];
  countries: Array<Country>;
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['ID'];
  name: Scalars['String'];
  native: Scalars['String'];
  phone: Scalars['String'];
  continent: Continent;
  capital?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  languages: Array<Language>;
  emoji: Scalars['String'];
  emojiU: Scalars['String'];
  states: Array<State>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  native?: Maybe<Scalars['String']>;
  rtl: Scalars['Boolean'];
};

export type State = {
  __typename?: 'State';
  code?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  country: Country;
};

export type CountryFilterInput = {
  code?: Maybe<StringQueryOperatorInput>;
  currency?: Maybe<StringQueryOperatorInput>;
  continent?: Maybe<StringQueryOperatorInput>;
};

export type LanguageFilterInput = {
  code?: Maybe<StringQueryOperatorInput>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type StatesQueryVariables = Exact<{ [key: string]: never; }>;


export type StatesQuery = (
  { __typename?: 'Query' }
  & { country?: Maybe<(
    { __typename?: 'Country' }
    & { states: Array<(
      { __typename?: 'State' }
      & Pick<State, 'name'>
    )> }
  )> }
);


export const StatesDocument = gql`
    query States {
  country(code: "US") {
    states {
      name
    }
  }
}
    `;

/**
 * __useStatesQuery__
 *
 * To run a query within a React component, call `useStatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useStatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useStatesQuery(baseOptions?: Apollo.QueryHookOptions<StatesQuery, StatesQueryVariables>) {
        return Apollo.useQuery<StatesQuery, StatesQueryVariables>(StatesDocument, baseOptions);
      }
export function useStatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StatesQuery, StatesQueryVariables>) {
          return Apollo.useLazyQuery<StatesQuery, StatesQueryVariables>(StatesDocument, baseOptions);
        }
export type StatesQueryHookResult = ReturnType<typeof useStatesQuery>;
export type StatesLazyQueryHookResult = ReturnType<typeof useStatesLazyQuery>;
export type StatesQueryResult = Apollo.QueryResult<StatesQuery, StatesQueryVariables>;