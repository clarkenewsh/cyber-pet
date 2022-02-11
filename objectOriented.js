
// Activity 2 - Cyber Pet 

// Buttons
const btnPlay = document.querySelector('#btnPlay');
const btnFeed = document.querySelector('#btnFeed');
const btnDrink = document.querySelector('#btnDrink');
const btnWalk = document.querySelector('#btnWalk');

// Pet message container
const petMsg = document.querySelector('.petMsg');


class CyberPet {
    constructor(name){
        this._name = name;
        this._hunger = 50;
        this._thirst = 50;
        this._isHappy = 50;
        this._isSleepy = 50;
        this._isBored = 50;
    }

    get name(){
        return this._name;
    }

    get hunger(){
        return this._hunger;
    }

    get thirst(){
        return this._thirst;
    }

    get isHappy(){
        return this._isHappy;
    }

    get isSleepy(){
        return this._isSleepy;
    }

    eat() {
        this._hunger -= 10;
        this._isSleepy += 5;
        this._thirst += 5;
        if (this._hunger >= 90) {
            // console.log(`${this._name} needs feeding`);
            petMsg.textContent = `${this._name} needs feeding`;

        } else if(this._hunger <= 0) {
            // console.log(`${this._name} doesn't want any more food`);
            petMsg.textContent = `${this._name} doesn't want any more food!`;
            return;
        } else {
            // console.log(`Mmmmmm yummy! Hunger is now ${this._hunger}`) ;
            petMsg.textContent = `Mmmmmm yummy! Hunger is now ${this._hunger}` ;
        }
    }

    drink() {
        this._thirst -= 5;
        if (this._thirst >= 90) {
            // console.log(`${this._name} needs a drink`);
            petMsg.textContent = `${this._name} needs a drink`;

        } else if (this._thirst <= 0) {
            // console.log(`${this._name} is full of water!`);
            petMsg.textContent = `${this._name} is full of water!`;
        }
        
        else {
            // console.log(`Slurrrp! Thirst level is now ${this._thirst}`);
            petMsg.textContent = `Slurrrp! Thirst level is now ${this._thirst}`;
        }
        
    }

    play() {
        this._isHappy += 10;
        this._isBored -= 10;
        this._thirst += 10;
        if(this._isBored >= 90) {
            petMsg.textContent = `${this._name} needs playtime`;
        } else if (this._isBored <= 0) {
            petMsg.textContent = `Im happpyyyy!! ${this._name}. I dont want to play anymore`;
            return;
        }else {
            petMsg.textContent = `Yaayyyy, play time! Happiness level is now ${this._isHappy} & ${this._isBored} bored`;
        }
    }

    sleep() {
        this._isSleepy -= 10;
        console.log(`zzzzzzzzzzz... sleep level is ${this._isSleepy}`);
    }
}

// Create new pet
const pet1 = new CyberPet("Pet 1");

console.log(pet1);
pet1.eat();
pet1.drink();
pet1.play();
// testing object is updating
console.log(pet1);
pet1.play();


// CyberPet sub class Dog
class Dog extends CyberPet {
    constructor (name, bark, walk) {
        super(name);
        this._bark = bark;
        this._walk = 50;
    }

    get bark () {
        return this._bark;
    }

    get walk () {
        return this._walk;
    }

    bark() {
        return this._bark = "woof";
    }

    walk() {
        this._walk ++;
        this._isHappy += 15;
        this._thirst += 5;
        this._isBored -= 15;
        this._isSleepy += 10;
        console.log(`Walkies time... walkies level is ${this._isSleepy}`);
    }
}

// Create new dog 
const newDog = new Dog("Gwen");

newDog.name;
newDog.bark();
newDog.walk();
newDog.eat();
// testing object is updating
console.log(newDog);


// CyberPet sub class Dragon
class Dragon extends CyberPet {
    constructor (name, breatheFire) {
        super(name);
        this._breatheFire = breatheFire;
    }

    get breatheFire() {
        return this._breatheFire;
    }

}

// Create new Dragon
const newDragon = new Dragon("I'm a Dragon", true);
console.log(newDragon);


// Cyber Pet Button Listeners
btnPlay.addEventListener('click', () => {
    newDog.play()
})

btnFeed.addEventListener('click', () => {
    // console.log('clicked');
    newDog.eat();
})

btnDrink.addEventListener('click', () => {
    // console.log('clicked');
    newDog.drink();
})

// btnWalk.addEventListener('click', () => {
//     console.log('clicked');
// })





