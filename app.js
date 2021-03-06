document.addEventListener('DOMContentLoaded',()=>{
    //card options

    const cardArray =[
        {
            name:'fries',
            img: "images/fries.png"
        },
        {
            name:'fries',
            img: "images/fries.png"
        },
        {
            name:'pizza',
            img: "images/pizza.png"
        },
        {
            name:'pizza',
            img: "images/pizza.png"
        },
        {
            name:'ice-cream',
            img: "images/ice-cream.png"
        },
        {
            name:'ice-cream',
            img: "images/ice-cream.png"
        },
        {
            name:'hot-dog',
            img: "images/hotdog.png"
        },
        {
            name:'hot-dog',
            img: "images/hotdog.png"
        },
        {
            name:'milk-shake',
            img: "images/milkshake.png"
        },
        {
            name:'milk-shake',
            img: "images/milkshake.png"
        },
        {
            name:'cheese-burger',
            img: "images/cheeseburger.png"
        },
        {
            name:'cheese-burger',
            img: "images/cheeseburger.png"
        }    
    ]
    cardArray.sort(()=>0.5- Math.random())

const grid= document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen =[]
var cardsChosenId =[]
var cardsWon =[]


//create a board 
function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('src', cardArray[i].img)
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
    setTimeout(startGame,3000)
}
function startGame() {
  var cards = document.querySelectorAll('img')
  for (let i = 0; i < cardArray.length; i++) {
    cards[i].setAttribute('src', 'images/blank.png') 
  }
}

//check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0] 
    const optionTwoId = cardsChosenId[1] 
    if (cardsChosen[0] === cardsChosen[1]){
        alert('You found a match')
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        cardsWon.push(cardsChosen)
        
  
    }else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length===cardArray.length/2){
        resultDisplay.textContent = "Congratulations! You found them all!"
    }
}
 //check for reclick
 var oldId = null;
 const checkForReclick = (cardId) => {
   if(oldId === cardId) return false
   else{
     oldId = cardId;
     return true;
   }
 }

 

//flip your card
function flipcard(){
    var cardId= this.getAttribute('data-id')
    if (checkForReclick(cardId)) {
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
          setTimeout(checkForMatch, 500)
        }
    }
}

createBoard()
})