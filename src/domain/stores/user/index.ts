import { action } from "mobx"
import firebaseClient from "../../../data/firebase/firebaseClient"

import { RootStore } from "./../rootStore"

export default class UserStore {
  public rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @action login = async (
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> => {
    return await firebaseClient.login(email, password)
  }

  @action logout = async (): Promise<void> => {
    await firebaseClient.logout()
  }
}
