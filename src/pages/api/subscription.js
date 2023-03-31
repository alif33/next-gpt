import  { db } from "../../config/firebase";
import { collection, doc, setDoc } from "firebase/firestore"

export default async function login(req, res) {
    try {
        const data = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            age: 30
          }

        const newCityRef = doc(collection(db, "subscriptions"));

        await setDoc(newCityRef, data);
        // collection(db, 'users').add()
        //   .then((docRef) => {
        //     console.log('Document written with ID: ', docRef.id);
        //   })
        //   .catch((error) => {
        //     console.error('Error adding document: ', error);
        //   });
       

    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  }