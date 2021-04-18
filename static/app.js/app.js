function init() {
  d3.csv("/static/data/data.csv", function(breastData){
    console.log(breastData);
    var data = breastData;

// get table references
    var tbody = d3.select("tbody");
    buildTable(data);
function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
      cell.text(val);
    });
  });
}
buildTable(tableData);
  });
}
init();