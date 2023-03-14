let cellElements = document.querySelectorAll(".box");
let restart = document.querySelector(".winner .restart");
let massage = document.querySelector(".winner h1")
let turnX = document.querySelector(".wrap-X");
let turnO = document.querySelector(".wrap-O");
const playerX = "X";
const playerO = "O";
let checkPlayer = true;
const winProbability = [
                 [0 ,1 ,2],
                 [3 ,4 ,5],
                 [6 ,7 ,8],
                 [0 ,3 ,6],
                 [1 ,4 ,7],
                 [2 ,5 ,8],
                 [0 ,4 ,8],
                 [2 ,4 ,6],
                 ]
cellElements.forEach(cell =>{
cell.onclick = ()=>{
currentPlayer = checkPlayer ? playerX : playerO;
cell.classList.add("disable")
addIn(cell ,currentPlayer)
if(winnerConditions(currentPlayer)){
massage.innerHTML = `${currentPlayer} - Win the game`;
drawText()
}else if(draw()){
massage.innerHTML = "Draw Match";
drawText()
}else{
turn();
}
}
})


function turn(){
 checkPlayer = !checkPlayer;
 if(checkPlayer){
 turnX.classList.add("active");
 turnO.classList.remove("active");
 }else{
 turnO.classList.add("active");
 turnX.classList.remove("active");
 }
}
function addIn(cell ,currentPlayer){
cell.innerHTML = currentPlayer;
cell.classList.add(currentPlayer);
}
function winnerConditions(currentPlayer){
return winProbability.some(value =>{
return value.every(index =>{
return cellElements[index].classList.contains(currentPlayer)
})
})
}
function draw(){
return [...cellElements].every(check =>{
return check.classList.contains(playerX) || check.classList.contains(playerO)
})
}
function drawText(){
massage.classList.remove("final-winner");
restart.classList.remove("final-winner")
}
restart.onclick = ()=>{
location.reload()}