var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var scores = [];
var score = 0;


var scoreCalculator = function(){	
	score++;

	var scoreElement = document.createElement('span');
	var scoreDisplay = document.createTextNode("I");
	scoreElement.appendChild(scoreDisplay);
	document.getElementById('scoreNum').appendChild(scoreElement);
}

var createBoard = function(){
	for (var i = 0; i < cards.length; i++)
	{
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

var cardsInPlay = [];

var checkForMatch = function(){
		
	if (cardsInPlay.length === 2 )
	{
		if (cardsInPlay[0] === cardsInPlay[1])
		{
			alert("You found a match!");
			scoreCalculator();
		}
		else
			alert("Sorry, try again!");
	}
}

var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	
	this.setAttribute('src', cards[cardId].cardImage);

	cardsInPlay.push(cards[cardId].rank);

	checkForMatch();
}

createBoard();

var clearBoard = function(){
	for(var i = 0; i < cards.length; i++)
	{
		document.querySelectorAll('img')[i].setAttribute('src', 'images/back.png');
	}

	cardsInPlay.length = 0;
}

document.getElementById('redo').addEventListener('click', clearBoard);

