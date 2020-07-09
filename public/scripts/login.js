

const Config = {
    apiKey: "AIzaSyDV6MMIv0AUmOG_DsuitiOhZvrh85b4dWA",
    authDomain: "yetu-festival.firebaseapp.com",
    databaseURL: "https://yetu-festival.firebaseio.com",
    projectId: "yetu-festival",
    storageBucket: "yetu-festival.appspot.com",
    messagingSenderId: "969603133155",
    appId: "1:969603133155:web:c36a5a88a9c5b595c2dfd6",
    measurementId: "G-8FG0QQRPR6"
  };

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location("/admin")
    } else {
        window.location("/login")
    }
});
  
function login(){
    const email = document.getElementById("user_email").value;
    const password = document.getElementById("user_password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
    window.alert("Error" + errorMessage);

    });

} 


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.alert(user);
        window.alert("should not redirect");
        //window.location.href = "/admin";
    } else {
        window.alert("supposed to fail");
        //window.location.href = "/login";
    }
});