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



startQuiz.addEventListener('click', startGame);

function startGame() {
    startTimer();
    questionText.textContent = 'Was this easy to code?'
    button1Click.textContent = 'Nope'
    button2Click.textContent = 'No' 
    button3Click.textContent = 'Nein' 
    button4Click.textContent = 'Nada'
    // Add High Score hider
    // Add Start Quiz Hider
    button1Click.addEventListener('click', questionOne);
    button2Click.addEventListener('click', questionOne);
    button3Click.addEventListener('click', questionOne);
 
    button4Click.addEventListener('click', questionOne);
    
    
}


function questionOne(event) {
    event.preventDefault();
    
    questionText.textContent = 'A _____ is a data type used in programming, that is used to represent text rather than numbers. '
    button1Click.textContent = 'String'
    button2Click.textContent = 'Banana' 
    button3Click.textContent = 'Pair of Dice' 
    button4Click.textContent = 'Number'
    button1Click.addEventListener('click', correctAnswer1)
    button2Click.addEventListener('click', incorrect1)
    button3Click.addEventListener('click', incorrect1)
    button4Click.addEventListener('click', incorrect1)
    function correctAnswer1(event) {
        event.stopPropagation();
        var answer = 'String';
        if (answer ===('String')) {
            questionRight++;
            questionTwo();
            console.log('Sa Dude')
            
        } 
    }
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

        var answer = 'Boolean';
        if (answer ===('Boolean')) {
            questionRight++;
            questionThree();
            console.log('Sa Dude')
            
        }
    }
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

        var answer = 'Program';
        if (answer ===('Program')) {
            questionRight++;
            endGame();
            console.log('Sa Dude')
            
        }
    }
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



function endGame() {
    
    questionText.textContent = 'Good job! You got ' + questionRight +' questions right!';
    clearInterval(secondsLeft);
}










//Timer Code
function startTimer() {
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timerElement.textContent = secondsLeft;
    if(secondsLeft === 0 ) {
        clearInterval(timerInterval);
        endGame();
    }
    }, 1000);
}