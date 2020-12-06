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

    //transform string so each passport is an object
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
    input.forEach((passport) => {
      const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
      if (required.every((x) => x in passport)) {
        if (isByrValid(passport)) {
          if (isIyrValid(passport)) {
            if (isEyrValid(passport)) {
              if (isHgtValid(passport)) {
                if (isHclValid(passport)) {
                  if (isEclValid(passport)) {
                    if (isPidValid(passport)) {
                      numberOfValidPassports++;
                    }
                  }
                }
              }
            }
          }
        }
      }
    });

    console.log(numberOfValidPassports);
  }
});

function isByrValid(passport) {
  return passport.byr <= 2002 && passport.byr >= 1920 ? true : false;
}

function isIyrValid(passport) {
  return passport.iyr <= 2020 && passport.iyr >= 2010 ? true : false;
}

function isEyrValid(passport) {
  return passport.eyr <= 2030 && passport.eyr >= 2020 ? true : false;
}

function isHgtValid(passport) {
  if (
    passport.hgt.slice(-2) == 'cm' &&
    passport.hgt.slice(0, -2) >= 150 &&
    passport.hgt.slice(0, -2) <= 193
  ) {
    return true;
  } else if (
    passport.hgt.slice(-2) == 'in' &&
    passport.hgt.slice(0, -2) >= 59 &&
    passport.hgt.slice(0, -2) <= 76
  ) {
    return true;
  } else {
    return false;
  }
}

function isHclValid(passport) {
  const reg = /^#[0-9a-f]{6}/i;
  if (reg.test(passport.hcl) && passport.hcl.length == 7) return true;
}

function isEclValid(passport) {
  const validColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
  if (validColors.some((x) => x == passport.ecl)) return true;
}

function isPidValid(passport) {
  if (!isNaN(passport.pid) && passport.pid.length == 9) return true;
}
