//Two sum problem: Find two different numbers in an array that add up to the target and return their indices.

//Brute force with nested loops method with O(n²) time complexity and o(1) space complexity
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    let first = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      let second = nums[j];

      if (first + second === target) {
        return [i, j];
      }
    }
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // Answer is [ 0, 1 ] => 2+7 = 9 which mean 2+7 === 9
