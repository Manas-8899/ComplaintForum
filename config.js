import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCePs9gGkCTNHCbUOd2y_s0gWi75AYI4SY",
  authDomain: "complaintforum-169da.firebaseapp.com",
  projectId: "complaintforum-169da",
  storageBucket: "complaintforum-169da.appspot.com",
  messagingSenderId: "992918288847",
  appId: "1:992918288847:web:90591f5a9bc973585efaba"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

