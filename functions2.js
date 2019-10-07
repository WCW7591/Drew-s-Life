function sayHelloWorld(){
    console.log("Hello, world!");
  }
  sayHelloWorld(); 
  // Expected output: "Hello, world!"
 function love(){
    console.log("javascripts ok");
  }

  love();
  // friendName is our parameter. It's a placeholder that we can use inside the function
function greetAFriend(friendName){
    console.log(`Hello, ${friendName}!`)
  }
  
  // When we call the function, we give it the actual name that we want to print.
  greetAFriend("Dwayne");
  function greetAFriend(friendName, timeOfDay){
    var greeting;
    if(timeOfDay === "morning"){
      greeting = "Good morning";
    } else if (timeOfDay === "afternoon"){
      greeting = "Good afternoon";
    } else if (timeOfDay === "evening"){
      greeting = "Good evening";
    } else {
      greeting = "Hello";
    }
    var personalGreeting = `${greeting}, ${friendName}!`;
    console.log();
  }
  
  greetAFriend("Todd", "evening"); // Good evening, Todd!
  greetAFriend("Jamie", "morning"); // Good morning, Jamie!
  greetAFriend("Hannah", "afternoon"); // Good afternoon, Hannah!
  greetAFriend("Norman", "midnight"); // Hello, Norman!

  function Vacation();
  console.log("sleep");
  var finishedPizza = `A ${size} pizza with ${crustType} crust and ${toppingsArray.join(", ")} on top.`
   return finishedPizza;
 }
 var myPizza = makeAPizza("wheat", "large", ["green peppers", "onions", "pepperoni"]);
 var yourPizza = makeAPizza("white", "medium", ["anchovies", "feta", "pineapple"]);
console.log(myPizza);
console.log(yourPizza);
function makeATaco(typeOfshell, topping){
   var finishedTaco = `Your ${'typeOfshell'} taco with ${topping} is ready.`
   return finishedTaco;
 }
 var myTaco = makeATaco("soft shell", "chicken");
 var yourTaco = makeATaco("Hard", "Beef");
console.log(myTaco);
console.log(yourTaco);