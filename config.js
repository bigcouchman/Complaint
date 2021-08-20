import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyA9Fg6xi3SriGYatuU6SusnYLsVjYhPqg0",
  authDomain: "complaintapp-29def.firebaseapp.com",
  databaseURL: "https://complaintapp-29def-default-rtdb.firebaseio.com",
  projectId: "complaintapp-29def",
  storageBucket: "complaintapp-29def.appspot.com",
  messagingSenderId: "254515357047",
  appId: "1:254515357047:web:360e935fd9d248f8dfed72"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

