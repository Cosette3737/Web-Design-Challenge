  $.ajax({
    url: '/static/data/data.csv',
    dataType: 'text',
  }).done(successFunction);

  function successFunction(data) {
    var allRows = data.split(/\r?\n|\r/);
    var table = '<table>';
    for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
      if (singleRow === 0) {
        table += '<thead>';
        table += '<tr>';
      } else {
        table += '<tr>';
      }
      var rowCells = allRows[singleRow].split(',');
      for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
        if (singleRow === 0) {
          table += '<th>';
          table += rowCells[rowCell];
          table += '</th>';
        } else {
          table += '<td>';
          table += rowCells[rowCell];
          table += '</td>';
        }
      }
      if (singleRow === 0) {
        table += '</tr>';
        table += '</thead>';
        table += '<tbody>';
      } else {
        table += '</tr>';
      }
    } 
    table += '</tbody>';
    table += '</table>';
    $('body').append(table);
  }
  //   d3.csv("/static/data/data.csv", function(breastData){
  //     //console.log(breastData);
  //     var data = breastData;
  //     console.log(data);
  //     var tabledata = {};
  //     forEach(data.id in data) {
  //       tabledata[id] = data.id;
  //       console.log(tabledata);
  //     });
    
  // // get table references
  //     var tbody = d3.select("tbody");
  //     buildTable(data);
  // function buildTable(data) {
  //   // First, clear out any existing data
  //   tbody.html("");
  //   // and append a row and cells for each value in the row
  //   data.forEach((dataRow) => {
  //     // Append a row to the table body
  //     var row = tbody.append("tr");
  
  //     // Loop through each field in the dataRow and add
  //     // each value as a table cell (td)
  //     Object.values(dataRow).forEach((val) => {
  //       var cell = row.append("td");
  //       cell.text(val);
  //     });
  //   });
  // }
  // buildTable(tableData);
  //   });
  // }
  // init();