var randonNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randonNumber1 +".png";
var randonImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randonImageSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 +".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randonNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randonNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}

