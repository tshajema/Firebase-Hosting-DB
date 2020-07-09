console.log("reached js block");

var firebaseConfig = {
apiKey: "AIzaSyDV6MMIv0AUmOG_DsuitiOhZvrh85b4dWA",
authDomain: "yetu-festival.firebaseapp.com",
databaseURL: "https://yetu-festival.firebaseio.com",
projectId: "yetu-festival",
storageBucket: "yetu-festival.appspot.com",
messagingSenderId: "969603133155",
appId: "1:969603133155:web:c36a5a88a9c5b595c2dfd6",
measurementId: "G-8FG0QQRPR6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

database = firebase.database();
var topref = database.ref().child('topImage');
var bootomref = database.ref().child('bottomImage');

console.log("reached here now");
//console.log(ref);
topref.on('value', gottopData, errtopData);
bootomref.on('value', gotbottomData, errbottomData);

function gottopData(data){
    var value = Object.values(data.val());
    var topImgUrl = value[1];

    document.getElementsByClassName("image-banner-drinks")[0].setAttribute('src',topImgUrl)
    console.log(topImgUrl);
}

function errtopData(err){
    console.log(err);
}


function gotbottomData(data){
    var value = Object.values(data.val());
    var bottomImgUrl = value[1];
    document.getElementsByClassName("image-banner-food")[0].setAttribute('src',bottomImgUrl)
    console.log(bottomImgUrl);
}

function errbottomData(err){
    console.log(err);
}

$(document).ready(function(){
    setTimeout(showPopup,60000)
});

function showPopup()
{
    swal("Hello there!", "To continue watching the video, you are required to pay Ksh 10", "info");
}