import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDEmofPESfSb1CNhUNtv-2m_LumJZE4szc",
    authDomain: "safety-hub-f4b3e.firebaseapp.com",
    databaseURL: "https://safety-hub-f4b3e-default-rtdb.firebaseio.com",
    projectId: "safety-hub-f4b3e",
    storageBucket: "safety-hub-f4b3e.appspot.com",
    messagingSenderId: "108025780687",
    appId: "1:108025780687:web:1704a442bfcf4e707f9aba",
    measurementId: "G-CXWC75TE78"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

export default app