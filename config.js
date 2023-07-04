
const firebase = require("firebase");
const firebaseConfig = {
// google data
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const User = db.collection("Users");

module.exports = User;
