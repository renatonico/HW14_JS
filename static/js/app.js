// from data.js
var tableData = data;
// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");
//Populate the table with all the data
tableData.forEach(function(UFOReport) {
  console.log(UFOReport);
  var row = tbody.append("tr");
  Object.entries(UFOReport).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputDay = inputElement.property("value");

  //console.log(inputDay);

  // Clear previous table
  d3.select("tbody").text("");

  var filteredData = tableData.filter(alien => alien.datetime === inputDay);
console.log(filteredData);
  filteredData.forEach(function(UFOReport) {
    console.log(UFOReport);
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(function([key, value]) {
     // console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
});