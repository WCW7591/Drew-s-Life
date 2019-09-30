var i = 1;

while(i < 20){
  console.log("Hello, world");
  i++;
}

var moviesArray = ["Casablanca", "Star Wars", "Singing in the Rain", "The Wizard of Oz", "Die Hard","Coraline"];

var i = 0; 

while(i < moviesArray.length){
  console.log(moviesArray[i]);
  i++;
}

var i = 1;

while(i <= 100){
  console.log("Quack, Quack");
  i++;
}
var favoriteFoods = ["white pizza", "hamburgers","mango chilli chicken"];
var i = 0;
for(var i = 0; i < favoriteFoods.length; i++){
    console.log(favoriteFoods[i])
}
var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]
var i= 0;
for(var i = 0; i < cohortOneStudents.length; i++){
   console.log(cohortOneStudents[i])
}
var myInterests = ["hiking","coding","math","30 Rock","pizza"]
for(var ZmyInterests = 0; ZmyInterests<myInterests.length; ZmyInterests++){
   console.log("One of my interests is: ",myInterests[ZmyInterests])
}
var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
for(var i = 0; i < harryPotterTitles.length; i++){
   console.log(harryPotterTitles[i]);
}
var grade = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
if (grade >= 0 && grade <= 69){console.log("You got an F")}
if (grade >= 70 && grade <= 76){console.log("You got an D")}
if (grade >= 77 && grade <= 84){console.log("You got an C")}
if (grade >= 84 && grade <= 92){console.log("You got an B")}
   if (grade >= 93 && grade <= 100){console.log("You got an A")}