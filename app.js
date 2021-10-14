const btnPlay = document.querySelector('.btn');
// Create h2
const heading = document.createElement('h2');
btnPlay.addEventListener('click', runEvent);

function runEvent(e) {
        // Random image 1
    let randomNumber = Math.floor(Math.random()* 6 ) + 1;
    let randomDiceImage = `images/dice${randomNumber}.png`;
    // Random image 2
    let randomNumber2 = Math.floor(Math.random()* 6 ) + 1;
    let randomDiceImage2 = `images/dice${randomNumber2}.png`;
//    Selecting Specific elements
    const image1 = document.querySelectorAll('img')[0].setAttribute("src", randomDiceImage); 
    const image2 = document.querySelectorAll('img')[1].setAttribute("src", randomDiceImage2);
   document.querySelector('.addme').appendChild(heading);
    // Checking
    if (randomNumber > randomNumber2) {

        heading.innerText = '🚩 Player One Wins! 🚩';
    } else if(randomNumber < randomNumber2){
        heading.innerText = '🚩 Player Two Wins! 🚩'; 
    }else if(randomNumber === randomNumber2){
        heading.innerText = 'The Game is LEVEL!';
    }

}

