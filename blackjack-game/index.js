let player = {
    name: "Iain",
    chips: 200

}
let cards = []
let sum = 0
let isAlive = false
let hasblalckjack = false
count = 0
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ' $' + player.chips

function getrandomcard() {
    let number = Math.floor(Math.random() * 13) + 1
    if (number === 1){
        return 11
    } else if (number > 10){
        return 10
    } else {
        return number
    }
}

function rendergame() {
    let startgamebtn = document.getElementById('startgame')
    startgamebtn.textContent = "GAME HAS STARTED!"
    document.getElementById('cards').textContent = 'Cards: '
    for (let i = 0; i <cards.length; i++) {
        document.getElementById('cards').textContent += cards[i] + ' '
    }
    if(sum < 21){
        document.getElementById('round').textContent = "Do you want to draw a new card?"
    } else if (sum === 21){
        hasblalckjack = true
        document.getElementById('round').textContent = "You've got a Blackjack!"
    } else {
        startgamebtn.textContent = "You lost!"
        document.getElementById('round').textContent = "You're out of the game!"
        isAlive = false
    }
    document.getElementById('sum').textContent = "Sum: " + sum
}

function startgame(){
    let firstcard = getrandomcard()
    let secondcard = getrandomcard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    isAlive = true
    rendergame()
}

function newgame(){
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if(isAlive === true && sum <= 21) {
        let card = getrandomcard()
        sum = sum + card
        cards.push(card)
        count += 1
    }


    rendergame()
}