// Iteration 1: Names and Input
//1.1
let hacker1 = "aaron";
//1.2
console.log(`The driver's name is ${hacker1}`);
//1.3
let hacker2 = "Arnaud";
//1.4
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
//2.1.
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops
//3.1
let capitalDriverName = "";
for (let i = 0; i < hacker1.length; i++) {
  capitalDriverName += `${hacker1[i].toUpperCase()} `;
}
console.log(capitalDriverName);

//3.2
let reverseNavigatorName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseNavigatorName += hacker2[i].toLocaleLowerCase();
}
console.log(reverseNavigatorName);

//3.3
// in the ASCII table characters at the beginning of the alphabet have a lower numeric value
// Also values in ASCII are case sensitive
if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
  console.log("The driver's name goes first.");
} else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker1.toLowerCase() === hacker2.toLowerCase()) {
  console.log("What?! You both have the same name?");
}

//Bonus 1
let firstParagraph =
  "Lorem ipsum et dolor sit amet, consectetur adipiscing elit. Maecenas sapien tortor, rutrum porta aliquet scelerisque, commodo quis turpis. Quisque non efficitur nunc, sed porta mauris.";
let secondParagraph =
  "Quisque et ante nibh, venenatis vel vulputate tempor, scelerisque et dolor. Nunc sed auctor urna. Donec porttitor lorem vitae ex volutpat, tincidunt semper purus gravida. Suspendisse lobortis nec sapien blandit tempus.";
let thirdParagraph =
  "Suspendisse et lobortis nec sapien blandit tempus. Etiam porta felis at nunc suscipit, molestie vestibulum ligula fringilla. Mauris rhoncus est at felis posuere, ornare scelerisque lectus auctor. Integer odio metus, pharetra malesuada porttitor vel, molestie a dolor.";

function countWords(paragraph) {
  // count the number of words in the paragraph
  let pragraphNoSpace = paragraph.split(" ");

  // count the number of times the Latin word "et" appears.
  let etWordCount = 0;
  for (let i = 0; i <= pragraphNoSpace.length; i++) {
    console.log(pragraphNoSpace);
    if (pragraphNoSpace[i] === "et") {
      etWordCount++;
    }
  }
  return `the total number of words is ${pragraphNoSpace.length} and "et" words appears ${etWordCount}.`;
}

console.log(countWords(firstParagraph));
console.log(countWords(secondParagraph));
console.log(countWords(thirdParagraph));
