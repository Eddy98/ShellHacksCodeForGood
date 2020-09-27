import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAAgUtOHGKz2pyRiA8suOqgHmxxC-vyTVY',
  authDomain: 'shellhackscodeforgood.firebaseapp.com',
  databaseURL: 'https://shellhackscodeforgood.firebaseio.com',
  projectId: 'shellhackscodeforgood',
  storageBucket: 'shellhackscodeforgood.appspot.com',
  messagingSenderId: '798089780581',
  appId: '1:798089780581:web:22c37dde2f77122445d58c',
  measurementId: 'G-NJJZQLP8P4',
}

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)
    this.auth = app.auth()
    this.db = app.firestore()
  }

  //AUTHENTICATION
  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }
  logout() {
    return this.auth.signOut()
  }
  async register(email, firstName, lastName, phone, password) {
    await this.auth.createUserWithEmailAndPassword(email, password)
    await this.db
      .doc(`users/${this.auth.currentUser.uid}`)
      .set({ firstName, lastName, phone })
    return this.auth.currentUser.updateProfile({
      displayName: firstName,
      phoneNumber: phone,
    })
  }
  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve)
    })
  }
  getCurrentUsername() {
    if (this.auth.currentUser) return this.auth.currentUser.email
    else return ''
  }
  async getCurrentUserInfo() {
    const info = await this.db.doc(`users/${this.auth.currentUser.uid}`).get()

    return {
      firstName: info.get('firstName'),
      lastName: info.get('lastName'),
      phone: info.get('phone'),
      email: this.auth.currentUser.email,
    }
  }

  //POST EVENTS
  addEventToUser(event) {
    if (!this.auth.currentUser) {
      return alert('Not authorized')
    }

    return this.db
      .doc(`users/${this.auth.currentUser.uid}`)
      .update({ events: app.firestore.FieldValue.arrayUnion({ ...event }) })
  }
  addEvent(event) {
    return this.db.collection('events').add(event)
  }
  getEventById(eventID) {
    const e = this.db
      .doc(`events/${eventID}`)
      .get()
      .then((doc) => {
        return doc.data()
      })
    return e
  }
  async addUserToEvent(eventID, user) {
    await this.db.doc(`events/${eventID}`).update({ users: app.firestore.FieldValue.arrayUnion({ ...user }) })
  }

  //QUERIES
  async getEvents() {
    const events = await this.db.collection('events').get()
    let obj = []
    events.forEach((doc) => {
      obj.push({ ...doc.data(), id: doc.id })
    })
    return obj
  }
}

export default new Firebase()
