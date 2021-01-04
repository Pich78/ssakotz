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