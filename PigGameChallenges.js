
/*
 Pig Game
*/

var numberOnCurrent=0,
	numberOnScore=[0,0],
	activePlayer=0,
	secondRandomNumber;
init();

//rolldice clickhandler
document.getElementById('btn-roll').addEventListener('click', function () {
	var randomNumber = Math.ceil(Math.random()*6),
		prevNumber = !1;

	if (secondRandomNumber) {
			prevNumber = secondRandomNumber === randomNumber ? true : false;
		}
		secondRandomNumber = randomNumber;
	document.querySelector('.dice').src = 'dice-'+randomNumber+'.png';
	numberOnCurrent+=randomNumber
	document.querySelector('.dice').hidden = false;
	if (randomNumber === 6 && prevNumber) {
		document.getElementById('score-'+activePlayer).textContent = 0;
		document.querySelector('.dice').hidden = true;
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		document.getElementById('current-'+activePlayer).textContent = 0;
		numberOnCurrent = 0;
		activePlayer = activePlayer === 0 ? 1 : 0;
	}
	document.getElementById('current-'+activePlayer).textContent = numberOnCurrent;
});

document.querySelector('.btn-hold').addEventListener('click', function () {
	numberOnCurrent=0;
	numberOnScore[activePlayer]+=parseInt(document.getElementById('current-'+activePlayer).textContent);
	document.getElementById('score-'+activePlayer).textContent = numberOnScore[activePlayer];
	document.getElementById('current-'+activePlayer).textContent = 0;
});

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
	document.querySelector('.dice').hidden = true;
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;
	document.getElementById('score-0').textContent = 0;
	document.getElementById('score-1').textContent = 0;
}
