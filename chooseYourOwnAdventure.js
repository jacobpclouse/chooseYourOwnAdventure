/* Going to have 3 classes: Thief, Mage, and Warrior
Each class will have certain stats that let you do different things in dialogue

Parameters: 
- Stats will be stored in an object == yes
- Stats will go from 1 (lowest) to 10 (highest) == yes

Ideas:
- Custom class == yes
- battles == yes
- options to skip battles/encounters because of stats == yes

Questions:
- Find out how to list pre-made classes to the prompt on screen (instead of console)
*/


/* Functions */
/* Creating Custom Class Template */
function gameClass(nameInput, heightInput, strengthInput, intelligenceInput, stealthInput) {
    this.name = nameInput;
    this.height = heightInput;
    this.strength = strengthInput;
    this.intelligence = intelligenceInput;
    this.stealth = stealthInput;
};

/* Pseudo - Random Number Generator (Pass in Max Number, Exclusive)
Found on MDN */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

/* Premade Classes */
/* Theif Class */
thief = {
    name: "Thief",
    height: "2",
    strength: "4",
    intelligence: "6",
    stealth: "10"
};

/* Mage Class */
mage = {
    name: "Mage",
    height: "5",
    strength: "1",
    intelligence: "10",
    stealth: "5"
};

/* Warrior Class */
warrior = {
    name: "Warrior",
    height: "10",
    strength: "10",
    intelligence: "1",
    stealth: "1"
};


/* Variables */
playerClass = {};
selectPreMade = 0;
classList = ["thief", "mage", "warrior"];

/* Showing Stats of Default Classes &
Asking User if they Want a Custom Class*/
choosingPreMade = prompt(
    `Pre-Made Class Stats are listed in the console.
    
    Do you want to use a Pre-Made Class? 
    
    1 = I want to make my own class
    0 = Use a Premade Class`
);

if (choosingPreMade == 1) {
    /* Asking User for Custom Class Values */
    playerClass = new gameClass(
        prompt(`What is your class called?`),
        prompt(`What is your class's height? 
        (from 1 - 10)`),
        prompt(`What is your class's strength? 
        (from 1 - 10)`),
        prompt(`What is your class's intelligence?
        (from 1 - 10)`),
        prompt(`What is your class's stealth?
        (from 1 - 10)`)
    );
    alert(`
    Your Class: ${playerClass["name"]}
    Height:${playerClass["height"]}
    Strength:${playerClass["strength"]}
    Intelligence:${playerClass["intelligence"]}
    Stealth:${playerClass["stealth"]}
    `);
} else {
    do {
       selectPreMade = prompt(
        `What Pre-Made Class would you like?
        
        1 for Theif
        2 for Mage
        3 for Warriror`
    ); 
    } while (selectPreMade != 1 && selectPreMade != 2 && selectPreMade != 3);
    
    if (selectPreMade == 1){
        playerClass = thief;
    } else if (selectPreMade == 2){
        playerClass = mage;
    } else if (selectPreMade == 3){
        playerClass = warrior;
    } else {
        alert(`Error: An invalid class was selected`)
    };

    alert(`You selected the ${playerClass.name} class`);
}

console.log(`Completed Class Selection!`);




/* Story */
/* Intro */

alert(
    `You are a lowly ${playerClass.name}, down on their luck. You have little money and even less pride left.
    You managed to stumble into some run down bar called the 'Hog's Head' and convince the owner to give you
    a job cleaning up after drunken patrons (though one might think that he gave you this job more out of pity 
    than anything else).

    There you are, mopping up puke and God knows what else. Wondering when your life is going to change.

    Today is that fateful day.
`)

console.log(`You are a lowly ${playerClass.name}, down on their luck. You have little money and even less pride left.
You managed to stumble into some run down bar called the 'Hog's Head' and convince the owner to give you
a job cleaning up after drunken patrons (though one might think that he gave you this job more out of pity 
than anything else).

There you are, mopping up puke and God knows what else. Wondering when your life is going to change.

Today is that fateful day.
`);


/* ------------- */

alert(
    `You have just finished up mopping the floor when a man walks into the bar. From the way he is staggering about,
    you can tell that he is very, VERY inebriated `
);