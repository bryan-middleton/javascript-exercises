const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  }
  let sequence = [1];
  let fib = 0;
  for (let i = 0; i < num - 1; i++) {
    if (sequence.length < 2) {
      fib = sequence[i];
      sequence.push(fib);
    } else {
      fib = sequence[i - 1] + sequence[i];
      sequence.push(fib);
    }
  }
  console.table(sequence);
  return sequence[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
