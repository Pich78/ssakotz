define(function () {

    return async function loadSaintImage() {

        const saintList = await fetch('https://api.github.com/repos/Pich78/ssakotz/contents/saints?ref=gh-pages');
        const data = await saintList.json();
        console.log(data);
        return data;

    }
});  