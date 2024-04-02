const num1 = -125;
const num2 = 121;
function isPalindrome(number) {
  const numStr = number.toString();
  for (let i = 0; i < numStr.length / 2; i++) {
    if (numStr[i] !== numStr[numStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(num1));
console.log(isPalindrome(num2));
