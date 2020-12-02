const fs = require('fs'); 

fs.readFile("./input.txt", (err,data) => { 
  if(err){ 
    console.log(err)    
  } else { 
    const input = data.toString().split(/\r?\n/);
    const numbers = input.map((i) => Number(i));
    
    (function(){
    for(let i = 0; i<numbers.length; i++){
      for(let j = 1; j<numbers.length-i; j++){
        if(numbers[i]+numbers[j]== 2020){
          return console.log(numbers[i] * numbers[j]);
        }
      }
    }
  })();

  (function(){
    for(let i = 0; i<numbers.length; i++){
      for(let j = 1; j<numbers.length-i; j++){
        for(let k = 2; k<numbers.length-i; k++){
        if(numbers[i]+numbers[j] + numbers[k]== 2020){
          return console.log(numbers[i] * numbers[j] * numbers[k]);
        }
      }
      }
    }
  })();

  }
})

