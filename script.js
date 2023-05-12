// 1. How much money user has to play with
// 2. number of lines to bet on
// 3. Collect bet amount.
// 4. Spin the slot machine  
// 5. Check if the user won
// 6. give the user their winning
// 7. Play again

const prompt = require("prompt-sync")();

const deposit = () => {
    while(true){
   const depositAmount = prompt("How much would you like to deposit:  ")
   const depositAmounttoNumber = parseFloat(depositAmount);
 if(isNaN(depositAmounttoNumber) || depositAmounttoNumber <=0){
   console.log("Invalid, this is not a number. ")
 }else{
    return depositAmounttoNumber
 }
    }
}
const lines = () => {
    while(true){
        const lines = prompt("How many lines would you like to bet on (1-3):  ")
        const linesToNum = parseInt(lines);
      if(isNaN(linesToNum) || linesToNum >3){ //cause only 1-3 lines.
        console.log("Invalid, put between 1-3 lines please.s ")
      }else{
         return linesToNum
      }
         }
}

const getBet = (balance,lines) => {

    while(true){
        const totalBet = prompt("Enter your bet per line:  ")
        const betNum = parseInt(totalBet);
      if(isNaN(betNum) ||betNum <= 0 || betNum > balance / lines ){
        console.log("Invalid Bet ")
      }else{
         return betNum
      }
         }
}



let balance = deposit()

const linesBetOn = lines();

const bet = getBet(balance,linesBetOn)