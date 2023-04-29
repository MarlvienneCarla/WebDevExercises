// Interactive Image
const image = document.querySelector('img');
image.addEventListener('mouseover', () => {
	image.style.transform = 'rotate(360deg)';
});

// Simple Game
const gameBoard = document.getElementById('game-board');
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
	gameBoard.innerHTML = '<p>The game has started!</p>';
});
