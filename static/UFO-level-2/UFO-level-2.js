// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);

//to get a reference to the table body
var tbody = d3.select("tbody");
//TO select button
var button = d3.select("#filter-btn");
var input = d3.select("#datetime");
// to select city button
var cityButton = d3.select("#filter-btn-city");
var cityInput = d3.select("#cityname");
// to select state button
var stateButton = d3.select("#filter-btn-state");
var stateInput = d3.select("#statename");
// to select country button
var countryButton = d3.select("#filter-btn-country");
var countryInput = d3.select("#countryname");
// to select shape button
var shapeButton = d3.select("#filter-btn-shape");
var shapeInput = d3.select("#shapename");


// UFO-LEVEL-2
//for the other search results

//for City search
cityButton.on("click", function(){
    tbody.html("");

    d3.event.preventDefault();

    console.log("you have clicked the city button")

    var cityElement = cityInput.property("value");
    console.log(cityElement);

    var cityTypeArray = tableData.filter(two => two.city === cityElement);
    console.log(cityTypeArray)

    cityTypeArray.forEach((selects) => {
        var cRow = tbody.append("tr");

        Object.entries(selects).forEach(([key,value]) => {
            var cCell = cRow.append("td");
            cCell.text(value);
        });
    });
});

//for state search
stateButton.on("click", function(){
    tbody.html("");

    d3.event.preventDefault();

    console.log("you have clicked the state button")

    var stateElement = stateInput.property("value");
    console.log(stateElement);

    var stateTypeArray = tableData.filter(three => three.state === stateElement);
    console.log(stateTypeArray)

    stateTypeArray.forEach((selectss) => {
        var sRow = tbody.append("tr");

        Object.entries(selectss).forEach(([key,value]) => {
            var sCell = sRow.append("td");
            sCell.text(value);
        });
    });
});

//for country search
countryButton.on("click", function(){
    tbody.html("");

    d3.event.preventDefault();

    console.log("you have clicked the country button")

    var countryElement = countryInput.property("value");
    console.log(countryElement);

    var countryTypeArray = tableData.filter(four => four.country === countryElement);
    console.log(countryTypeArray)

    countryTypeArray.forEach((selectsc) => {
        var coRow = tbody.append("tr");

        Object.entries(selectsc).forEach(([key,value]) => {
            var coCell = coRow.append("td");
            coCell.text(value);
        });
    });
});

//for shape search
shapeButton.on("click", function(){
    tbody.html("");

    d3.event.preventDefault();

    console.log("you have clicked the shape button")

    var shapeElement = shapeInput.property("value");
    console.log(shapeElement);

    var shapeTypeArray = tableData.filter(five => five.shape === shapeElement);
    console.log(shapeTypeArray)

    shapeTypeArray.forEach((selectsh) => {
        var shRow = tbody.append("tr");

        Object.entries(selectsh).forEach(([key,value]) => {
            var shCell = shRow.append("td");
            shCell.text(value);
        });
    });
});