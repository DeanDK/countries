import firebase from "firebase"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
}
export class Firebase {
  private readonly auth: firebase.auth.Auth
  private _user: firebase.auth.UserCredential

  get user(): firebase.auth.UserCredential {
    return this._user
  }

  set user(value: firebase.auth.UserCredential) {
    this._user = value
  }

  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }
    this.auth = firebase.auth()
  }

  public async register(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  public async login(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  public logout(): Promise<void> {
    return this.auth.signOut()
  }

  public getUser(): firebase.User {
    return this.auth.currentUser
  }

  public onAuthStateChanged() {
    return this.auth.onAuthStateChanged
  }
}

const firebaseClient = new Firebase()

export default firebaseClient
