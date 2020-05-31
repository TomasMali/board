
importScripts('https://www.gstatic.com/firebasejs/7.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.0.0/firebase-messaging.js');




firebase.initializeApp({
    apiKey: "AIzaSyDM7spvYY1kp161h9tkKo252jxQRP5Qp6Y",
    authDomain: "fir-41a1a.firebaseapp.com",
    databaseURL: "https://fir-41a1a.firebaseio.com",
    projectId: "fir-41a1a",
    storageBucket: "fir-41a1a.appspot.com",
    messagingSenderId: "1094512966870",
    appId: "1:1094512966870:web:730f238cc2b81135821d77",
    measurementId: "G-F8KHFMY77W"
});
const messaging = firebase.messaging();