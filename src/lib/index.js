import {
  db, collection, addDoc, getDocs, onSnapshot, query, orderBy,
} from '../firestore.js';

const postCollection = collection(db, 'posts');

export const addPost = (comment) => {
  addDoc(postCollection, {
    comment,
    date: Date.now(),
  });
};

export const querySnapshot = getDocs(postCollection);

const q = query(postCollection, orderBy('date', 'desc'));

export const paintRealTime = (callback) => onSnapshot(q, callback);
