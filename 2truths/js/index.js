let fname = "";
let lname = "";
let age = 0;


// function to get info from intro form


function greet(){
    let greetText = document.getElementById("greet");

    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    age = document.getElementById("age").value;

    if (fname === "" || lname === "") {
        alert("Make sure you fill in both your first and last name");
        return;
    }
    if (age < 1 || age > 100 || age === ""){
        alert("Please put a valid age");
        return;
    }
    greetText.innerHTML = "Hello, " + fname + " " + lname + "!";

}

function triviaOne(){
    let ans = document.querySelectorAll("#trivia1 input")
    let ansText = document.getElementById("trivia1-ans");
    console.log(ans);
    if (ans[1].checked){
        ansText.innerHTML = "That is correct, " + fname+"!";
        return;
    }
    if (ans[0].checked){
        ansText.innerHTML = "Choclate can go bad!";
        return;
    }
    if (ans[2].checked){
        ansText.innerHTML = "You stupid.";
    }
}

function truthLieGame(){
    let ans = document.querySelectorAll("#truths input")
    let ansText = document.getElementById("trivia2-ans");
    console.log(ans);
    if (ans[1].checked){
        ansText.innerHTML = "That is correct! " + "I do not have a middle name!";
        return;
    }
    if (ans[0].checked){
        ansText.innerHTML = "Choclate can go bad!";
        return;
    }
    if (ans[2].checked){
        ansText.innerHTML = "In fact, in elementry school I took lessons for a year!";
    }
}