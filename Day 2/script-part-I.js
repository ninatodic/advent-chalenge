const fs = require('fs');

// Day 2, first part 
//Each line gives the password policy and then the password. 
//The password policy indicates the lowest and highest number of times a given letter must 
//appear for the password to be valid. For example, 1-3 a means that the password must contain 
//a at least 1 time and at most 3 times.

fs.readFile("./input.txt", (err,data) => { 
    let input;
    if(err){ 
      console.log(err)    
    } else { 
       input = data.toString().split(/\r?\n/); //create array (every element is one line of input)
    }
    let correctPassNumber=0;

    input.forEach(element => {
      //split array element to smaller usable elements (password, letter and edge values)
       const splitedInput = element.split(" ");
       const edgeValues = splitedInput[0].split('-');
       const letter = splitedInput[1].slice(0,1);
       const password = splitedInput[2];
       const re =  new RegExp(letter, 'g');
       
       //count passwords that are correct
       if((password.match(re) !== null) && (password.match(re).length>=edgeValues[0]) && (password.match(re).length<=edgeValues[1])) 
        correctPassNumber++;
       

    });
    console.log(correctPassNumber)
})