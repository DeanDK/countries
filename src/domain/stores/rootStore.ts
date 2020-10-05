import { createContext } from "react"
import { configure } from "mobx"

import UserStore from "./user"

configure({ enforceActions: "always" })

export class RootStore {
  userStore: UserStore
  constructor() {
    this.userStore = new UserStore(this)
  }
}

export const RootStoreContext = createContext(new RootStore())
