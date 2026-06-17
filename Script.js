
//CREATING OPTIONS

const options = [
    {
        name: "Rock",
        image: "./assets/rock.png"
    },
    {
        name: "Paper",
        image: "./assets/papar.png"
    },
    {
        name: "Scissors",
        image: "./assets/scissors.png"
    }
];


// PUTTiNG OPTIONS ON THE PAGE
const userOptions = document.querySelector('.user-options');
options.forEach(option => {
    const button = document.createElement('button');
    const img = document.createElement('img');
    button.value = option.name;
    button.className = 'option-button';
    button.textContent = option.name;
    img.src = option.image;
    button.appendChild(img);
    userOptions.appendChild(button);

});



// GETTING USER SELECTION

const buttons = document.querySelectorAll('.option-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let userSelection = button.value;

        compareOptions(userSelection, getComputerSelection());

    })
})




// GETTING COMPUTER SELECTION

function getComputerSelection() {

    const compArea = document.getElementById('compArea');
    const button = document.createElement('button');
    const img = document.createElement('img');

    const randomIndex = Math.floor(Math.random() * 3);

    const computerSelection = options[randomIndex].name;
    const computerImage = options[randomIndex].image;

    button.value = computerSelection;
    button.className = 'option-button';
    button.textContent = computerSelection;
    img.src = computerImage;
    button.appendChild(img);
    compArea.innerHTML = '';
    compArea.appendChild(button);

    return computerSelection;

}


// NOW COMPARING USER AND COMPUTER SELECTIONS
let UserScoring = 0
let ComputerScoring = 0

//REST BUTTON 
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    UserScoring = 0;
    ComputerScoring = 0;
    document.querySelector('.userScore').textContent = UserScoring;
    document.querySelector('.computerScore').textContent = ComputerScoring;
    document.getElementById('resultText').textContent = "Scores Reset!";
    document.getElementById('resultText').style.backgroundColor = "blue";
})



const compareOptions = (userSelection, computerSelection) => {


    const userScore = document.querySelector('.userScore');
    const computerScore = document.querySelector('.computerScore');
    const resultText = document.getElementById('resultText');

    if (userSelection === computerSelection) {
        resultText.textContent = "Both selected the same option";
        resultText.style.backgroundColor = "blue";
    }
    if (userSelection === "Rock" && computerSelection === "Scissors") {
        resultText.textContent = "User Wins";
        resultText.style.backgroundColor = "green";
        UserScoring++;
    }
    if (userSelection === "Rock" && computerSelection === "Paper") {
        resultText.textContent = "Computer Wins";
        resultText.style.backgroundColor = "red";
        ComputerScoring++;
    }
    if (userSelection === "Paper" && computerSelection === "Rock") {
        resultText.textContent = "User Wins";
        resultText.style.backgroundColor = "green";
        UserScoring++;
    }
    if (userSelection === "Paper" && computerSelection === "Scissors") {
        resultText.textContent = "Computer Wins";
        resultText.style.backgroundColor = "red";
        ComputerScoring++;
    }
    if (userSelection === "Scissors" && computerSelection === "Rock") {
        resultText.textContent = "Computer Wins";
        resultText.style.backgroundColor = "red";
        ComputerScoring++;
    }
    if (userSelection === "Scissors" && computerSelection === "Paper") {
        resultText.textContent = "User Wins";
        resultText.style.backgroundColor = "green";
        UserScoring++;
    }

    // ✅ Update DOM after scoring
    if (UserScoring > ComputerScoring) {  // ✅
        userScore.style.color = 'green'
        computerScore.style.color = 'red'
    }  else  if (UserScoring === ComputerScoring) {  // ✅
        userScore.style.color = 'blue'
        computerScore.style.color = 'blue'
    } else {
        computerScore.style.color = 'green'
        userScore.style.color = 'red'
    }

    userScore.textContent = UserScoring;
    computerScore.textContent = ComputerScoring;
}
