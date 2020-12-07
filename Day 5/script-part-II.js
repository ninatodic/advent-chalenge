const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const fs = require('fs');

// Day 5, first part

fs.readFile('./input.txt', (err, data) => {
  let input;

  //transform input to  array
  if (err) {
    console.log(err);
  } else {
    input = data.toString().split(/\r?\n/);
  }

  let highestBoardingPass = 974;
  let lowestBoardingPass = 974;
  let allBoardingPasses = [];

  //calculate seat ID for each boarding pass
  input.forEach((element) => {
    let lowerBorder = 0;
    let upperBorder = 127;
    let leftBorder = 0;
    let rightBorder = 7;
    for (let i = 0; i < 7; i++) {
      let temp = Math.floor((lowerBorder + upperBorder) / 2);
      if (element.charAt(i) == 'B') {
        lowerBorder = temp;
      } else {
        upperBorder = temp;
      }
    }
    for (i = 7; i < 10; i++) {
      let temp2 = Math.floor((leftBorder + rightBorder) / 2);
      if (element.charAt(i) == 'R') {
        leftBorder = temp2;
      } else {
        rightBorder = temp2;
      }
    }
    //determine lowest ID for all boarding passes in Input
    let currentBoardingPass = upperBorder * 8 + rightBorder;
    allBoardingPasses.push(currentBoardingPass);
    if (currentBoardingPass < lowestBoardingPass)
      lowestBoardingPass = currentBoardingPass;
  });

  //determine sum of all elements if none were missing
  let sum = 0;
  let sum2 = 0;
  for (let a = 99; a <= 974; a++) {
    sum += a;
  }

  //determine sum of all Ids from input
  allBoardingPasses.forEach((element) => {
    sum2 += element;
  });

  //difference between sums is id that is missing
  console.log(sum - sum2);
});
