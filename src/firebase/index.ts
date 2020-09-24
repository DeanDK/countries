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

class Firebase {
  private readonly auth: firebase.auth.Auth

  private readonly db: firebase.firestore.Firestore

  constructor() {
    firebase.initializeApp(firebaseConfig)
    this.auth = firebase.auth()
    this.db = firebase.firestore()
  }

  async register(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  login(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  logout(): Promise<void> {
    return this.auth.signOut()
  }
}

export default new Firebase()
