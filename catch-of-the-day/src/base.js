import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBERJeu7RGqcbLGHEOfXci0IpuSu41wZmA",
    authDomain: "catch-of-the-day----adfn.firebaseapp.com",  
    databaseURL: "https://catch-of-the-day----adfn-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;