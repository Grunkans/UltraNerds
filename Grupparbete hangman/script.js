import {words} from './svenska-ord.js'

// Math.Random () för att slumpa fram ord från listan! 
// input fältet för :: inputName    //console.log för att skriva ut namnet i consolen
// Använd localStorage för att spara datan i webbläsaren.
// Listan ska vara sorterad så att de bästa omgångarna visas överst: i första hand stigande på antal gissningar, i andra hand fallande på datum och tid för omgången. Man ska kunna växla till att visa omgångarna sorterade i fallande ordning på datum och tid.
//  JSON methods, stringify och parse.
// Använd Date-funktionen för att spara tiden som en poäng sparas: let scoreTime = (new Date).getTime() 
// poängVyn visas när man klickar på  " highscoreButton "
// let scoreTime = (new Date).getTime() 
//lägg applåder när man klarat det
//lägg ljudeffekt när användaren gissar fel

// StartView   ALLA VARIABLER 
const lättButton = document.getElementById('buttonLätt');
const mediumButton = document.getElementById('buttonMedium');
const svårButton = document.getElementById('buttonSvår');
let nameInput = document.getElementById('input-Name');
const buttonStart = document.querySelector('#startButton');
const buttonHighscore = document.querySelector('#highscoreButton');
const viewStart = document.querySelector('#startview');
const viewPlay = document.querySelector('#playView');
const labelName = document.querySelector('.divForName');
const buttonBack = document.querySelector('#backButton');
const buttonBack2 = document.querySelector('#backButton2');
const tangentbord = document.querySelector('.keyboard-container');
const tangenter = document.querySelector('.key')
const startMeny = document.querySelector('.startOchHigh')  //div m start o highscore
const svårighetsgradDiv = document.querySelector('.svårighetsgrad');
const highScoreWindow = document.querySelector('.highscorewindow')//highscore meny
const gameover = document.querySelector('.gameover') //gameoverdiv
const tryagainButton = document.querySelector('#tryagainButton'); //igen knapp
const gameoverButton = document.querySelector('.gameoverButton')//div för knapparna
const userNameField = document.querySelector('.user-name')
const divHighscore = document.querySelector('#highscorediv') //highscoreknapp i div

//div för lätt,m,svår
// Anteckning -- svårighetsgradDiv pekar just nu på själva diven som innehåller lätt, medium, svår-knapparna.
// Använder variabeln 'svårighetsgrad' för att lagra svårighetsgraden som spelet läser av.
let svårighetsgrad = ''
let chosenWord = ''
let incorrectGuess = 0
let correctGuess = 0
let totalGuess = 0
let userName = ''
let sparadNamn = ''
const startForButtonDiv = document.querySelector('.buttonForStart');
const highScoreDiv = document.querySelector('.highscorediv');
const easywords = words.filter((word) => word.length > 14)
const mediumwords = words.filter((word) => word.length <= 14 && word.length > 11)
const hardwords = words.filter((word) => word.length == 10 || word.length == 11)


svårighetsgradDiv.classList.add('hidden'); //lätt medium svår är gömd, tills användaren trycker på spela här knappen! 
highScoreWindow.classList.add('hidden'); //highscore div
gameover.classList.add('hidden');  //gameover view 
gameoverButton.classList.add('hidden'); //tillbaka,kör igen knapparna
startMeny.classList.add('visible');
// ViewGameover.classList.add('hidden'); //gameover menyn

buttonStart.addEventListener('click', () => {
if (buttonStart) {
startForButtonDiv.classList.add('hidden');
svårighetsgradDiv.classList.remove('hidden');
highScoreDiv.classList.add('hidden'); 
labelName.classList.add('hidden');
sparaNamn()
startMeny.classList.add('visible')
}
});


StartView  //startview
viewPlay //playview



buttonHighscore.addEventListener('click', () => {
if (buttonHighscore){
startForButtonDiv.classList.add('hidden');
svårighetsgradDiv.classList.add('hidden');
highScoreDiv.classList.add('hidden'); 
startMeny.classList.add('hidden');
labelName.classList.add('hidden');
highScoreWindow.classList.remove('hidden');

// göra en highscore div som sparar & visar namnen! 

}
});


buttonBack.addEventListener('click', () => {
    if (buttonBack){
    highScoreWindow.classList.add('hidden')
	startForButtonDiv.classList.remove('hidden');
	highScoreDiv.classList.remove('hidden');
gameover.classList.add('hidden');
gameoverButton.classList.add('hidden');
startMeny.classList.add('visible')
    }
})


tryagainButton.addEventListener('click', () =>{
startForButtonDiv.classList.remove('hidden');
svårighetsgradDiv.classList.add('hidden');
gameover.classList.remove('visible');
gameoverButton.classList.remove('visible');
buttonHighscore.classList.remove('visible');
startMeny.classList.add('visible');
 })



