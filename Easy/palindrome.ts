// Goal is to find the given number is palindrome or not

//Number reversal method with O(log n) time complexity i.e Repeatedly dividing the input → usually O(log n) and O(1) space complexity
function isPalindrome(x: number): boolean {
  const original = x;
  let reverse = 0;

  while (x > 0) {
    const digit = x % 10;
    reverse = reverse * 10 + digit;
    x = Math.floor(x / 10);
  }

  return original == reverse;
}

console.log(`the give number is ${isPalindrome(121)} palindrome`); //the give number is true palindrome
