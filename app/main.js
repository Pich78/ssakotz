define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    //var messages = require('./messages');

    // Load library/vendor modules using
    // full IDs, like:
    //var print = require('print');

    //print(messages.getHello());

    var listSaints = require('./listsaint');
    //var catchFish = require('./saint')

    const response = await listSaints();
    //catchFish();

});




