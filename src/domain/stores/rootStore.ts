import { createContext } from "react"
import { configure } from "mobx"

import UserStore from "./user"
import CountriesStore from "./countries"

configure({ enforceActions: "always" })

export class RootStore {
  userStore: UserStore
  countriesStore: CountriesStore

  constructor() {
    this.userStore = new UserStore(this)
    this.countriesStore = new CountriesStore(this)
  }
}

export const RootStoreContext = createContext(new RootStore())
