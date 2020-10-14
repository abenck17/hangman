
let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let clickCounter = 0;
let newDiv;
let newSpan;
let newSpanClass = document.querySelector("#userInputs .spanHolder");
let livesLeft = 7; // numbers of lives user has left until they lose
let randomWords = ['pumpkin', 'death', 'witch', 'ghost', 'bat', 'blood', 'broom', 'cauldron', 'cemetary', 'coffin', 'mummy', 'vampire', 'werewolf', 'wicked', 'zombie']; // list of random words to pull from for the game
let selectedWords = ''; // variable to store randomWord selected
let wonGameCounter = 0;
const useThis = [] // creating blank array globally - to be able to call this array from any function / works with each game instance 

actualLetters = document.querySelectorAll(".alph")
letterClick = document.querySelectorAll("li");
resetGame = document.querySelector("#resetButton");
spanAll = document.querySelectorAll("#userInputs span");
userInputs = document.querySelector("#userInputs");
usedP = document.querySelector("p");

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

function assignRandomWord() {
    pickRandomWord();
    console.log(selectedWords)
    let newWord;
    for (i=0; i < selectedWords.length; i++) {
        newWord = selectedWords.charAt(i);
        useThis.push(newWord); // adding random word letters to useThis array
        newDiv = document.createElement("div")
            newDiv.setAttribute("class", "spanHolder")
        newSpan = document.createElement("span");
            newSpan.setAttribute("class", newWord);
        newSpan.style.visibility = "hidden";
        newSpan.innerHTML = newWord;
        newDiv.appendChild(newSpan);
        userInputs.appendChild(newDiv);
    }
}

// // function to pick letters in game
function userPicksLetter() {
   pickRandomWord();
   assignRandomWord();
   usedLetters = []; // stores the letters that failed for the user // moved in from top of code
    
    letterClick.forEach(function pickLetter(let) {
    let.addEventListener('click', function() {
        var alpha = let.innerHTML
        console.log(alpha)
        clickCounter = alphabet.indexOf(alpha); 
    if (usedLetters.indexOf(alpha) > -1) {
        return;
      }

    usedLetters.push(alpha); // need to show in usedletters box
    usedP.innerHTML = usedLetters.toString();
    letterClick[clickCounter].style.color = "black"
    let spanLetter = document.getElementsByTagName("span");

    for (i = 0; i < useThis.length; i++) {
        if (spanLetter[i].innerHTML == alpha) {
            spanLetter[i].style.visibility = "visible";
            wonGameCounter += 1;
        }  
    }
    
    if (wonGameCounter === useThis.length) {
        alert("YOU HAVE WON THE GAME!! Reset Game to play again!")
        // window.location.reload();
        document.getElementById("alphabet").style.visibility = "hidden";
    } 
    
    if (useThis.indexOf(alpha) > -1) { // not working with first letter ?
        console.log("user got one right");
    } else {
        livesLeft -= 1;
        alert(`Ouch.. You have lost one life. You know have ${livesLeft} lives left`);
    }
    
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
        alert ("BOOO, YOU LOSE. RESET GAME TO TRY AGAIN");
        document.getElementById("alphabet").style.visibility = "hidden";
     }
})
})
}

userPicksLetter();
