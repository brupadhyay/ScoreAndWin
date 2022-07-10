
// while(cnt--){
//     alert("To play this game you need to refresh each time. Let's Go!");
// }

var randomNumber1 = Math.floor(Math.random()*6 + 1 );

var randomNumber2 = Math.floor(Math.random()*6 + 1 );

let src1 = document.querySelector(".img1");
switch(randomNumber1){
    case 1: src1.src = "images/dice1.png";
            break;

    case 2: src1.src = "images/dice2.png";
            break;
            
    case 3: src1.src = "images/dice3.png";
            break;

    case 4: src1.src = "images/dice4.png";
            break;

    case 5: src1.src = "images/dice5.png";
            break;

    case 6: src1.src = "images/dice6.png";
            break;
}
let src2 = document.querySelector(".img2");
switch(randomNumber2){
    case 1: src2.src = "images/dice1.png";
            break;

    case 2: src2.src = "images/dice2.png";
            break;
            
    case 3: src2.src = "images/dice3.png";
            break;

    case 4: src2.src = "images/dice4.png";
            break;

    case 5: src2.src = "images/dice5.png";
            break;

    case 6: src2.src = "images/dice6.png";
            break;
}

//changing images as per user clicks ..Xd inko kya hi pata hai clickbait horha hai
/*
document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");

document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");*/

//conditions for win, lose and draw
if( randomNumber1 > randomNumber2 ){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if( randomNumber1 < randomNumber2 ){ 
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}else if(randomNumber1 === randomNumber2 ){
    document.querySelector("h1").innerHTML = "Draw!";
}else{
    document.querySelector("h1").innerHTML = "Refresh Me";
}


