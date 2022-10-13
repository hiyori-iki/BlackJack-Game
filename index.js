let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard
let cards=[firstCard,secondCard]
let n=2
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.querySelector("#card-el")
function startGame()
{
    renderGame()
    
}
function renderGame()
{
    cardsEl.textContent="Cards:"
    for(let i=0; i<n; i++ )
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
    console.log("Drwaing a new card from the deck")
    let newCard=4
    cards.push(newCard)
    n++;
    sum+=newCard
    renderGame()
}

