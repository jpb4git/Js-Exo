let container = document.getElementById('game');
let cards = container.querySelectorAll('.card');
let nbCardClicked = 0;
let nbGoal =8;
console.log("exo-9");
cards.forEach((card) => {card.addEventListener('click', flipCard)});
shuffle();
ShowTentative();
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;



function flipCard() {
  
   // i try to click on a card while two of them are visible
  if (firstCard != null && secondCard != null) return ;
  // i click on the same card 
  if (this === firstCard) return;

  nbCardClicked++;
  this.classList.add('flip'); // Add du flip sur la card active
  
  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  // second click
  secondCard = this;
  hasFlippedCard = false;

  testMatch(firstCard,secondCard);
  ShowTentative();
}
function testMatch(card1,card2){

  if (card1.dataset.name === card2.dataset.name){
   setTimeout(function(){  
      card1.style.opacity = 0;
      card2.style.opacity = 0;
      nbGoal--;
   },800)
  }else{
    setTimeout(function(){
      card1.classList.toggle('flip');
      card2.classList.toggle('flip');
    },800)
  }
  firstCard = null;
  secondCard =null;

}
function ShowTentative(){
  var h = document.getElementById("tentative");
  if (nbGoal == 0 ){
    h.innerHTML = 'WIN !!! avec ' + nbCardClicked / 2  + " tentative(s)";  
  }else{
    h.innerHTML = nbCardClicked / 2  + " tentative(s)";
  }
  
}
function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
};