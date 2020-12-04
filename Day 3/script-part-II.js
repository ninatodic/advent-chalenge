const fs = require('fs');

// Day 3, second part

fs.readFile('./input.txt', (err, data) => {
  let input;

  //transform input to 2d array
  if (err) {
    console.log(err);
  } else {
    input = data
      .toString()
      .split(/\r?\n/)
      .map(function (el) {
        return el.split('');
      });
  }

  // Get the values of all slopes
  let firstSlope = determineSlope(1, 1, input);
  let secondSlope = determineSlope(3, 1, input);
  let thirdSlope = determineSlope(5, 1, input);
  let fourthSlope = determineSlope(7, 1, input);
  let fifthSlope = determineSlope(1, 2, input);

  console.log(firstSlope * secondSlope * thirdSlope * fourthSlope * fifthSlope);
});

//determine how many trees would be encountered with different slopes
function determineSlope(a, b, input) {
  //determine where tree would be hit on the slope (mark it with 'X')
  for (let i = 0, j = 0; i < input.length - 1; i = i + b) {
    if (
      input[i + b][(j + a) % input[i].length] === '#'
        ? (input[i + b][(j + a) % input[i].length] = 'X')
        : (input[i + b][(j + a) % input[i].length] = 'O')
    );
    j += a;
  }

  // count trees encountered on slope
  let countTrees = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (input[i][j] == 'X') countTrees++;
    }
  }

  //reverse input
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (input[i][j] == 'X') input[i][j] = '#';
      if (input[i][j] == 'O') input[i][j] = '.';
    }
  }
  return countTrees;
}
