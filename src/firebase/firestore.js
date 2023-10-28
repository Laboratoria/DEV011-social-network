import { getFirestore,collection } from 'firebase/firestore';
import { app } from './firebase-config.js';
import { addDoc, doc, setDoc } from "firebase/firestore";

export const db = getFirestore(app);

export const allPosts = collection(db, 'posts');


export async function guardarPost (allPosts = allPosts, inputLogin){  //función que garda el post
    await addDoc(allPosts, {
        usuario: "Dani",
        post: "Holi!",
        input: inputLogin 
    })
}







// Agregar un nuevo documento a la colección
/* const postsElements = await addDoc(allPosts, { /* datos del documento  });

await setDoc(doc(db, "posts", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  });

  const cityRef = doc(db, 'cities', 'BJ');
  setDoc(cityRef, { capital: true }, { merge: true });
   */




























/* async function insertDB(item){
    try{
        const response = await db.collection('Users').add(item);
        return response;
    }catch(error){
        throw new Error(error);
    }
}

export async function insertInfoNewUserDB (alias, email, password){
    try{
        const newUser = {
            'alias': alias,
            'email': email,
            'password': password,
        }
        return response = await insertDB(newUser)
    }catch(error){}
}
 */