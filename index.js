let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeCount = 0
let guestCount = 0

function addOneHome() {
    homeCount ++
    homeScore.textContent = homeCount
}
function addTwoHome() {
    homeCount += 2
    homeScore.textContent = homeCount
}
function addThreeHome() {
    homeCount += 3
    homeScore.textContent = homeCount
}

function addOneGuest() {
    guestCount ++
    guestScore.textContent = guestCount
}
function addTwoGuest() {
    guestCount += 2
    guestScore.textContent = guestCount
}
function addThreeGuest() {
    guestCount += 3
    guestScore.textContent = guestCount
}

function reset() {
    console.log("button clicked")
    homeScore.textContent = "0"
    guestScore.textContent = "0"
    homeCount = 0
    guestCount = 0
}