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