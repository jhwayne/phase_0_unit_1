// I worked on this challenge [by myself]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 
 //Rescue Mission

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveRight();
this.moveDown()
this.attackNearbyEnemy();

 //Grab The Mushroom

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

//Drink Me

this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.moveRight();
this.attackNearbyEnemy(

//Taunt The Guards
this.moveRight();
this.bustDownDoor();

this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Attack!");
this.say("Kill!");
this.attackNearbyEnemy();
this.attackNearbyEnemy();
this.moveRight();
this.say("Follow Me");
this.moveRight();


//Its A Trap!
// Taunt the Ogre and run for cover!
this.moveDown();
this.moveDown();
this.say("Hey fucker");
this.moveUp();
this.moveUp();

//Taunt
this.say("Hey!");

// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!
this.say("Hey asshole");
this.say("Come over here");
this.say("F U!");
this.say("DIE!");

//Cowardly Taunt
this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");

// Run your soldier out where the ogres can hear you.
this.moveXY(60,40);
// Say something!
this.say("Hey");
// Then run back behind the arrow towers for safety.
this.moveXY(69, 14);
// You can shift+click on the map to insert coordinates.

 //Commanding Followers
 this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");

// Saying anything with "follow" in it will get nearby soldiers
// to follow you
this.say("Follow me!");
this.moveXY(64,45);
this.say("attack!");

//Mobile Artillery
this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres

// If they survive a hit, ogres retaliate!
// Larger ogres take more than one hit...
// So, position and aim carefully.
this.moveXY(66,24);
this.attackXY(70,53);
this.attackXY(69,47);
this.moveXY(53, 44);
this.attackXY(50,60);
this.moveXY(57,40);
this.attackXY(51,50);

 
// Reflection:
//The 'this' in the game is refering to an object(Throin). The '()' are the parameters for example
//the x,y in the game. I am unsure of the point of semi-colons but they are necessacary to seperate 
// each method. A lot of the game was trial and error. Writing in some code watching
// it play out and if it worked great!, if not delete and try again. I tihnk this
//game was great for getting in the mind set of coding with JavaScript.
// Write your reflection here.