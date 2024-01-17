var me = 0;
var computer = 0;

function choose(choice, imagePath) {
    var computerChoices = ['rock', 'paper', 'scissors'];
    var computerIndex = Math.floor(Math.random() * computerChoices.length);
    var computerChoice = computerChoices[computerIndex];

    // Update the content of the output box with the selected images
    document.querySelector('.output').innerHTML = `<img src="${imagePath}" alt="Your choice">`;
    document.querySelector('.random').innerHTML = `<img src="${computerChoice}.jpg" alt="Computer's choice">`;

    // Determine the winner and update the result div
    var result;
    if (choice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (choice === 'rock' && computerChoice === 'scissors') ||
        (choice === 'paper' && computerChoice === 'rock') ||
        (choice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
        me++;
    } else {
        result = 'Computer wins!';
        computer++;
    }

    document.getElementById('result').textContent = result;

    // Update the scores display
    updateScores();
}

function updateScores() {
    document.querySelector('.score-me').textContent = `Your Score: ${me}`;
    document.querySelector('.score-computer').textContent = `Computer's Score: ${computer}`;
}
