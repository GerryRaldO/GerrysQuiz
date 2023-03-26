var button1Click = document.querySelector("#button1");
var button2Click = document.querySelector("#button2");
var button3Click = document.querySelector("#button3");
var button4Click = document.querySelector("#button4");
var highScore = document.querySelector("#hs");
var startQuiz = document.querySelector("#button5");
var secondsLeft = 60;
timerElement = document.querySelector('.timer-count');
var button1text = document.getElementById('button1text');
var questionText = document.getElementById('questionText');
var questionRight = 0;
var question = 0;
var answer = 0;
var hidden = document.getElementById("quiz");
var goBack = document.getElementById("return");
var timerWhole = document.querySelector('#timerWhole');
var initialsContainer = document.querySelector("#initialsContainer");
var submit = document.querySelector('#submit');
var highScoreText = document.querySelector('#highScoreText');
var initInput = document.querySelector('#initials');
var hiddenByHighScore = document.querySelector("#hiddenByHighScore");
var highScoreInitials = [];
var highScoreDisplayList = document.querySelector('#highScoreDisplayList')



//Starts by hiding the items I need hidden.

hiddenQuestions();
function hiddenQuestions() {
    initialsContainer.style.visibility = 'hidden'
    hidden.style.visibility = "hidden"
    timerWhole.style.visibility = 'hidden'
    goBack.style.visibility = "hidden"
    highScoreText.style.visibility = 'hidden'
}



// Change the state of items when I need to
function shownQuestions() {
    
    hidden.style.visibility = "visible"
    startQuiz.style.visibility = 'hidden'
    highScore.style.visibility = "hidden"
    timerWhole.style.visibility = "visible"
}
// Separate function to change the initalsContainer to visible
function initialsShown() {
    initialsContainer.style.visibility = 'visible'
}



// Starts the Quiz
startQuiz.addEventListener('click', startGame);

// Starts the Quiz and then displays a joke question.
function startGame() {
    shownQuestions();
    
    startTimer();
    questionText.textContent = 'Was this easy to code?'
    button1Click.textContent = 'Nope'
    button2Click.textContent = 'No' 
    button3Click.textContent = 'Nein' 
    button4Click.textContent = 'Nada'
    button1Click.addEventListener('click', questionOne);
    button2Click.addEventListener('click', questionOne);
    button3Click.addEventListener('click', questionOne);

    button4Click.addEventListener('click', questionOne);
    
    
}

// Question One.
function questionOne(event) {
    event.preventDefault();
    //Displays the Question.
    questionText.textContent = 'A _____ is a data type used in programming, that is used to represent text rather than numbers. '
    button1Click.textContent = 'String'
    button2Click.textContent = 'Banana' 
    button3Click.textContent = 'Pair of Dice' 
    button4Click.textContent = 'Number'
    button1Click.addEventListener('click', correctAnswer1)
    button2Click.addEventListener('click', incorrect1)
    button3Click.addEventListener('click', incorrect1)
    button4Click.addEventListener('click', incorrect1)
    //If correct. Add +1 to the rightQuestion
    function correctAnswer1(event) {
        event.stopPropagation();
        var answer = 'String';
        if (answer ===('String')) {
            questionRight++;
            questionTwo();
            console.log('Sa Dude')
            
        } 
    }
    //If incorrect subtracts 5 seconds from the time and goes to the next question
    function incorrect1(event) {
        event.stopPropagation();
        
        var answer = 'String';
        if (answer ===('String')) {
            secondsLeft--;
            secondsLeft--;
            secondsLeft--;
            secondsLeft--;
            secondsLeft--;
            questionTwo();
            console.log('Na Dude')
        }
    }
}

function questionTwo() {    
    questionText.textContent = 'The term _______ means a result that can only have one of two possible values: true or false. '
    button1Click.textContent = 'Number'
    button2Click.textContent = 'Binary' 
    button3Click.textContent = 'Shotty like a melody' 
    button4Click.textContent = 'Boolean'
    
    button1Click.addEventListener('click', incorrect2)
    button2Click.addEventListener('click', incorrect2)
    button3Click.addEventListener('click', incorrect2)
    button4Click.addEventListener('click', correctAnswer2)
    function correctAnswer2(event) {
        event.stopPropagation();
    //If correct. Add +1 to the rightQuestion
        var answer = 'Boolean';
        if (answer ===('Boolean')) {
            questionRight++;
            questionThree();
            console.log('Sa Dude')
            
        }
    }
    //If incorrect subtracts 5 seconds from the time and goes to the next question
    function incorrect2(event) {
        event.stopPropagation();

        var answer = 'String';
        if (answer ===('String')) {
            secondsLeft--;
            secondsLeft--;
            secondsLeft--;
            secondsLeft--;
            secondsLeft--;
            questionThree();
            console.log('Na Dude')
        }
    }
}



