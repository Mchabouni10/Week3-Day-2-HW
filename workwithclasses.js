//1. create class cat with 3 proproties and 3 methodes with two instances 
/*
class cat {  //we define class name as cat 
    constructor(name, age, weight) { //the class has constructor with 3 proprieties name, age and weight 
        this.name = name; 
        this.age = age;
        this.weight = weight;
    }
      eat(food) {  //first methode
        console.log(` ${this.name} is ${this.age}  years old and wieght ${this.weight} pounds is eating ${food}.`);
      }
      sleep(hours) { //second methode
        console.log(`${this.name} is ${this.age} years old and wieght ${this.weight} pounds is sleeping for ${hours} hours.`);
      }
      drink(drinks) { //third methode
        console.log(`${this.name} is ${this.age} years old and is wieght ${this.weight} pounds driniking ${drinks}`);
      }
      toy(play) { //third methode
        console.log(`${this.name} is ${this.age} years old and wieght ${this.weight} pounds is playing with ${play}`);
      }
}
const cat1 = new cat('tom', 5, 12); // create first instance for cat class
const cat2 = new cat('garfield', 7, 15);  // create second instance for cat class

console.log(cat1); //log the proprietes of the first instance
console.log(cat2);  //log the proprietes of the second instance

cat1.eat("Tuna");  //invoke methode eat for the fist instance
cat2.eat("Chicken"); //invoke methode eat for the second instance

cat1.sleep("10");  //invoke methode sleep for the fist instance
cat2.sleep("12");  //invoke methode sleep for the second instance

cat1.drink("water");  //invoke methode drink for the fist instance cat1
cat2.drink("water");  //invoke methode drink for the second instance cat2

cat1.toy("duck");  //invoke methode toy for the fist instance cat1
cat2.toy("bone");  //invoke methode toy for the second instance cat2
*/

class Pirate {    //cretae class called pirate
    constructor(name, rank, weapon) { //create constructor with 3 properties name, rank and weapon
      this.name = name; //propertie 1
      this.rank = rank;  //propertie 2
      this.weapon = weapon; //propertie 3
    }
      mood() { // first method called mood
        console.log(`${this.name}, the ${this.rank},  "Always in smiling"`);
      }
    
      attack() { // second method called attack
        console.log(`${this.name}, the ${this.rank}, attacks with their ${this.weapon}!`);
      }
    
      superpower() { // third method called superpower
        console.log(`${this.name}, the ${this.rank}, get very special power when get angry.`);
      }
  }
const Pirate1 = new Pirate('Luffy','SuperCaptain', 'Punch');
console.log(Pirate1)
console.log()
 
const jollyRoger = [  // first Array with 3 pirates from jollyRoger
    new Pirate('Captain Hook', 'Captain', 'hook hand'), // intiate pirate one on jollyRoger crew
    new Pirate('Smee', 'Crew Member', 'umbrella'),   // intiate pirate two on jollyRoger crew
    new Pirate('Blackbeard', 'First Mate', 'flintlock pistol'),  // intiate pirate three on jollyRoger crew
  ];
  
  const blackPearl = [  // second Array with 3 pirates from jollyRoger
    new Pirate('Jack Sparrow', 'Captain', 'cutlass'),  // intiate pirate one on blackPearl crew
    new Pirate('Barbossa', 'First Mate', 'flintlock pistol'),  // intiate pirate two on blackPearl crew
    new Pirate('Elizabeth Swann', 'Crew Member', 'sword'),   // intiate pirate two on blackPearl crew
  ];
  


jollyRoger.forEach(pirate => {  //loop over each pirates of jollyRoger crew that print name, rank and weapon
    console.log(`Name: ${pirate.name}`);
    console.log(`Rank: ${pirate.rank}`);
    console.log(`Weapon: ${pirate.weapon}`);
    console.log(); // leave it Empty to get separtion space between each invoke
  });
  
  blackPearl.forEach(pirate => {
    console.log(`Name: ${pirate.name}`);
    console.log(`Rank: ${pirate.rank}`);
    console.log(`Weapon: ${pirate.weapon}`);
    console.log();  // leave it Empty to get separtion space between each invoke
  });
  
