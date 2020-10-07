import { ApolloError } from "@apollo/client"
import { action } from "mobx"
import {
  StatesQuery,
  useStatesQuery,
} from "../../../data/graphql/generated/graphql"

import { RootStore } from "./../rootStore"

export default class CountriesStore {
  public rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @action getStates = (): {
    loading: boolean
    error: ApolloError
    data: StatesQuery
  } => {
    const { loading, error, data } = useStatesQuery({ variables: {} })
    return { loading, error, data }
  }
}
