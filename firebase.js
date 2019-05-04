import data from "firebase/app";
import "firebase/firestore";
import 'firebase/storage'



const config = {
    apiKey: "AIzaSyCGE7G5Rkv-BnXdQ21YwcWXtjKzFG7JGf0",
    authDomain: "fitness-app-27395.firebaseapp.com",
    databaseURL: "https://fitness-app-27395.firebaseio.com",
    projectId: "fitness-app-27395",
    storageBucket: "fitness-app-27395.appspot.com",
    messagingSenderId: "63070060026"
  };

 export var firebase= data.initializeApp(config);
 
export var db = firebase.firestore()
 export  var storage = firebase.storage()

  