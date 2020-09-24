import { onError } from "apollo-link-error"
import { createHttpLink } from "apollo-link-http"
import { promiseToObservable } from "./promiseToObservable"
import { isServer } from "./isServer"
import { from } from "apollo-link"
import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
} from "@apollo/client"

let apolloClient: ApolloClient<NormalizedCacheObject>

export const createApolloClient = () => {
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_SERVER,
    fetch: require("isomorphic-fetch").default,
    credentials: "same-origin",
  })

  const errorLink = onError((errorHandler) => {
    const { graphQLErrors, networkError } = errorHandler

    if (process.env.NODE_ENV !== "production") {
      // tslint:disable-next-line:no-console
      graphQLErrors &&
        console.error("[GraphQLError] GraphQL error occurred: ", graphQLErrors)
      // tslint:disable-next-line:no-console
      networkError &&
        console.error("[NetworkError] GraphQL error occurred: ", networkError)
    }

    if (networkError && "statusCode" in networkError) {
      if (networkError.statusCode === 401) {
        const promises = Promise.all([
          apolloClient && apolloClient.cache.reset(),
        ])

        return promiseToObservable(promises).flatMap(() =>
          errorHandler.forward(errorHandler.operation)
        )
      }
    }
  })

  return new ApolloClient({
    connectToDevTools: !isServer(),
    defaultOptions: {
      query: {
        errorPolicy: "all",
      },
    },
    ssrMode: isServer(),
    link: from([errorLink, httpLink]) as any,
    cache: new InMemoryCache(),
  })
}
