define(function () {

    return async function loadSaint() {

        let loadListOfSaintsFromDir = require('./loadListOfSaintsFromDir');

        const saintList = await loadListOfSaintsFromDir();
        console.log(saintList);

        //select first saint

        let firstSaintName = saintList[0].name;

        return firstSaintName;
    }
});   
