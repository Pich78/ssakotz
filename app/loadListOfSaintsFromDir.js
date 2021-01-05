define(function () {

    return function loadListOfSaintsFromDir() {

        async_loadListOfSaintsFromDir().
        then(saintList => {
            console.log(saintList);
            return saintList;
        }).
        catch(err => console.error(err));

    }
});   

async function async_loadListOfSaintsFromDir(){
        
    const saintList = await fetch('https://api.github.com/repos/Pich78/ssakotz/contents/saints?ref=gh-pages');

    const data = await saintList.json();
    //console.log(data);
    //console.log(data[0].name);
    //console.log(data[1].name);


    let list = new Object();
        list[0] = data[0].name;
        list[1] = data[1].name;
    return list;
    
   /*
    let first = data[0].name;
    return first;
     */

    /*
    let htmlString = '<ul>';
    for (let file of data) {
        htmlString += `<li><a href="${file.path}">${file.name}</a></li>`;
    }
    htmlString += '</ul>';
    document.getElementById('saints').innerHTML = htmlString;
    */
}