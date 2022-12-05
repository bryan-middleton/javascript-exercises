const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(nums) {
  const sumAll = nums.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
  return sumAll;
}
const multiply = function(numbers) {
  const allNumbers = Array.from(numbers);
  const multiplyAll = allNumbers.reduce((accumulator,currentVal) => accumulator*currentVal);
  return multiplyAll;
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(num) {
	const allNums =[];
  let factorial =0;
  if (num!==0){
    for (i=1;i<num+1;i++){
      allNums.push(i);
    }
    factorial = allNums.reduce((accumulator,currentVal) => accumulator*currentVal)
  }
  else{
    factorial = 1;
  };
  return factorial;

}
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
