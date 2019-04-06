import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyBixgyH-GSJ7Lc7eZuULx1mYkgqflmg52g",
    authDomain: "saratovair-d566b.firebaseapp.com",
    databaseURL: "https://saratovair-d566b.firebaseio.com",
    projectId: "saratovair-d566b",
    storageBucket: "saratovair-d566b.appspot.com",
    messagingSenderId: "466694940801",
});

export const db = app.database();
export const sensorsRef = db.ref('SensorID');

