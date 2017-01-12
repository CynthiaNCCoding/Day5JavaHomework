
// ******  Exercise 1  *****

function addNumbers(numberA, numberB) {
  return numberA + numberB;
}

var twoPlusTwo = addNumbers(2, 2)

console.log(twoPlusTwo);

// console.log(twoPlusTwo) // 4



// ******  Exercise 2  *****

function yell(str) {
    return str.toUpperCase("");
  }

console.log(yell("cynthia"))

// first attempt that was WRONG (for my own reference)
  // function yell(str) {
  //     return str.toUpperCase();
  //   }
  // console.log(yell "cynthia")

// make it console print 10 times
function yell(str) {
    return str.toUpperCase("");
    loop (str + 10);
  }

for (var i = 0; i < 10; i++) {

console.log(yell("cynthia"))
}

// ******  Exercise 3  *****
// Write a function called longest that returns the longest of two input strings or arrays.
var arr = ['a', 'b'];

var lgth = 0;
var longest;

for(var i=0; i < arr.length; i++){
    if(arr[i].length > lgth){
        var lgth = arr[i].length;
        longest = arr[i];
    }
}

console.log(longest);


// ******  Exercise 4  *****
// Write a function called isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, uppercase or lowercase. The function should return false if the character is not a vowel.
// needed more time.  copied this from the internet
var findVowel = function(letter) {

    var vowels = ["a", "e", "i", "o", "u"];

    for(var i = 0; i < vowels.length; i++){ // don't use for...in with Arrays
        if(letter === vowels[i]){// Use array indexing instead
            return true;
         }
    }

    return false;// This is after the loop

};
