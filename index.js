let sum = 0
let cards=[]
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.querySelector("#card-el")

function randomNumberGenerator()
{
    let randomNumber = (Math.random() * 12)+1
    flooredValue=Math.floor(randomNumber)
    if(flooredValue==1)
    {
        return 11
    }
    else if(flooredValue>10)
    {
        return 10
    }
    else
    {
        return flooredValue
    }
}
function startGame()
{
    let firstCard = randomNumberGenerator()
    let secondCard = randomNumberGenerator()
    isAlive=true
    sum = firstCard + secondCard
    cards=[firstCard,secondCard]
    renderGame()
}
function renderGame()
{
    cardsEl.textContent="Cards:"
    for(let i=0; i<cards.length; i++ )
    {
        cardsEl.textContent+=" "+cards[i]
    }

    sumEl.textContent="Sum:"+" "+ sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
        
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    console.log(message)
    
    messageEl.textContent=message;
}
function newcard()
{
    if(hasBlackJack==false && isAlive==true)
    {
       console.log("Drwaing a new card from the deck")
       let newCard=randomNumberGenerator()
       cards.push(newCard)
       sum+=newCard
       renderGame()
    }
}

