import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB8DBSvDN_5foTY5A-KV6FL3qVGLaSV90k",
    authDomain: "hardrigth.firebaseapp.com",
    databaseURL: "https://hardrigth.firebaseio.com",
    projectId: "hardrigth",
    storageBucket: "hardrigth.appspot.com",
    messagingSenderId: "399727334615",
    appId: "1:399727334615:web:a3ba6d4792a8621f5acc92"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    googleAuthProvider,
    firebase
}