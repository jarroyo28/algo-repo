function firstRecurringCharacter(input) {
  let hashTable = {};
  for (let i = 0; i < input.length; i++) {
    if (hashTable[input[i]]) {
      return input[i];
    } else {
      hashTable[input[i]] = 1;
    }
  }
  return undefined;
}

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));

// Time Complexity O(n)
// Space Complexity O(n)
