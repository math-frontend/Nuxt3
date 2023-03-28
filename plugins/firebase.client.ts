import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyBS3xyBUdy7fL1_6YfhiSbWi5htQ9Q6lm4",
  authDomain: "webwepro-73bb9.firebaseapp.com",
  projectId: "webwepro-73bb9",
  storageBucket: "webwepro-73bb9.appspot.com",
  messagingSenderId: "494531363154",
  appId: "1:494531363154:web:92e69c54c275dea61b3a8b",
  measurementId: "G-TZ9ZYEDJDT"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)
const analytics = getAnalytics(app)

export default defineNuxtPlugin(() => {
    return {
      provide: {
        auth,
        firestore,
        analytics
      }
    }
})

