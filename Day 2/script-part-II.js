const fs = require('fs'); 

// Day 2, second part

//Each policy actually describes two positions in the password, 
//where 1 means the first character, 2 means the second character, and so on. 
//Exactly one of these positions must contain the given letter. Other occurrences 
//of the letter are irrelevant for the purposes of policy enforcement.

fs.readFile("./input.txt", (err,data) => { 
    let input;
    if(err){ 
      console.log(err)    
    } else { 
       input = data.toString().split(/\r?\n/); //create array (every element is one line of input)
    }
    let correctPassNumber=0;

    input.forEach(element => {
      //split array element to smaller usable elements (password, letter and position values)
       const splitedInput = element.split(" ");
       const positionValues = splitedInput[0].split('-');
       const letter = splitedInput[1].slice(0,1);
       const password = splitedInput[2];
       
       //count passwords that are correct
       if(password.charAt(positionValues[0]-1)===(letter) ^ password.charAt(positionValues[1]-1)===(letter))
        correctPassNumber++
    });
    console.log(correctPassNumber)
})