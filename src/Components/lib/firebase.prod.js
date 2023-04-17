import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
 import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCrGmKVIuYTzxMMPwaBB7ErwqyB9dvTRkc",
    authDomain: "movie-hub-ac15b.firebaseapp.com",
    projectId: "movie-hub-ac15b",
    storageBucket: "movie-hub-ac15b.appspot.com",
    messagingSenderId: "874529904776",
    appId: "1:874529904776:web:a29b2edc2139126976673d",
    measurementId: "G-3TFVP9WMRZ"
  };

  const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
 seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export { firebase };