define(function () {

    return async function loadListOfSaintsFromDir() {

        const saintList = await fetch('https://api.github.com/repos/Pich78/ssakotz/contents/saints?ref=gh-pages');
        const data = await saintList.json();
        console.log(data);
        return data;

    }
});  


    /*
    let htmlString = '<ul>';
    for (let file of data) {
        htmlString += `<li><a href="${file.path}">${file.name}</a></li>`;
    }
    htmlString += '</ul>';
    document.getElementById('saints').innerHTML = htmlString;
    */
