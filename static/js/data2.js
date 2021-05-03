$.ajax({
    url: '/static/data/data.csv',
    dataType: 'text',
  }).done(successFunction);
  
    function successFunction(data){
      //console.log(data);
         csvJSON(data);
        function csvJSON(data){
          var lines = data.split("\n");
          var result = [];
          var headers = lines[0].split(",");
          for(var i = 1; i<lines.length; i++){
          var obj = {};
          var currentline=lines[i].split(",");
          for(var j=0;j<headers.length;j++){
          obj[headers[j]] = currentline[j];
          }
  
          result.push(obj);
          
        }
      console.log(result);
      let chart4 = am4core.create("chartdiv4", am4charts.RadarChart);

      let data4 = [
        "Average" , "Texture Mean",
        "Benign": -17.91,
        "Malignant": 21.6
      }, {
        "Average" :"Radius Mean",
        "Benign": -12.15,
        "Malignant": 17.46
       },{
        "Average" : "Perimeter Mean",
        "Benign": -78.08,
        "Malignant": 115.37
      },{
        "Average" : "Area Mean",
        "Benign": -46.279,
        "Malignant": 97.838
      },{
        "Average" : "Smoothness Mean",
        "Benign": -90,
        "Malignant": 100
      },{
        "Average" : "Compactness",
        "Benign": -80,
        "Malignant": 150
      },{
        "Average" : "Concavity Mean",
        "Benign": -50,
        "Malignant": 160
      },{
        "Average" : "Concave Mean",
        "Benign": -30,
        "Malignant": 9
      },{
        "Average" : "Symmetry Mean",
        "Benign": -17,
        "Malignant": 19
      },{
        "Average" : "Fractal Dimension",
        "Benign": -6,
        "Malignant": 6
      },];
     
      
      chart4.data = data4;
      
      /* Create axes */
      let categoryAxis = chart4.xAxes.push(new am4charts.DateAxis());
      
      let valueAxis = chart4.yAxes.push(new am4charts.ValueAxis());
      valueAxis.extraMin = 0.2;
      valueAxis.extraMax = 0.2;
      valueAxis.tooltip.disabled = true;
      
      /* Create and configure series */
      let series1 = chart4.series.push(new am4charts.RadarSeries());
      series1.dataFields.valueY = "value1";
      series1.dataFields.dateX = "date";
      series1.strokeWidth = 3;
      series1.tooltipText = "{valueY}";
      series1.name = "Benign";
      series1.bullets.create(am4charts.CircleBullet);
      series1.dataItems.template.locations.dateX = 0.5;
      
      let series2 = chart4.series.push(new am4charts.RadarSeries());
      series2.dataFields.valueY = "value2";
      series2.dataFields.dateX = "date";
      series2.strokeWidth = 3;
      series2.tooltipText = "{valueY}";
      series2.name = "Malignant";
      series2.bullets.create(am4charts.CircleBullet);
      series2.dataItems.template.locations.dateX = 0.5;
      
      chart4.scrollbarX = new am4core.Scrollbar();
      chart4.scrollbarY = new am4core.Scrollbar();
      
      chart4.cursor = new am4charts.RadarCursor();
      
      chart4.legend = new am4charts.Legend();
    }}
