define(function () {

    return function loadSaint(saint) {

        console.log("Load Saint Function " + saint);

        async_loadSaint(saint);

    }
});   

async function async_loadSaint(saint){

    console.log("test call loadJSON");
        
    const saintListResponse = await fetch('https://api.github.com/repos/Pich78/ssakotz/contents/saints?ref=gh-pages');

    const data = await saintListResponse.json();
    console.log(data);
        
    /*
    let htmlString = '<ul>';
    for (let file of data) {
        htmlString += `<li><a href="${file.path}">${file.name}</a></li>`;
    }
    htmlString += '</ul>';
    document.getElementById('saints').innerHTML = htmlString;
    */
}