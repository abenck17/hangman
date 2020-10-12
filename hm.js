console.log("issa me a working")

let randomWords = ['Truck', 'Taco', 'Wrap', 'Ball', 'Meat']; // list of random words to pull from for the game
let selectedWords = ''; // variable to store randomWord selected
let livesLeft = 7; // numbers of lives user has left until they lose
let usedLetters = []; // stores the letters that failed for the user 
userInputs = document.querySelector("#userInputs");
spanAll = document.querySelectorAll("#useerInputs .spanHolder");

// let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] 

letterClick = document.querySelectorAll("li");
actualLetters = document.querySelectorAll(".alph")
resetGame = document.querySelector("#resetButton");

console.log(actualLetters)

function hangman() {
    this.randomWords;
    this.selectedWords;
    this.livesLeft;
    this.usedLetters;
} 

// letter clicks

letterClick.forEach(function pickLetter(let) {

    let.addEventListener('click', function() {
         console.log(let);   
    }) 
})

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
    let newWord = '';
    
    for (i=0; i < selectedWords.length; i++) {
        newWord = selectedWords.charAt(i) + " "
        
        let newDiv = document.createElement("div")
            newDiv.setAttribute("class", "spanHolder")
        let newSpan = document.createElement("span");
        newSpan.innerHTML = newWord;
        newDiv.appendChild(newSpan);
        userInputs.appendChild(newDiv);
    }
    console.log(userInputs);
    console.log(spanAll);
}
assignRandomWord();


// // function to pick letters in game 

function userPicksLetter(letter) {
   pickRandomWord();
   assignRandomWord();

    letter = '';

    for (let i = 0; i < selectedWords.length; i++) {
    if (this.usedLetters.indexOf(letter) > -1) {
        return;
      }
        this.usedLetters.push(letter);
    
    
    if (this.selectedWords.indexOf(letter) > -1) {
        console.log("user got one right");
    } else {
        this.livesLeft -= 1;
        alert("Ouch.. You have lost one life")
    }    
}
}

// userPicksLetter(a);


// userPicksLetter(); // still getting error: Uncaught TypeError: Cannot read property 'indexOf' of undefined @js26
// console.log(usedLetters);





