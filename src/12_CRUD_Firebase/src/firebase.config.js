// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.4.3/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/8.4.3/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// export const firebaseConfig = {
//     apiKey: "AIzaSyBWpkUxBWHd7DS271Owjta8zhMfORTU8t0",
//     authDomain: "belajar-react-7f39a.firebaseapp.com",
//     projectId: "belajar-react-7f39a",
//     storageBucket: "belajar-react-7f39a.appspot.com",
//     messagingSenderId: "247238482858",
//     appId: "1:247238482858:web:d54f3bc0c487a05bb369d3",
//     measurementId: "G-PL27Y5XE2F"
// };
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-analytics.js"></script>

// <script>
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>
// import firebase from "firebase/app";
// import "firebase/auth";

// export const firebaseConfig = {
//     apiKey: "AIzaSyCbPAeNb2QPYunyF3d0ndQJmrNXOoVEUXg",
//     authDomain: "fir-74c5d.firebaseapp.com",
//     projectId: "fir-74c5d",
//     storageBucket: "fir-74c5d.appspot.com",
//     messagingSenderId: "1065684990717",
//     appId: "1:1065684990717:web:d58af58b7ed8ef91395c94",
//     measurementId: "G-WW2V5J25M0"
// };
// export const myFirebase = firebase.initializeApp(firebaseConfig);

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export const firebaseConfig = {
    apiKey: "AIzaSyCbPAeNb2QPYunyF3d0ndQJmrNXOoVEUXg",
    authDomain: "fir-74c5d.firebaseapp.com",
    databaseURL: "https://fir-74c5d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-74c5d",
    storageBucket: "fir-74c5d.appspot.com",
    messagingSenderId: "1065684990717",
    appId: "1:1065684990717:web:d58af58b7ed8ef91395c94",
    measurementId: "G-WW2V5J25M0"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
export const DB = firebase.database();