function questionThree() {
    
    questionText.textContent = 'In computing, a _______ is a specific set of ordered operations for a computer to perform. '
    button1Click.textContent = 'Book'
    button2Click.textContent = 'Apple' 
    button3Click.textContent = 'Program' 
    button4Click.textContent = 'Variable'
    
    button1Click.addEventListener('click', incorrect3)
    button2Click.addEventListener('click', incorrect3)
    button3Click.addEventListener('click', correctAnswer3)
    button4Click.addEventListener('click', incorrect3)
    function correctAnswer3(event) {
        event.stopPropagation();
//If correct. Add +1 to the rightQuestion
        var answer = 'Program';
        if (answer ===('Program')) {
            questionRight++;
            endGame();
            console.log('Sa Dude')
            
        }
    }
    //If incorrect subtracts 5 seconds from the time and goes to the next question
    function incorrect3(event) {
        event.stopPropagation();

        var answer = 'String';
        if (answer ===('String')) {
            secondsLeft--;
            secondsLeft--;
            secondsLeft--;
            secondsLeft--;
            secondsLeft--;
            endGame();
            console.log('Na Dude')
        }
    }
}


// End game function, after the endGame function is called, it will stop the timer, hide the questions, ask the user to input initials, and then save the data locally.
function endGame() {
    
    questionText.textContent = 'Good job! You got ' + questionRight +' questions right!';
    clearInterval(secondsLeft);
    secondsLeft = 9999;
    hiddenQuestions();
    initialsShown();
}

//Timer Code
function startTimer() {
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timerElement.textContent = secondsLeft;
    // If timer reaches 0, game ends.
    if(secondsLeft === 0 ) {
        clearInterval(timerInterval);
        endGame();
    }
    }, 1000);
}




// On submission of initals, takes user to high score page
submit.addEventListener("click", endGameToHighScore)
function endGameToHighScore() {
    goBack.style.visibility = 'visible'
    highScoreText.style.visibility = 'visible'
    hiddenByHighScore.style.visibility = 'hidden'
    initialsContainer.style.visibility = "hidden"
    highScore.style.visibility = "hidden"
    questionText.style.visibility = "hidden"
    startQuiz.style.visibility = "hidden"
}

//High Score button.
highScore.addEventListener("click", goToHighScore)
function goToHighScore() {
    goBack.style.visibility = 'visible'
    highScoreText.style.visibility = 'visible'
    hiddenByHighScore.style.visibility = 'hidden'
    initialsContainer.style.visibility = "hidden"
    highScore.style.visibility = "hidden"
    questionText.style.visibility = "hidden"
    startQuiz.style.visibility = "hidden"
    
}

//Return Button,
goBack.addEventListener('click', returnToHome)
function returnToHome() {
    
    console.log('Test 123');
    hiddenQuestions();
    highScore.style.visibility = "visible"
    questionText.style.visibility = "visible"
    startQuiz.style.visibility = "visible"
    location.reload();
    
    

}



// Displays High Score data
// Render
function displayHighScoreData() {
    //displays high score question data
    //displays high score initials data.
    highScoreDisplayList.innerHTML = "";

    for (var i = 0; i< highScoreInitials.length; i++) {
        var highScoreInitials = highScoreInitials[i];
        var li = document.createElement('li');
        li.textContent = highScoreInitials;
        li.setAttribute('#delete', i);

        var button = document.createElement('button');
        button.textContent = "Delete";

        li.appendChild(button);
        highScoreDisplayList.appendChild(li);
        
    }


}
//init
function loadPastInitials() {
    // Get stored initials from localStorage
    var storedInitials = JSON.parse(localStorage.getItem("initials"));

    if (storedInitials !== null) {
        highScoreInitials = storedInitials;
    }


    displayHighScoreData();
}
//store
function storeInitials() {
    // Stringify and set key in localStorage to todos array
    localStorage.setItem("initials", JSON.stringify(highScoreInitials));
}

initialsContainer.addEventListener('submit', function(event) {
    event.preventDefault();

    var initialsText = initInput.value.trim();

    if(initialsText === "") {
        return;
    }
    highScoreInitials.push(initialsText);
    initInput.value = "";

    storeInitials();
    displayHighScoreData();

});

highScoreDisplayList.addEventListener('submit', function(event) {
    var element = event.target;

    if (element.matches("button")===true) {
        var index = element.parentElement.getAttribute("data-index");
        highScoreInitials.splice(index, 1);

        storeInitials();
        displayHighScoreData();
    }
});

loadPastInitials()
