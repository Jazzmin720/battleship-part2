var readlineSync = require('readline-sync');

 





//create grid
let grid = [];
let alphabet = 'abcdefghij'.toUpperCase();
const  pressAnyKey = readlineSync.keyInPause('Press any key to start the game.')

const createGrid = (size) => { 
      let r;
      let c = 0; 
      for(r = 0; r < size; r ++){
        grid[r] = [];
        for (c = 1; c < size; c ++){
          grid[r][c] = `${alphabet[r]}${c}`
        }
      }
      console.table(grid);
};
createGrid(alphabet.length);

  
//place ship in random index and strike
const randomIndex = () => {
    let randomIndexOne = Math.floor(Math.random() * alphabet.length)//gives outer index of 0-4 for example
    let randomIndexTwo = Math.floor(Math.random() * alphabet.length)
    let randomIndexThree = Math.floor(Math.random() * alphabet.length)
    let randomIndexFour = Math.floor(Math.random() * alphabet.length)
    let r = randomIndexOne; // 0-alphabet.length
    let s = randomIndexTwo;
    let t = randomIndexThree; 
    let u = randomIndexFour;
    let c = Math.floor(Math.random()*(alphabet.length ) ); //numbers 1-alphabet.length
    let d = Math.floor(Math.random()*(alphabet.length ) );
    let e = Math.floor(Math.random()*(alphabet.length ) ); 
    let f = Math.floor(Math.random()*(alphabet.length ) );
    let isIndex = false;

    let struckShipsArr = [];
 
    
        //position ships
      let gridIndex = [grid[r][c],grid[r+1][c]];  //vertical    
      let gridIndexTwo = [grid[s][d],grid[s][d + 1],grid[s][d+2]]; //horizontal
      let gridIndexThree = [grid[t][e],grid[t + 1][e],grid[t + 2][e],grid[t + 3][e],]; //vertical
      let gridIndexFour = [grid[u][f],grid[u][f + 1],grid[u][f+2],grid[u][f+3],grid[u][f+4]]; //horizontal
      console.log(gridIndex,gridIndexTwo,gridIndexThree,gridIndexFour)  //REMOVE THIS AT PRODUCTION
    

    
  
    const strike = () => {
      const enterLocation = readlineSync.question('Enter a location to strike.')
      
      const removeIndex = (arr) => {
        let struckShips = arr.push(enterLocation)
        
      };
      // check to see if the location was already chosen
      let checkStrike = () => {
        for(let i = 0; i < struckShipsArr.length; i++){
        if(struckShipsArr[i] == enterLocation){
          console.log('You have already chosen this location. Miss...')
          
        }
      }
    };
    //check to see how many ships are left
    //if both ships are destroyed, start over or end game
    let remainingShips = () => {
      let gridNum = 1;
      for(let i = 0; i < struckShipsArr.length; i++){
         if(struckShipsArr.includes(grid[s][d]) && struckShipsArr.includes(grid[r][c])){
         const playAgainQuestion = readlineSync.question('You have destroyed all battleships. Would you like to play again? Y/N')
         
          if (struckShipsArr.includes(grid[s][d]) && struckShipsArr.includes(grid[r][c])){
            if(playAgainQuestion == 'Y'){
              createGrid(alphabet.length)
              randomIndex()
              isIndex = true;
            }else if(playAgainQuestion == 'N'){
              isIndex = true;
            }
           }
        
        }else if(enterLocation == grid[r][c] || enterLocation == grid[s][d]){
          console.log(`You have ${gridNum} ship remaining.`)
        }
      }
    };

    
    
    
      
      while(!isIndex){
        if(enterLocation == grid[r][c] || enterLocation == grid[s][d]){
            console.log('Hit!')
            checkStrike()
            removeIndex(struckShipsArr)
            remainingShips()
            
            strike();
        }else if(strike !== grid[r][c] || strike !== grid[s][d]){
         
            console.log('Miss...')
            checkStrike()
            removeIndex(struckShipsArr)
            remainingShips()
            strike();
          
        }
      }
    }
  strike();
}

  randomIndex();

 
    


  
    
    
  



     
        
        
    
 
 
  


 

 










 
  


 

 



  



