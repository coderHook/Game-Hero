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

/* ----------- F U N C T I O N S --------------*/
function initializing(hero){
    let name = prompt("Insert the name of Your Hero!") || "The Unknown";

    hero.name = name;
}

function rest(object) {
    if (object.health === 10) { alert("Your Health was already 10") }
    object.health = 10;
    return object;
};

function pickUpItem(hero, weapon) {
    hero.inventory.push(weapon);
    alert("You picked a " + weapon.type + ' with damage of: ' + weapon.damage + '. Equipped It!');

    displayStats(hero);
};

function equipWeapon(hero) {
    if(hero.inventory.length !== 0){
        
        hero.weapon = hero.inventory[0];

    } else {
        alert("You dont have a weapon to equip!");
    }
    console.log('Weapon equipped: '+ hero.weapon);
    displayStats(hero);
};

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
        alert('You didnt insert a name, now you will be know as The Unknown');
        hero.name = "The Unknown"
    } else { 
        hero.name = newName.value;
    }

    newName.value = '';

    displayStats(hero);
}

/* -------------- C A L L I N G  FUNC -------------->   */
initializing(hero);
displayStats(hero);