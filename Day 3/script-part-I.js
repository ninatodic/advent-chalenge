const fs = require('fs');

// Day 3, first part

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

  //determine where tree would be hit on the slope (mark it with 'X')
  for (let i = 0, j = 0; i < input.length - 1; i++) {
    if (
      input[i + 1][(j + 3) % input[i].length] === '#'
        ? (input[i + 1][(j + 3) % input[i].length] = 'X')
        : (input[i + 1][(j + 3) % input[i].length] = 'O')
    );
    j += 3;
  }

  // count trees encountered on slope
  let countTrees = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (input[i][j] == 'X') countTrees++;
    }
  }
  console.log(countTrees);
});
