const sumAll = function (num1, num2) {
  let finalSum = 0;
  let allNums = [];
  let upper = 0;
  let lower = 0;
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 != "number" ||
    typeof num2 != "number"
  ) {
    return "ERROR";
  }
  if (num1 > num2) {
    lower = num2;
    upper = num1;
  } else {
    lower = num1;
    upper = num2;
  }

  for (let i = lower; i <= upper; i++) {
    allNums.push(i);
  }
  for (let num of allNums) {
    finalSum += num;
  }
  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
