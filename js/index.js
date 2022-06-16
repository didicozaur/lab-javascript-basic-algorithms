// iteration1

const hacker1 = "diana";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "daniel";
console.log(`The naigator's name is ${hacker2}`);

// iteration2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if ((hacker1.length = hacker2.length)) {
  console.log(`Wow, you both have equally long names!`);
}

// iteration3: Loops
//3.1
const result = hacker1.toUpperCase().split("").join(" ").replace(/\s+/g, " ");
console.log(result);

// or
let driverCapitals = "";

for (let i = 0; i < hacker1.length; i++) {
  let upperCaseLetter = hacker1[i].toUpperCase();

  // if it is the first letter to be added, then add it without the space
  if (i === 0) {
    driverCapitals = driverCapitals + upperCaseLetter;
  } else {
    driverCapitals = driverCapitals + " " + upperCaseLetter;
  }
}

console.log("driverCapitals", driverCapitals);

//3.2
let reversedName = "";

// a reverse loop:
// starts at the variable length - 1 (the last index),
// goes while i is higher or equal to 0
// and decreases the variable i
for (let i = hacker1.length - 1; i >= 0; i--) {
  reversedName = reversedName + hacker1[i];
}

console.log("reversedName", reversedName);

// Iteration 3.3 lexicographic

// first we identify the longest word for the loop
let longestWord = "";
if (hacker1.length >= hacker2.length) {
  longestWord = hacker1;
} else {
  longestWord = hacker2;
}

// the loop runs for every character and compares them.
for (let i = 0; i < longestWord.length; i++) {
  if (hacker1 === hacker2) {
    // first condition, in case they actually have the same name
    console.log("What?! You both have the same name?");
    break;
  } else if (hacker1[i] < hacker2[i] || hacker1[i] === undefined) {
    // second condition will check if the letter of the driver is lower (goes first) or doesn't exist.
    console.log(`The driver ${hacker1} goes first.`);
    break;
  } else if (hacker2[i] < hacker1[i] || hacker2[i] === undefined) {
    // third condition will check if the letter of the navigator is lower (goes first) or doesn't exist.
    console.log(`Yo, the navigator ${hacker2} goes first definitely.`);
    break;
  }
  // loop will continue running for each character until it found one match, then it breaks the loop.
}

Bonus1:

let paragraph1 = `Morbi pharetra convallis magna ut fringilla.
Sed ac feugiat arcu. Phasellus ut nibh molestie, cursus ante at, malesuada metus.
Praesent lobortis, ante ut aliquam condimentum, justo turpis posuere purus, ac consequat mauris nunc et nulla.
Vivamus eget rhoncus nisi. Sed at turpis in nulla iaculis semper. Praesent dapibus porta quam, at congue justo feugiat sed.
Phasellus sed enim metus. Sed et odio vel lectus ultrices venenatis vitae vel mauris. 
Nunc congue eros ut ligula egestas, tempus venenatis augue fermentum. Duis ut volutpat ligula.
Vivamus elit augue, sollicitudin rhoncus pulvinar ac, tincidunt nec est. Phasellus at hendrerit erat, id egestas sem.
Suspendisse egestas est non elit commodo tristique. Nulla congue condimentum ipsum ac volutpat.`

let countWords = 1;

for (let i = 0; i < paragraph1.length; i++){
	if (paragraph1[i] === " ") {
		countWords++
	}
}
console.log("Amount of words: " + countWords)

let etCount = 0;

for (let i = 0; i < paragraph1.length; i++){
	if (paragraph1[i] === "e" & paragraph1[i + 1]) {
		etCount++
	}
}
console.log("Amount of 'et in paragraph is" + etCount);


// Bonus 2: Palindrome

let phraseToCheck = "tacocat"

// first we create a clean variable with all special characters removed.
let cleanPhrase = ""
for (let i = 0; i < phraseToCheck.length; i++) {
  // only add characters between "A" and "z"
  if ((phraseToCheck[i] >= 'A' && phraseToCheck[i] <= 'z')) {
    cleanPhrase = cleanPhrase + phraseToCheck[i]
  }
}
console.log("cleanPhrase", cleanPhrase)

// then we reverse the phrases
let reversedPhrase = ""

// to do that, we do a reverse loop and add the characters to a new string
for (let i = cleanPhrase.length - 1; i >= 0; i--) {
  reversedPhrase = reversedPhrase + cleanPhrase[i]
}

console.log("reversedPhrase", reversedPhrase)

// then simply compare the two variables to check for a palindrome!
if (cleanPhrase === reversedPhrase) {
  console.log("The phrase is a palindrome!")
} else {
  console.log("The phrase is not a palindrome")
}