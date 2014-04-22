// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Jake Wayne
//  2.Phillip Smith
//	3.Matthew Kuzio


var adam = {
  name: "Adam Sandler",
  age: 47,
  quote: "That's your home! Are you too good for your home?!"
}

var kristen = {
  name: "Kristen Bell",
  age: 33,
  quote: "Do you wnat to build a snowman?"
}

var jim = {
  name: "Jim Carrey",
  age: 52,
  quote: "...So you're telling me there's a chance? YEAH!"
}


var client = function(name, age, quote){
    this.name = name;
    this.age = age;
    this.quote = quote;
}


var clientlist = [adam,kristen,jim]

for (var i=0; i < clientlist.length; i ++){
    console.log(clientlist[i].name)
}



var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";




//  Your Reflection: This GPS went well. The biggest challenge was creating the function. I am still getting used to the whole "driver" "navigator" roles. 