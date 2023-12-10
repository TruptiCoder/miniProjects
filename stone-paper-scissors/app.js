let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uspara = document.querySelector("#user-score");
const cspara = document.querySelector("#comp-score");

const genCompChoice = () => {
    // rock , paper , scissors
    const options = ["rock" , "paper" , "scissors"];
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

const drawGame = () => {
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "#F7E733";
    msg.style.color = "#125E8A"
}

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin == true){
        userScore++;
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#41E2BA";
        uspara.innerText = userScore;
    }
    else{
        compScore++;
        msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#E86A92";
        cspara.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    console.log(userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log(compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //Scissors , paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //paper , rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});