let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let options = ["rock", "paper", "scissor"];
    let selector = Math.floor(Math.random()*3);
    let selection = options[selector];
    return selection;
}

const buttons = document.querySelectorAll('button');

function disableFunc(){
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function playRound (playerSelection,computerSelection) {
    let result;
    let game;
    
    if((playerSelection==='rock'&&computerSelection==='scissor')||
    (playerSelection==='scissor'&& computerSelection==='paper')||
    (playerSelection==='paper'&& computerSelection==='rock')){
        playerScore += 1;
        result = `you won, ${playerSelection} beats ${computerSelection}`+
        ` player score is : ${playerScore} & computer score is : ${computerScore}`;
        
        if(playerScore === 5){
            disableFunc();
            game = 'you have won the game';
        }
    }else if (playerSelection===computerSelection) {
        result = `It's a tie. you both chose ${playerSelection,computerSelection}`;
    }else {
        computerScore += 1;
        result = `you lose, ${computerSelection} beats ${playerSelection}` + 
        ` player score is : ${playerScore} & computer score is : ${computerScore}`;
        
        if(computerScore === 5){
            disableFunc();
            game = 'computer has won the game';
        }
    }
    const text = document.querySelector('#result');
    text.textContent = result;

    const game_result = document.querySelector('#game_result');
    game_result.textContent = game;
}

buttons.forEach(button => {
    button.addEventListener('click',function(){
        playRound(button.id,getComputerChoice());
    })
});




