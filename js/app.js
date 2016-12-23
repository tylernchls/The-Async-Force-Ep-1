(function(){
    // GETS DARTH VADER NAME AND WORLD

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "http://swapi.co/api/people/4/"); // gets darth vader info
  oReq.send();

  function reqListener() {
    console.log(this.responseText);
    let personObj = JSON.parse(this.responseText); // returns darth vader in object format, can then access its properties
    // console.log(personObj);
    // console.log(personObj.name);
    document.getElementById('person4Name').innerHTML = personObj.name;  //injects darth vader name into html

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", worldListener);
    oReq.open("GET", personObj.homeworld);   // second request for darth vader homeworld
    oReq.send();

  }

  function worldListener() {
    console.log(this.responseText);
    let personObjWorld = JSON.parse(this.responseText); // returns DV homeworld info, can then grab name
    // console.log(personObjWorld);
    document.getElementById('person4HomeWorld').innerHTML = "Plant: " + personObjWorld.name;
  }


    // GETS HANS SOLO NAME AND SPECIES

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", getName2);
  oReq.open("GET",'http://swapi.co/api/people/14/');
  oReq.send();

  function getName2() {
    console.log(this.responseText);
    let person_two = JSON.parse(this.responseText);
    // console.log(person_two);
    document.getElementById('person14Name').innerHTML = person_two.name;  //injects Hans Solo

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", speciesListener);
    oReq.open("GET", person_two.species);
    oReq.send();

    function speciesListener() {
      console.log(this.responseText);
      let person_two_species = JSON.parse(this.responseText);
      document.getElementById('person14Species').innerHTML = "Type: " + person_two_species.name;
    }

  }




















})();















// var oReq = new XMLHttpRequest();

// oReq.addEventListener("load", function() {
// let personObj = JSON.parse(this.responseText);
// console.log(personObj.name);  //returns JSON string need to turn into object
// document.getElementById(`person4Name`).innerHTML = personObj.name;
// }


// oReq.open("GET", " http://swapi.co/api/people/4/");
// oReq.send();