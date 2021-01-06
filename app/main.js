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

    /*
    let async_test = require('./async_test');
    let list_of_saints;
    async_test().
    then(saintList => {
        list_of_saints = saintList;
        console.log(saintList);
    }).
    catch(err => console.error(err));
    */

/*
    let loadListOfSaintsFromDir = require('./loadListOfSaintsFromDir');
    
    loadListOfSaintsFromDir().
    then(saintList => {
        console.log(saintList);
        return saintList;
    }).
    catch(err => console.error(err));
 */   

obj = { table: "customers", limit: 20 };
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    txt += "<select>"
    for (x in myObj) {
      txt += "<option>" + myObj[x].name;
    }
    txt += "</select>"
    document.getElementById("demo").innerHTML = txt;
  }
}
xmlhttp.open("POST", "json_demo_html_table.php", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);


    let loadSaint = require('./loadSaint');
        
    loadSaint().
    then(saintName => {
        console.log(saintName);
    }).
    catch(err => console.error(err));



    //let loadSaint = require('./loadSaint');
    //loadSaint(list_of_saints[0].name);
    
    
    //catchFish();

    var printHello = require('./printHello');
    printHello();

});




