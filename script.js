function makeBubbles() {
    var bubbles = ""
    for (var makeBubbles = 1; makeBubbles <= 192; makeBubbles++) {
        var randomNumbers = Math.floor(Math.random() * 10)
        bubbles += `<div class="bubble">${randomNumbers}</div>`
    }
    document.querySelector(".bubble-container").innerHTML = bubbles
}
makeBubbles()

var randomNewHits
function newHits() {
    randomNewHits = Math.floor(Math.random() * 10)
    var newHit = randomNewHits
    document.querySelector(".newHit").textContent = newHit
}
newHits()


function runTimer(){
    var timer = 60
    var timerInterval = setInterval(function(){
        if(timer > 0){
           timer--
        document.querySelector(".runTimer").textContent = timer 
        } else {
            clearInterval(timerInterval)
            document.querySelector(".bubble-container").innerHTML = `<p style="text-align: center;">Game Over. Your Total Score is <b>${score}.</b> Refresh to Restart the Game.</p>`
        }
    },1000)
}
runTimer()

var score = 0
function totalScore(){
    score += 10
    document.querySelector(".totalScore").textContent = score
}
document.querySelector(".bubble-container").addEventListener("click", function(dets){
    var hitBubble = (Number(dets.target.textContent))
    if(hitBubble === randomNewHits){
        totalScore()
        newHits()
        makeBubbles()
    }
})