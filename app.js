


var scores,activePlayer,roundScore;


topScore = 50;

var gameContinue = true;


intialization();


//rolling dice events
//select element where event will happen

document.querySelector('.btn-roll').addEventListener('click',function(){

    if(gameContinue)
    {
        //generate random number from 1 to 6 for dice
    dice = Math.floor(Math.random()*6) + 1; 
    //display dice image with the random number 

    //select and store
    var diceDom = document.querySelector('.dice');
    //display block
    diceDom.style.display ='block';
    //change src attribute
    diceDom.src ='dice-'+ dice +'.png';

    //display the dice value in player`s current score
    document.querySelector('#current-'+activePlayer).textContent = dice;

    //update roundScore only if dice != 1
    if(dice !== 1)
    {
    //add score
    roundScore += dice;
    document.querySelector('#current-'+activePlayer).textContent = roundScore;

    }
    else {
    //next player >>ternary operator
    nextPlayer();
    }
}

    
});


//hold our points and update scores

document.querySelector('.btn-hold').addEventListener('click',function(){

    
    if(gameContinue)
    {

    //add current to player score
    scores[activePlayer] += roundScore;
    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
    //check if player won
    if (scores[activePlayer] >= topScore)
    {
        document.getElementById('name-'+activePlayer).textContent ='WINNER!';
        document.querySelector('.dice').style.display ='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        
        gameContinue = false;

    }
    else
    {
         //when pressing hold it moves to other player 
        nextPlayer();
    }

}
  

});



document.querySelector('.btn-new').addEventListener('click',intialization);


function nextPlayer(){

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    //as the player changes we will change the interface of the active player
    //by removing and adding classes

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display ='none';

}

function intialization(){

scores = [0,0];
activePlayer =  0;
roundScore = 0;

//hide the dice at the first of the game
document.querySelector('.dice').style.display ='none';
document.getElementById('score-0').textContent =0;
document.getElementById('score-1').textContent =0;
document.getElementById('current-0').textContent =0;
document.getElementById('current-1').textContent =0;

document.getElementById('name-1').textContent ='Player 2';
document.getElementById('name-0').textContent ='Player 1';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');



}