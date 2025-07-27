const fruits = ["apple", "banana", "kiwi"];

fruits.push("mango");
fruits.unshift("orange");
fruits.pop(); //removes last
fruits.shift(); //removes first

// console.log(fruits[fruits.length - 1]);

const fruits1 = ["apple", "banana", "kiwi"];
fruits1.push("mango");
fruits1.unshift("orange");

for (let fruit of fruits1) {
    console.log(fruit);
}

const upperFruits1 = fruits1.map(fruit => fruit.toUpperCase());

console.log(upperFruits1);

const capitalized = fruits1.map(fruit => fruit.charAt(0).toUpperCase() + fruit.slice(1).toLowerCase());
console.log(capitalized);

const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);

console.log(numbers);

const numbersArray = [...numbers];
console.log(numbersArray);

for (let num of numbers) {
    console.log(num);
}

const userAges = new Map();
userAges.set("alice", 23);
userAges.set("david", 22);
userAges.set("tom", 21);

console.log(userAges.get("tom"));

for (let [name, age] of userAges) {
    console.log(`${name} is ${age} years old.`);
}

// find the first non repeating character in a string

function findSecondNonRepeatingChar(word) {
    const count = new Map();
    for (let char of word) {
        count.set(char, (count.get(char) || 0) + 1);
    }
    let uniqueCount = 0;
    for (let char of word) {
        if (count.get(char) === 1) {
            uniqueCount++;
            if (uniqueCount === 2) return char;
        };
    }
    return null;
}

console.log(findSecondNonRepeatingChar("wertyuwejrhfejhbfkjerfhgbuergbehbrghebk"));

// check if 2 strings are anagrams (contain same letters and same same number of those letters)

function isAnagram (a, b) {
    if (a.length !== b.length) return false;

    const count = new Map();
    for (let char of a) {
        count.set(char, (count.get(char) || 0) + 1);
    }
    for (let char of b) {
        if (!count.has(char) || count.get(char) === 0) return false;
        count.set(char, count.get(char) - 1);
    }
    return true;
}

console.log(isAnagram("qwerty", "ytrewq"));

// group numbers in an array by frequesncy

function groupByFreq(array) {
    const freq = new Map();
    for (let num of array) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    const result = [...freq.entries()];
    return result;
}

console.log(groupByFreq([1,1,1,1,2,3,2,3,4,4,4,5,5,5,5,5,5]));

// return unique elements in order

function getUnique(array) {
    const seen = new Set();
    const result = [];
    for (let num of array) {
        if (!seen.has(num)) {
            seen.add(num);
            result.push(num);
        }
    }
    return result.sort((a, b) => b-a);
}

console.log(getUnique([1,2,3,2,3,2,4,5,4,5,4,5,6,7,6,6,7,8,8,7,7,8,9,7,7,9,7,7,8]));

// return the most repeating number

function returnMostFrequent(array) {
    const countMap = new Map();
    let maxCount = 0;
    let mostFrequestElement = null;
    for (let num of array) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
        if (countMap.get(num) > maxCount) {
            maxCount = countMap.get(num);
            mostFrequestElement = num;
        }
    }
    return mostFrequestElement;
}

console.log(returnMostFrequent([1,2,2,2,2,2,3,3,3,3,3,4,4]));

// returns the sentence with each work capitalizes

function capitalWords(sentence) {
    const words = sentence.split(" ");
    const capitalized = words.map(word => {
        if (word.length === 0) return "";
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    return capitalized.join(" ");
}

console.log(capitalWords("this is a test sentenCE"));

// reverse the sentence 

function reverseWords(sentence) {
    const words = sentence.trim().split(/\s+/);
    const reversed = words.reverse();
    return reversed.join(" ");
}

console.log(reverseWords("this is test bhatt, tirth"));

// return common numbers in 2 arrays 

function commonEntries(array1, array2) {
    const set1 = new Set(array1);
    const result = [];
    for (let num of array2) {
        if (set1.has(num)) {
            result.push(num);
        }
    }
    return result.sort((a,b) => b-a);
}
console.log(commonEntries([1,2,3,4,5], [3,4,5,6,7]));

function findCommon(array1, array2) {
    const set1 = new Set(array1);
    const result = [];
    for (let num of array2) {
        if (set1.has(num)) {
            result.push(num);
        }
    }
    return result;
}
console.log(findCommon([1,2,3,4,5], [3,4,5,6,7]));

// first repeating and non-repeating char

function findRepeats(string) {
    const count = new Map();
    for (let char of string) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    let firstRepeated = null;
    let firstNonRepeated = null;
    const seen = new Set();

    for (let char of string) {
        if (!firstRepeated && seen.has(char)) {
            firstRepeated = char;
        }
        seen.add(char);
        if (!firstNonRepeated && count.get(char) === 1) {
            firstNonRepeated = char;
        }
        if (firstRepeated && firstNonRepeated) break;
    }
    return {firstRepeated, firstNonRepeated};
}

console.log(findRepeats("abasdgdggg"));

// find pairs from an arry to match a sum target

function findSumPairs(array, target) {
    const seen = new Set();
    const result = [];
    for (let num of array) {
        complement = target - num;
        if (seen.has(complement)) {
            result.push([complement, num]);
        }
        seen.add(num);
    }
    return result;
}
console.log(findSumPairs([2, 4, -1, 6, 1, 3, 7], 5));

// Find the First Non-Repeating Word in a Sentence

function firstNonRepeatingWord(sentence) {
    const cleaned = sentence.toLowerCase().replace(/[^\w\s]/g, " ");
    const words = cleaned.split(/\s+/);
    const countMap = new Map();
    for (let word of words) {
        countMap.set(word, (countMap.get(word) || 0) + 1);
    }
    for (let word of words) {
        if (countMap.get(word) === 1) {
            return word;
        }
    }
    return null;
}

console.log(firstNonRepeatingWord("This is a test. This test is simple."));

// find all duplicate entries in an array 

function findDuplicates(array) {
    const countMap = new Map();
    const result = [];
    const added = new Set();

    for (let num of array) {
        countMap.set(num, (countMap.get(num) || 0) + 1);

        if (countMap.get(num) === 2 && !added.has(num)) {
            result.push(num);
            added.add(num);
        }
    }
    return result;
}

console.log(findDuplicates([1, 2, 3, 2, 4, 3, 5, 1, 6]));

// sum of numbers found in a string

function sumNumbersInString(string) {
    const matches = string.match(/\d+/g);
    if (!matches) return 0;
    const sum = matches.reduce((total, numStr) => {
        return total + parseInt(numStr);
    }, 0);
    return sum;
}

console.log(sumNumbersInString("abc12xyz34p5"));

// expand compressed string

