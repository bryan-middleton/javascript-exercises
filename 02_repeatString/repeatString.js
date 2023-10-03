const repeatString = function (message, number) {
  let string = "";
  if (number < 0) {
    string = "ERROR";
  } else {
    for (let i = 0; i < number; i++) {
      string += message;
    }
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
