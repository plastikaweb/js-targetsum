// canSum(targetSum, arrayOfNumbers)
// check if any value from the array can give us the targetSum by summing or is multiple
// canSum(7, [5, 3, 4, 7]) -> true
// canSum(7, [2, 4]) -> false

const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo)) {
      return true;
    }
  }

  memo[targetSum] = false;
  return false;
};

console.log(canSum(9, [3])); // true
console.log(canSum(7, [14, 3, 4])); // true
console.log(canSum(7, [2, 4, 7])); // false
console.log(canSum(7, [8, 2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false
