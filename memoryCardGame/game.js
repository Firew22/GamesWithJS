const cardArray = [
    {
        name:'avocado',
        img: 'images/avocado.png'

    },
     {
        name:'banana',
        img: 'images/banana.png'

    },
     {
        name:'charries',
        img: 'images/cherries.png'

    },
     {
        name:'coconut',
        img: 'images/coconut.png'

    },
     {
        name:'apple',
        img: 'images/apple.png'

    },
     {
        name:'grape',
        img: 'images/grape.png'

    },
     {
        name:'kiwi',
        img: 'images/kiwi.png'

    },
     {
        name:'lemon',
        img: 'images/lemon.png'

    },
     {
        name:'mango',
        img: 'images/mango.png'

    },
     {
        name:'pineapple',
        img: 'images/pineapple.png'

    },
     {
        name:'tangerine',
        img: 'images/tangerine.png'

    },
     {
        name:'watermalon',
        img: 'images/watermalon.png'

    },
    {
        name:'avocado',
        img: 'images/avocado.png'

    },
     {
        name:'banana',
        img: 'images/banana.png'

    },
     {
        name:'charries',
        img: 'images/cherries.png'

    },
     {
        name:'coconut',
        img: 'images/coconut.png'

    },
     {
        name:'apple',
        img: 'images/apple.png'

    },
     {
        name:'grape',
        img: 'images/grape.png'

    },
     {
        name:'kiwi',
        img: 'images/kiwi.png'

    },
     {
        name:'lemon',
        img: 'images/lemon.png'

    },
     {
        name:'mango',
        img: 'images/mango.png'

    },
     {
        name:'pineapple',
        img: 'images/pineapple.png'

    },
     {
        name:'tangerine',
        img: 'images/tangerine.png'

    },
     {
        name:'watermalon',
        img: 'images/watermalon.png'

    },
]

cardArray.sort(() => 0.5 - Math.random());
const grid = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let chosen = [];
let chosenCardsId = [];
const cardsWon = [];
let currentLevel =1;
let nextLevelButton;

function createBoard( cardCount) {
   
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'images/identity.png'); // Hidden card image
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipcard);

    grid.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll('img');
  const optOneId = chosenCardsId[0];
  const optTwoId = chosenCardsId[1];

  if (optOneId === optTwoId) {
    
    cards[optOneId].setAttribute('src', 'images/identity.png'); 
    cards[optTwoId].setAttribute('src', 'images/identity.png');
  } else if (chosen[0].toLowerCase() === chosen[1].toLowerCase()) { // Case-insensitive comparison
    alert('You found a match!');
    cards[optOneId].setAttribute('src', 'images/white.jpg'); 
    cards[optTwoId].setAttribute('src', 'images/white.jpg'); 
    cards[optOneId].removeEventListener('click', flipcard);
    cards[optTwoId].removeEventListener('click', flipcard);
    cardsWon.push(chosen);
  } else {
    cards[optOneId].setAttribute('src', 'images/identity.png'); 
    cards[optTwoId].setAttribute('src', 'images/identity.png'); 
    alert('Sorry, try again');
  }
  chosen = [];
  chosenCardsId = [];
  resultDisplay.innerHTML = cardsWon.length;

  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.innerHTML = 'Congratulations you found them all!';
  }
}

function flipcard() {
  let cardId = this.getAttribute('data-id');
  chosen.push(cardArray[cardId].name.toLowerCase()); // Push lowercase name for comparison
  chosenCardsId.push(cardId);
  this.setAttribute('src', cardArray[cardId].img);
  if (chosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}




 

