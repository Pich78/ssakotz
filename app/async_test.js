define(function () {

    return async function async_test() {

        const saintList = await fetch('https://api.github.com/repos/Pich78/ssakotz/contents/saints?ref=gh-pages');
        const data = await saintList.json();
        console.log(data);
        return data;

    }
});  