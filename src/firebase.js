import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDEvtUVNxyOkUr8jwoJ3ngj-iqwnRCaayA",
  authDomain: "netflix-clone-yt-d571f.firebaseapp.com",
  projectId: "netflix-clone-yt-d571f",
  storageBucket: "netflix-clone-yt-d571f.appspot.com",
  messagingSenderId: "235759171579",
  appId: "1:235759171579:web:365c7595bf82578b55bd5e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
