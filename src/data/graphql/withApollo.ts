import { createWithApollo } from "./createWithApollo"
import { ApolloClient, InMemoryCache } from "@apollo/client"

const createClient = () =>
  new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL as string,
    cache: new InMemoryCache(),
  })

export const withApollo = createWithApollo(createClient)
