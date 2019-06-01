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
function rest(object) {
    if (object.health === 10) { alert("Your Health was already 10") }
    object.health = 10;
    return object;
};

function pickUpItem(hero, weapon) {
    hero.inventory.push(weapon);
};

function equipWeapon(hero) {
    if(hero.inventory.length !== 0){
        return hero.weapon = hero.inventory[0];
    }
};

//displayStats --> writes your hero's name, health, weapontype, weapon damage to the page.
function displayStats(hero) {
    let html = `<div class="stats">
                    <h3 id="hero-name">${hero.name}</h3>
                    <p>Health: <span id="health">${hero.health}</span></p>
                    <p>Weapon: <span id="weapon">${hero.weapon.type}</span></p>
                    <p>Damage: <span id="damage">${hero.weapon.damage}</span></p>
                </div>`;

    let body = document.querySelector('body');
    body.insertAdjacentHTML('afterbegin', html);
}


/* -------------- C A L L I N G  FUNC -------------->   */
displayStats(hero);