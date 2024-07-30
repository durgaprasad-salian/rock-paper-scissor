
let humanScore = 0;
let computerScore = 0;


function getRandomInt(max){
    return Math.floor(Math.random() * max);
}


function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissor"];
    const noOfChoices = 3;

    return choices[getRandomInt(noOfChoices)];
}


function playRound(humanChoice){

    const computerChoice = getComputerChoice();
    const info = document.querySelector('.info');
    const result = document.querySelector('.result');
    const score = document.querySelector('.score');

    let message = '';
    let updatedScore = '';

    if (humanChoice === computerChoice){
        
        message = `Its a tie!!! Both Choose ${humanChoice}`;
        console.log(message);
        info.innerHTML = message;

    }else if ((humanChoice === "Rock" && computerChoice === "Scissor") ||
                (humanChoice === "Scissor" && computerChoice === "Paper") ||
                (humanChoice === "Paper" && computerChoice === "Rock")){
                    
                    humanScore++;
                    message = `You win! ${humanChoice} beats ${computerChoice}`;
                    info.innerHTML = message;
                    console.log(message);

    }else if ((computerChoice === "Rock" && humanChoice === "Scissor") ||
                (computerChoice === "Scissor" && humanChoice === "Paper") ||
                (computerChoice === "Paper" && humanChoice === "Rock")){
                 
                    computerScore++;
                    message = `You lose! ${computerChoice} beats ${humanChoice}`;
                    info.innerHTML = message;
                    console.log(message);  
    }

    score.innerHTML = `You: ${humanScore} :::: Computer: ${computerScore}`;


    if(humanScore >= 5){

        updatedScore = `You won by ${humanScore - computerScore} points!`;
        result.innerHTML = updatedScore;
        console.log(updatedScore);
        resetGame();

    }else if (computerScore >= 5){

        updatedScore = `Computer won by ${computerScore - humanScore} points!`;
        result.innerHTML = updatedScore;
        console.log(updatedScore);
        resetGame();
    }

}


const start = document.querySelector('#startButton');
const buttonsContainer = document.querySelector('#buttonsContainer');
const h2Element = document.querySelector('h2');

start.addEventListener('click', () => {

   console.log('start');

   start.remove();

   h2Element.innerHTML = 'Please choose one of the bellow options';

   const rockButton = document.createElement('button');
   rockButton.innerHTML = 'Rock';
   rockButton.classList.add('choiceButton');

   const paperButton = document.createElement('button');
   paperButton.innerHTML = 'Paper';
   paperButton.classList.add('choiceButton');
   
   const scissorButton = document.createElement('button');
   scissorButton.innerHTML = 'Scissor';
   scissorButton.classList.add('choiceButton');

   buttonsContainer.appendChild(rockButton);
   buttonsContainer.appendChild(paperButton);
   buttonsContainer.appendChild(scissorButton);


   rockButton.addEventListener('click', handleChoice);
   paperButton.addEventListener('click', handleChoice);
   scissorButton.addEventListener('click', handleChoice);

});


function handleChoice(event){

    const choice = event.target.innerHTML;
    console.log(choice);

    playRound(choice);

}

function resetGame(){

    humanScore = 0;
    computerScore = 0;

}