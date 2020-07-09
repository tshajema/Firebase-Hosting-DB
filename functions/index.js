

const functions = require('firebase-functions');
const express = require('express');
const engines = require('consolidate');
var hbs = require('handlebars');
const admin = require('firebase-admin');

//window.document.write('<script type="text/javascript" src="https://www.gstatic.com/firebasejs/4.1.3/firebase.js" ></script>');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
// 
const app = express();
app.engine('hbs',engines.handlebars);
app.set('views','./views');
app.set('view engine','hbs');

// var serviceAccount = require("./yetu-festival-firebase-adminsdk-25m4y-fd23dc812f.json");
// admin.initializeApp({
// credential: admin.credential.cert(serviceAccount),
// databaseURL: "https://yetu-festival.firebaseio.com"
// });

admin.initializeApp(functions.config().firebase);

async function getFirestore(){
    const firestore_con  = await admin.firestore();
    const writeResult = firestore_con.collection('topImage').doc('url').get().then(doc => {
    if (!doc.exists) { console.log('No such document!'); }
    else {return doc.data();}})
    .catch(err => { console.log('Error getting document', err);});
    return writeResult
}

app.get('/',async (request,response) =>{
    var db_result = await getFirestore();
    response.render('index',{db_result});
});

app.get('/login', (request, response) => {
    response.render('login');
});

app.get('/admin', (request, response) => {
    response.render('admin');
});

exports.app = functions.https.onRequest(app);