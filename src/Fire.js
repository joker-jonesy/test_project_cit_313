import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBBWFksMq-UoWGBtrvoBfRgKNJeC_5Tsek",
    authDomain: "this-super-cool-project.firebaseapp.com",
    databaseURL: "https://this-super-cool-project.firebaseio.com",
    projectId: "this-super-cool-project",
    storageBucket: "this-super-cool-project.appspot.com",
    messagingSenderId: "339247267548",
    appId: "1:339247267548:web:c3c3539e21a4af81343e19",
    measurementId: "G-434KXK63NM"
};

const fire=firebase.initializeApp(firebaseConfig);

export default fire;