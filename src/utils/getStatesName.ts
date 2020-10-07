import { State } from "../data/graphql/generated/graphql"

export const getStatesName = (
  states: ({ __typename?: "State" } & Pick<State, "name">)[]
) => {
  return Object.values(states).map((el) => el.name)
}
