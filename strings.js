// 1
let word = "beautiful";
let remove= word.substr(-4,4);
console.log(remove);

// 2
const food = "I was feeling hungry today";
let k=" eat"
var pos=5;
 var sentence = [food.slice(0, pos)+ k+ food.slice(pos)];
console.log(sentence);


// 3
const story= "The quick brown the fox jumps over the lazy dog";
var line1= (story.match(/the/g)|| [].length);
console.log(line1)
var line2= (story.match(/brown/g)|| [].length);
console.log(line2)

//4
const string1 = "We are now going to school";
console.log(string1.indexOf("now"));
const string2 = "The child was sitting on the table before it fell";
console.log(string2.indexOf("sitting"));

// 5
const word2="wonderful";
console.log(word2.toUpperCase());

// const word3= "amazing", "BEneath";
let r = "amazing, BEneath";
console.log(r.toLowerCase);
let l="A beautiful wedding";
l=l.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
console.log(l);

