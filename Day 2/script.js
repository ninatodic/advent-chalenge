const fs = require('fs'); 

fs.readFile("./input.txt", (err,data) => { 
    let input;
    if(err){ 
      console.log(err)    
    } else { 
       input = data.toString().split(/\r?\n/);
    }
    let correctPassNumber=0;

    input.forEach(element => {
       const splitedInput = element.split(" ");
       const edgeValues = splitedInput[0].split('-');
       const letter = splitedInput[1].slice(0,1);
       const password = splitedInput[2];
       const re =  new RegExp(letter, 'g');
       
       if((password.match(re) !== null) && (password.match(re).length>=edgeValues[0]) && (password.match(re).length<=edgeValues[1])) 
        correctPassNumber++;
       

    });
    console.log(correctPassNumber)
})