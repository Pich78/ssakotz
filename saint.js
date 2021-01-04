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


let mySaint = new Saint("Fish", 20000);
document.getElementById("saint").innerHTML=
"Saint " + mySaint.name() + " has " + mySaint.hp() + "HP points.";

listSaints();
catchFish();


async function listSaints() {
    
    const saintListResponse = await fetch('https://api.github.com/repos/Pich78/ssakotz/contents/saints?ref=gh-pages');

    const data = await saintListResponse.json();
    let htmlString = '<ul>';
    for (let file of data) {
        htmlString += `<li><a href="${file.path}">${file.name}</a></li>`;
    }
    htmlString += '</ul>';
    document.getElementById('saints').innerHTML = htmlString;
}   

async function catchFish() {
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