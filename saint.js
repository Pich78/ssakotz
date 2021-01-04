class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age(x) {
        return x - this.year;
    }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML=
"My car is " + myCar.age(year) + " years old.";

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