var cardDeck = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8'];
var cardValue = [];
var cardId = [];
var cardsFlipped = 0;


function newGame(){
	cardsFlipped = 0;
	// shuffle deck to start a new game
	shuffleDeck(cardDeck);
	var htmlCode = " ";

	// displaying deck
	cardDeck.forEach(function(card){
		htmlCode += "<div class=\"cardBack\"></div>";
	});
	document.getElementsByClassName('gameBoard')[0].innerHTML = htmlCode;

	// adding eventListener to each card
	cardDeck.forEach(function(card, index){
		var te=document.getElementsByClassName("cardBack")[index];
		te.addEventListener('click', function(event){
			flipCard(te, card);
		});
	});
}

function shuffleDeck(allCardsInDeck){
	var length = allCardsInDeck.length;
	var randomNumber, temp;

	while(--length>0){
		randomNumber = Math.floor((Math.random()*length));
		temp = allCardsInDeck[randomNumber];
		allCardsInDeck[randomNumber] = allCardsInDeck[length];
		allCardsInDeck[length] = temp; 
	}
}

function flipCard(cardDiv, card){
	if (cardDiv.innerHTML=='' && cardValue.length < 2 ) {
		console.log(cardValue.length);
		cardDiv.style.background = '#ccc';
		cardDiv.innerHTML = card;
		console.log(cardDiv);
		if (cardValue.length == 0){
			cardValue.push(card);
		} else {
			console.log('click');
			cardValue.push(card);
			if (cardValue[0]==cardValue[1]){
				cardValue = [];
			} else {
				cardValue = [];
				flipCardBack(cardDiv);				
			}
		}
	}

}

function flipCardBack(cardDiv){
	cardDiv.style.background = '#000';
}
newGame();