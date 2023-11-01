import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup,
  auth, provider, db, addDoc, collection, getDocs, onSnapshot, orderBy, query,
  updateDoc, arrayUnion, arrayRemove, doc, getDoc,
} from './firebase.js';

export { auth, db, doc };

const postCollection = collection(db, 'posts');

// Función que redirecciona al acceso con Google
export function callLoginGoogle() {
  return signInWithPopup(auth, provider);
}

// Función que crea un nuevo usuario con firebase y utiliza email y password
export function submitNewUserInfo(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Función que hace log in con email y password con firebase
export function submitUserInfo(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export const addPost = (message, postType, userID) => {
  addDoc(postCollection, {
    message,
    postType,
    usuario: userID,
    likes: {},
    date: Date.now(),
  });
};

// Función para poder traer los post de la base de datos
export const querySnapshot = getDocs(postCollection);

export const q = query(postCollection, orderBy('date', 'desc'));

// Función para poder ver la data en tiempo real
export const renderRealTime = (callback) => onSnapshot(q, callback);

// Función para agregar los likes en los comentarios

export const addLike = (docRef, userID) => {
  getDoc(docRef)
    .then(() => {
      if (doc.exists) {
      // Obtiene el array actual de UIDs (si existe)
        const likes = docRef.data().likes || [];
        console.log(likes);

        // Verifica si el UID del usuario ya está en el array
        if (!likes.includes(userID)) {
        // Agrega el UID del usuario al array utilizando arrayUnion
          updateDoc(docRef, {
            likes: arrayUnion(userID),
          })
            .then(() => {
              console.log('UID del usuario agregado al array con éxito.');

              // Verifica el número de usuarios que han dado click
              const numClicks = likes.length + 1;
              console.log(`Número de usuarios que han dado click: ${numClicks}`);
            })
            .catch((error) => {
              console.error('Error al agregar el UID al array:', error);
            });
        } else {
          console.log('El usuario ya ha dado click.');
        }
      } else {
        console.log('El documento no existe.');
      }
    })
    .catch((error) => {
      console.error('Error al obtener el documento:', error);
    });
};
