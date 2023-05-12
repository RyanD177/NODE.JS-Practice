// 1. How much money user has to play with
// 2. number of lines to bet on
// 3. Collect bet amount.
// 4. Spin the slot machine  
// 5. Check if the user won
// 6. give the user their winning
// 7. Play again

const prompt = require("prompt-sync")();

const deposit  = ()  => { // arrow function to get bet for the user and check if its a number or more then 0, if not then invalid is displayed.
    while(true){
let depositAmount = prompt("What amount do you want to deposit: ")
let numberDepositAmount = parseFloat(depositAmount);

if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
    console.log("invalid ")
} else{
    return numberDepositAmount
}   
    }

}
const getNumberOfLines = () => {
    while(true){
        let lines = prompt("Enter the number of lines to bet (1-3) : ")
        let numberOfLines = parseFloat(lines);
        
        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines >3 ){ // 3 number of lines in our bet machine.
            console.log("invalid ")
        } else{
            return numberOfLines
        }   
            }
        


}
 const getBet = (balance) => {

    while(true){
        let bet = prompt("Enter the total bet : ") // number of bet has to be less then your balance.
        let numberBet = parseFloat(bet);
        
        if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance ){ // if you put in a bet greater then your balance, invalid 
            console.log("You are betting more then you have bro ")
        } else{
            return numberBet
        }   
            }
        


 }

let balance  = deposit();


const numberOfLines = getNumberOfLines();


const bet = getBet(balance);