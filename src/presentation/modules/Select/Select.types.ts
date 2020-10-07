import { StatesQuery } from "../../../data/graphql/generated/graphql"
import { ApolloError } from "@apollo/client"

export type Props = {
  loading: boolean
  error: ApolloError
  data: StatesQuery
}
