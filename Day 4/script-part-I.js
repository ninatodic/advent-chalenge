const fs = require('fs');

// Day 4, first part

fs.readFile('./input.txt', (err, data) => {
  let input;

  //transform input so each passport is formated string
  if (err) {
    console.log(err);
  } else {
    input = data
      .toString()
      .replace(/(\r\n|\n|\r)/gm, '?')
      .split('?')
      .toString()
      .split(',,')
      .map((x) => {
        return x.replace(/,/g, ' ');
      });

    //transform string so each passport is object
    input = input.map((element) => {
      var properties = element.split(' ');
      var obj = {};
      properties.forEach(function (property) {
        var tup = property.split(':');
        obj[tup[0]] = tup[1];
      });
      return obj;
    });

    let numberOfValidPassports = 0;

    //check if passports have all required informations and count the ones that do
    input.forEach((key) => {
      const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
      if (required.every((x) => x in key)) numberOfValidPassports++;
    });

    console.log(numberOfValidPassports);
  }
});
