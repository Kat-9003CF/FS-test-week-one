/*------------------
1)
Write a function that determines
if a number is a palindrome. A number is a
palindrome if it reads the same forwards and
backwards. 

Note:
- All negative numbers should return false.
- Single numbers should return true.

Test cases:
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(-12321)); // false
console.log(isPalindrome(1)); // true
console.log(isPalindrome(84146)); // false
console.log(isPalindrome(12)); // false
------------------*/

function isPalindrome(num) {
    reversedNum = num.toString(); //create a variable to store reverse
    reversedNum = reversedNum.split("").reverse().join(""); //reverse the original
    return (parseInt(reversedNum) === num); //make reversedNum numbers again, compare and return Boolean
}

console.log(isPalindrome(12321)); // true
console.log(isPalindrome(-12321)); // false
console.log(isPalindrome(1)); // true
console.log(isPalindrome(84146)); // false
console.log(isPalindrome(12)); // false


/*------------------
2)
Create a function that takes a grid
as an argument and adds all the numbers
in that grid together.

Examples:
const y = [[[1], [2]]];
console.log(addGridItems(y)); // 3

const x = [[[1, 0, -3], [2, 4], [3]], [[4, 4, 3], [5, -3, -1], [6, 10]], [[7, -5, -5], [8, 0], [9, 1]]];
console.log(addGridItems(x)); // 50
------------------*/

function addGridItems(grid) {
    let sum = 0;
    for (let i = 0; i<grid.length; i++){
        for (let j = 0; j<grid[i].length; j++){
            for (let k = 0; k<grid[i][j].length; k++){
                sum += grid[i][j][k];
            }
        }
    } return sum;
}

const y = [[[1], [2]]];
console.log(addGridItems(y)); // 3

const x = [[[1, 0, -3], [2, 4], [3]], [[4, 4, 3], [5, -3, -1], [6, 10]], [[7, -5, -5], [8, 0], [9, 1]]];
console.log(addGridItems(x)); // 50

/*------------------
3)
Create a function that turns a string into a
file name: all letters are lowercase, spaces are
swapped for underscores, and it includes a
file extension. 

This function should take two parameters: the string, 
and the type of file it is (so you know what file
extension to add). You only need to cover
the extensions below:
- PDF: .pdf
- image: .png
- JSON: .json

Examples:
console.log(createFileName("Sofia Engineering Resume", "PDF")); // "sofia_engineering_resume.pdf"
console.log(createFileName("Sofia Profile Photo", "image")); // "sofia_profile_photo.png"
console.log(createFileName("Data from Pokemon API", "JSON")); // "data_from_pokemon_api.json"
------------------*/

function createFileName(name, type) {
    filename = name.toLowerCase(); //make lower case
    for (let i in filename){
        filename = filename.replace(" ", "_")  // replace spaces - loop through
    }                                           //add file type
    if (type === "PDF"){
        filename = filename + ".pdf";
    } else if (type === "image"){
        filename = filename + ".png";
    } else if (type === "JSON"){
        filename = filename + ".json";
    } return filename                           //return filename
}

console.log(createFileName("Sofia Engineering Resume", "PDF")); // "sofia_engineering_resume.pdf"
console.log(createFileName("Sofia Profile Photo", "image")); // "sofia_profile_photo.png"
console.log(createFileName("Data from Pokemon API", "JSON")); // "data_from_pokemon_api.json"


/*------------------
4) Print the following pattern
99 96 93 90 88
99 96 93 90
99 96 93
99 96
99

Hints:
- Use a loop within a loop.
------------------*/
const pattern = [99, 96, 93, 90, 88,]

for (let i in pattern){
    for (k =0; k<=pattern.length; k++){
        console.log(pattern);
        pattern.pop();
    }
}
    //This gave the answer as arrays - I wanted to see if I could make it match the brief more closely

const pattern2 = [99, 96, 93, 90, 88,]

for (i=pattern2.length-1; i>=0; i--){
    let endPattern = ""; //empty string for printing the numbers
    let originalLength = pattern2;  //need to maintain record of the original length somewhere
    for (k=0;k<=originalLength.length-1; k++){  //for each number, using the length of the copy of the array
        endPattern += pattern2[k]+ " ";  //add to variable and seperate with a space
        } pattern2.pop();  //remove a number from the array at the end of each 'line'
        console.log (endPattern)
    }

    