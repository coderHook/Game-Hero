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

