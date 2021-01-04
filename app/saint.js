class Saint {
    constructor(currentName, currentHp) {
        this._name = currentName;
        this._hp = currentHp;
    }

    name() {
        return this._name;
    }

    hp() {
        return this._hp;
    }
}

async function catchFish() {

    let mySaint = new Saint("Fish", 20000);
    document.getElementById("saint").innerHTML=
    "Saint " + mySaint.name() + " has " + mySaint.hp() + " HP points.";
    
    const response = await fetch('saints/fish.jpg');
    const blob = await response.blob();
    document.getElementById('fish').src = URL.createObjectURL(blob);
}

/*
async function catchFishData() {
    const response = await fetch('fishData.JSON');
    const blob = await response.blob();
    document.getElementById('fish').src = URL.createObjectURL(blob);
}
*/