let randomnumber1 = Math.floor(Math.random() * 6) + 1
let randomDiceImageSrc1 = (`images/dice${randomnumber1}.png`)
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImageSrc1)


let randomnumber2 = Math.floor(Math.random() * 6) + 1
var randomDiceImageSrc2 = (`images/dice${randomnumber2}.png`)
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImageSrc2)


if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!"
}
else document.querySelector("h1").innerHTML = "Draw"


//For page getting refresh
document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        location.reload();
    }
});