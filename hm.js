console.log("issa me a working")

let randomWords = ['truck', 'taco', 'wrap', 'ball', 'meat']; // list of random words to pull from for the game
let selectedWords = ''; // variable to store randomWord selected
let livesLeft = 7; // numbers of lives user has left until they lose
userInputs = document.querySelector("#userInputs");
usedP = document.querySelector("p");
spanAll = document.querySelectorAll("#userInputs .spanHolder");
console.log(usedP) // need to pull span letters
console.log(spanAll)

// let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] 

letterClick = document.querySelectorAll("li");
actualLetters = document.querySelectorAll(".alph")
resetGame = document.querySelector("#resetButton");

console.log(letterClick[0].innerHTML)

function hangman() {
    this.randomWords;
    this.selectedWords;
    this.livesLeft;
    this.usedLetters;
} 

// reset game

resetButton.addEventListener('click', function resetGame(event) {
    event.preventDefault();
    window.location.reload();
    console.log("click works")
})



// function to pick random workd - utilize random() and floor() functions

function pickRandomWord() {
    selectedWords = randomWords[Math.floor(Math.random() * randomWords.length)];
}

// pickRandomWord(); // pulls a random word from randomWords
// console.log(selectedWords);

// function to assing random word 

function assignRandomWord() {
    pickRandomWord();
    console.log(selectedWords)
    let newWord;
    
    for (i=0; i < selectedWords.length; i++) {
        newWord = selectedWords.charAt(i);
        
        let newDiv = document.createElement("div")
            newDiv.setAttribute("class", "spanHolder")
        let newSpan = document.createElement("span");
        newSpan.innerHTML = newWord;
        newDiv.appendChild(newSpan);
        userInputs.appendChild(newDiv);
    }
    // console.log(userInputs);
    // console.log(spanAll);
}
// assignRandomWord();


// // function to pick letters in game 

function userPicksLetter() {
   pickRandomWord();
   assignRandomWord();
   usedLetters = []; // stores the letters that failed for the user // moved in from top of code 
    
// for (let i = 0; i < selectedWords.length; i++) {
   
    // letter clicks

    letterClick.forEach(function pickLetter(let) {

    let.addEventListener('click', function() {
        var alpha = let.innerHTML
        console.log(alpha)   

    if (usedLetters.indexOf(alpha) > -1) {
        return;
      }
    
    usedLetters.push(alpha); // need to show in usedletters box
    usedP.innerHTML = usedLetters.toString();
    
    // for (i=0; i < selectedWords.length; i++) {
    //     if (selectedWords.charAt(i) == alpa) {
    //         console.log("user got one right")
    //     }

    console.log(spanAll);
    if (selectedWords.indexOf(alpha) > -1) { // not working with first letter ? 
        console.log("user got one right");
        console.log(alpha)
    } else {
        livesLeft -= 1;
        alert("Ouch.. You have lost one life");  
    }
    console.log(usedLetters);
    console.log(livesLeft);

    // to get the skeleton to show 

    if (livesLeft == 6) {
       document.querySelector(".head1").style.visibility = 'visible';
    }
    else if (livesLeft == 5) {
        document.querySelector(".body2").style.visibility = 'visible';
     }
    else if (livesLeft == 4) {
        document.querySelector(".right-arm3").style.visibility = 'visible';
     }
    else if (livesLeft == 3) {
        document.querySelector(".left-arm4").style.visibility = 'visible';
     }
    else if (livesLeft == 2) {
        document.querySelector(".lowerbody5").style.visibility = 'visible';
     }
    else if (livesLeft == 1) {
        document.querySelector(".left-leg6").style.visibility = 'visible';
     }
    else if (livesLeft == 0) {
        document.querySelector(".right-leg7").style.visibility = 'visible';
        alert ("BOOO, YOU LOSE. RESET GAME TO TRY AGAIN")
     }

})
})


} 
// }

userPicksLetter();




// userPicksLetter(); // still getting error: Uncaught TypeError: Cannot read property 'indexOf' of undefined @js26
// console.log(usedLetters);