// Sparar 1 namn än sålänge,lokalt ! 

function sparaNamn(){
	const userName = nameInput.value; //hämta värdet från input
	localStorage.setItem("namn", userName); // sparar värdet
	const sparadNamn = localStorage.getItem("namn");
	console.log(sparadNamn)
	let newName = document.createElement('div')
	newName.innerText = sparadNamn
	userNameField.appendChild(newName)
}


// nameInput.addEventListener("change", (event) => {
// 	const namn = event.target.value; //hämta värdet från input
//     localStorage.setItem("namn", namn); // sparar värdet
// 	const sparadNamn = localStorage.getItem("namn");
// 	if (sparadNamn) {
// 		nameInput.value = sparadNamn; //om någon data finns sparat
// 	}
// });
/* 




 // väljer ut slumpat ord när man trycker på lätt knappen!
/* lättButton.addEventListener('click', () => {

const easywords = words.filter((word) => word.length > 14)
const randomWord = Math.floor(Math.random() * easywords.length);
const valdaOrd = easywords[randomWord];
console.log(valdaOrd)
})      
*/


// Alfabetet i en lista: 
const alfabetet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä", "Ö"];

// variabeln heter: words för hela listan med alla ord: const words


const randomInt = max => Math.floor(Math.random() * max);


//playView

const scaffoldGubbe = document.querySelector('#scaffold')
const legsGubbe = document.querySelector('#legs')
const armsGubbe = document.querySelector('#arms')
const bodyGubbe = document.querySelector('#body')
const headGubbe = document.querySelector('#head')

function startGame(){
	scaffoldGubbe.classList.add('invisible')
	legsGubbe.classList.add('invisible')
	armsGubbe.classList.add('invisible')
	bodyGubbe.classList.add('invisible')
	headGubbe.classList.add('invisible')
	startForButtonDiv.classList.add('hidden');
	svårighetsgradDiv.classList.add('hidden'); 
	correctGuess = 0
	incorrectGuess = 0
	totalGuess = 0
	//lägg in maxgissningar 
}


lättButton.addEventListener('click', () => {
	startGame()
	chosenWord = easywords[randomInt(easywords.length)]
	svårighetsgradDiv.classList.remove('visible');
	svårighetsgradText.classList.add('hidden');
	buttonBack.classList.add('visible'); 
	gameplay()
})

mediumButton.addEventListener('click', () => {
	startGame()
	chosenWord = mediumwords[randomInt(mediumwords.length)]
	svårighetsgradDiv.classList.remove('visible');
	svårighetsgradText.classList.add('hidden');
	gameplay()
	
})

svårButton.addEventListener('click', () => {
	startGame()
	chosenWord = hardwords[randomInt(hardwords.length)]
	svårighetsgradDiv.classList.remove('visible');
	svårighetsgradText.classList.add('hidden');
	gameplay()
})

//Skapar dashes ('_ _ _'), och ersätter dashes med bokstäver
//när man trycker på rätt tangent:

function gameplay(){
let displayedWord = chosenWord.replace(/./g, '<span class="dash">_</span>')
const submissionField = document.getElementById('line-form')
submissionField.innerHTML = displayedWord
window.addEventListener('keyup', e => {
	let wordArray = chosenWord.split("")
	let dashes = document.getElementsByClassName('dash')
	if (wordArray.includes(e.key)){
		wordArray.forEach((letter, index) => {
			if (letter === e.key){
				dashes[index].innerText = letter
			}
			})
			correctGuess++
		}
		else{
			incorrectGuess++
			console.log(incorrectGuess)
			if (incorrectGuess === 1){
				scaffoldGubbe.classList.remove('invisible')
			}
			else if (incorrectGuess === 2){
				headGubbe.classList.remove('invisible')
			}
			else if (incorrectGuess === 3){
				bodyGubbe.classList.remove('invisible')
			}
			else if (incorrectGuess === 4){
				armsGubbe.classList.remove('invisible')
			}else{
				legsGubbe.classList.remove('invisible')
				gameover.classList.add('visible'); //Gameover popup!!!
				gameoverButton.classList.add('visible')
				totalGuess = incorrectGuess + correctGuess
			}
	}
})
}


//gameoverView 



const highscore = document.querySelector('#high-score')

//scorescreenView
// Visar endast namnen med denna funktionen .
//buttonHighscore.addEventListener('click', () => {
//sparadNamn = localStorage.getItem("namn");
//if (sparadNamn) {
//	highscorediv.textContent = sparadNamn
//} 
//}); 
//nameInput.addEventListener('input', event => { // input namn för highscore
//	highscore.innerText = event.target.value
//})
// lägg till så att den visar både vunna & förlorade med antal gissningar , ordets längd, datum+tid för omgången
