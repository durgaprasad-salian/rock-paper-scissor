function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    let choices = ["rock", "paper", "scissor"];
    const noOfChoices = 3;

    return choices[getRandomInt(noOfChoices)];
}



function getHumanChoice(){
    let humanChoice = prompt("What is your choice?(Please enter rock, paper or scissor)");

    console.log(`Human choice is ${humanChoice}!!!`);

    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice){

        console.log(`Its a tie!!! Both Choose ${humanChoice}`);

    }else if ((humanChoice === "rock" && computerChoice === "scissor") ||
                (humanChoice === "scissor" && computerChoice === "paper") ||
                (humanChoice === "paper" && computerChoice === "rock")){
                    humanScore++;
                    console.log(`You win! ${humanChoice} beats ${computerChoice}`);

    }else if ((computerChoice === "rock" && humanChoice === "scissor") ||
                (computerChoice === "scissor" && humanChoice === "paper") ||
                (computerChoice === "paper" && humanChoice === "rock")){
                 computerScore++;
                 console.log(`You lose! ${computerChoice} beats ${humanChoice}`);  
    }
}




function playGame(){
    const round = 5;
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < round; i++){
        playRound(getHumanChoice(),getComputerChoice());
    }

    if(humanScore > computerScore){
        console.log(`You won by ${humanScore - computerScore} points! You: ${humanScore}, Computer: ${computerScore}.`);
    }else if (computerScore > humanScore){
        console.log(`Computer won by ${computerScore - humanScore} points! You: ${humanScore}, Computer: ${computerScore}.`);
    }else {
        console.log(`Its a tie!!! You: ${humanScore}, Computer: ${computerScore}`);
    }
}

playGame();