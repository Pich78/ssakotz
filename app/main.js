define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    //var messages = require('./messages');

    // Load library/vendor modules using
    // full IDs, like:
    //var print = require('print');

    //print(messages.getHello());

    
    //var catchFish = require('./saint')

    var loadListOfSaintsFromDir = require('./loadListOfSaintsFromDir');
    
    loadListOfSaintsFromDir().
    then(saintList => {
        console.log(saintList);
        return saintList;
    }).
    catch(err => console.error(err));

    //var loadSaint = require('./loadSaint');
    //loadSaint(data[0].name);
    
    
    //catchFish();

    var printHello = require('./printHello');
    printHello();

});




