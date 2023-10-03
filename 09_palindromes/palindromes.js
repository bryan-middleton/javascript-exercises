const palindromes = function (string) {
  string = string.toLowerCase();
  let forward = Array.from(string.replace(/[\W_]/g, ""));
  let backward = Array.from(string.replace(/[\W_]/g, ""));
  backward.reverse();
  console.log(forward + " : " + backward);
  let palindrome = true;
  console.log(`forward: ${forward} | backward: ${backward}`);
  for (let i = 0; i < forward.length; i++) {
    if (forward[i] !== backward[i]) {
      palindrome = false;
      break;
    }
  }
  console.log(`final result: ${palindrome}`);
  return palindrome;
};

// Do not edit below this line
module.exports = palindromes;
