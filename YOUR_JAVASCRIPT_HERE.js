// Write your JS here

let hero = {
    name: '',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: '',
        damage: 2
    }
};

let dagger = {
    type: 'dagger',
    damage: 2
}

let kills = 0
const numberOfEnemies = 6;

/* ----------- F U N C T I O N S --------------*/
function initializing(hero){
    alert("I am called The MAster, and I would guide you through your Mission");
    let name = prompt("Insert the name of Your Hero!") || "The Unknown";
    hero.name = name;
    alert('You have 3 buttons, Your hero is used to Heal yourself. To start fighting first you have to pick up your weapon and equipp it! Do SO!');
}

function rest(object) {
    if (object.health === 10) { alert("Your Health was already 10") }
    object.health = 10;
    return object;
};

function pickUpItem(hero, weapon) {
    console.log(weapon);
    hero.inventory.push(weapon);
 
    if(weapon.type) { 
        let weapon_picked = document.getElementById(weapon.type);
        weapon_picked.style.display = 'none';
        displayStats(hero);
    }
};

function equipWeapon(hero) {
    if(hero.inventory.length !== 0){
        
        hero.weapon = hero.inventory[0];

    } else {
        //alert("You dont have a weapon to equip!");
    }
    //alert('Weapon equipped!, You are ready to Fight!');
    displayStats(hero);
    //Call function to display enemies.
    displayEnemies();
};

//Display enemies
function displayEnemies(){

    let arena = document.querySelector('#arena');
    

    for(let i = 0; i < numberOfEnemies; i++){
        let enemiesIMG = `<img src="./images/enemies/${i+1}.png" alt="" id="enemy${i+1}" onclick="fight(${i+1})" />`;
        arena.insertAdjacentHTML('beforeend',enemiesIMG);
    }
}

// Fight Enemies
function fight(id){
    
    console.log('Im here');
    let enemy = document.querySelector(`#enemy${id}`);
    console.log(enemy);
    enemy.style.display = 'none';
    console.log("You have killed enemy " + id);
    //Counter to count the kills
    kills++
    if (kills === numberOfEnemies) {
        alert("Congratulations you have WON the game!");
        hero = {
            name: '',
            heroic: true,
            inventory: [],
            health: 10,
            weapon: {
                type: '',
                damage: 2
            }
        };
    }
}

//displayStats --> writes your hero's name, health, weapontype, weapon damage to the page.
function displayStats(hero) {
    let stats = document.querySelector('.stats');
    stats.innerHTML = '';

    let html = `
                <h3 id="hero-name">${hero.name}</h3>
                <p>Health: <span id="health">${hero.health}</span></p>
                <p>Weapon: <span id="weapon">${hero.weapon.type}</span></p>
                <p>Damage: <span id="damage">${hero.weapon.damage}</span></p>
                `;

    stats.insertAdjacentHTML('afterbegin', html);
}

// Changing the hero name
function changeName(){
    let newName = document.querySelector('#change-name')
    if(!newName.value) { 
        //alert('You didnt insert a name, now you will be know as The Unknown');
        hero.name = "The Unknown"
    } else { 
        hero.name = newName.value;
    }

    newName.value = '';

    displayStats(hero);
}

function startGame(){
    initializing(hero);
    displayStats(hero);
}

/* -------------- C A L L I N G  FUNC -------------->   */

