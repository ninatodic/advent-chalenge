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

  //calculate seat ID for each boarding pass
  let highestBoardingPass = 0;

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
    //determine highest ID for all boarding passes in Input
    let currentBoardingPass = upperBorder * 8 + rightBorder;
    if (currentBoardingPass > highestBoardingPass)
      highestBoardingPass = currentBoardingPass;
  });

  console.log(highestBoardingPass);
});
