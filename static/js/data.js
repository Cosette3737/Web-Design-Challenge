
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
    var Numbers = result.map(item => {
      if (item.diagnosis == "M") {
        color = "#67b7dc";
      } else {
        color = "#FF007F";
      }
        return {color: color, id: item.id, diagnosis: item.diagnosis, x: +(item.concavity_mean), y:+(item.compactness_mean), value: +(item.radius_mean)};
      });  
        console.log(Numbers);
    
    am4core.ready(function(data) {
 

// Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

    var chart = am4core.create("chartdiv", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();

    chart.data = [
    {
      Diagnosis: "Benign",
      Number: 357
    },
    {
      Diagnosis: "Malignant",
      Number: 212
    }
  ];

    chart.innerRadius = 50;

    var series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "Number";
    series.dataFields.category = "Diagnosis";
    })
    var chart = am4core.create("chartdiv2", am4charts.XYChart);

  // Add data
    chart.data = [{
      "Average" : "Texture Mean",
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
    //console.log(data);
    // Use only absolute numbers
    chart.numberFormatter.numberFormat = "#.#s";
    
    // Create axes
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "Average";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.inversed = true;
    
    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.extraMin = 0.1;
    valueAxis.extraMax = 0.1;
    valueAxis.renderer.minGridDistance = 40;
    valueAxis.renderer.ticks.template.length = 5;
    valueAxis.renderer.ticks.template.disabled = false;
    valueAxis.renderer.ticks.template.strokeOpacity = 0.4;
    valueAxis.renderer.labels.template.adapter.add("text", function(text) {
      return text == "Benign" || text == "Malignant" ? text : text + "%";
    })
    
    // Create series
    var male = chart.series.push(new am4charts.ColumnSeries());
    male.dataFields.valueX = "Benign";
    male.dataFields.categoryY = "Average";
    male.clustered = false;
    
    var maleLabel = male.bullets.push(new am4charts.LabelBullet());
    maleLabel.label.text = "{valueX}%";
    maleLabel.label.hideOversized = false;
    maleLabel.label.truncate = false;
    maleLabel.label.horizontalCenter = "right";
    maleLabel.label.dx = -10;
    
    var female = chart.series.push(new am4charts.ColumnSeries());
    female.dataFields.valueX = "Malignant";
    female.dataFields.categoryY = "Average";
    female.clustered = false;
    
    var femaleLabel = female.bullets.push(new am4charts.LabelBullet());
    femaleLabel.label.text = "{valueX}%";
    femaleLabel.label.hideOversized = false;
    femaleLabel.label.truncate = false;
    femaleLabel.label.horizontalCenter = "left";
    femaleLabel.label.dx = 10;
    
    var maleRange = valueAxis.axisRanges.create();
    maleRange.value = -10;
    maleRange.endValue = 0;
    maleRange.label.text = "Benign";
    maleRange.label.fill = chart.colors.list[0];
    maleRange.label.dy = 20;
    maleRange.label.fontWeight = '600';
    maleRange.grid.strokeOpacity = 1;
    maleRange.grid.stroke = male.stroke;
    
    var femaleRange = valueAxis.axisRanges.create();
    femaleRange.value = 0;
    femaleRange.endValue = 10;
    femaleRange.label.text = "Malignant";
    femaleRange.label.fill = chart.colors.list[1];
    femaleRange.label.dy = 20;
    femaleRange.label.fontWeight = '600';
    femaleRange.grid.strokeOpacity = 1;
    femaleRange.grid.stroke = female.stroke;
    
    

  //chart3
    
    let chart3 = am4core.create("chartdiv3", am4charts.XYChart);
    
    let valueAxisX = chart3.xAxes.push(new am4charts.ValueAxis());
    valueAxisX.renderer.ticks.template.disabled = true;
    valueAxisX.renderer.axisFills.template.disabled = true;

    let valueAxisY = chart3.yAxes.push(new am4charts.ValueAxis());
    valueAxisY.renderer.ticks.template.disabled = true;
    valueAxisY.renderer.axisFills.template.disabled = true;

    let series = chart3.series.push(new am4charts.LineSeries());
    series.dataFields.valueX = "x";
    series.dataFields.valueY = "y";
    series.dataFields.value = "value";
    series.strokeOpacity = 0;
    series.sequencedInterpolation = true;
    series.tooltip.pointerOrientation = "vertical";
    
   
    let bullet = series.bullets.push(new am4core.Circle());
    bullet.fill = am4core.color("#eea63");
    bullet.propertyFields.fill = "color";
    bullet.strokeOpacity = 0;
    bullet.strokeWidth = 2;
    bullet.fillOpacity = 0.5;
    bullet.stroke = am4core.color("#ffffff");
    bullet.hiddenState.properties.opacity = 0;
    bullet.tooltipText = "[bold]Diagnosis: {diagnosis}[/]\nID: {id}\n Radius Mean: {value}\nConcavity Mean: {valueX.value}\nCompactness Mean: {valueY.value}";

    let outline = chart.plotContainer.createChild(am4core.Circle);
    outline.fillOpacity = 0;
    outline.strokeOpacity = 0.8;
    outline.stroke = am4core.color("#ff0000");
    outline.strokeWidth = 2;
    outline.hide(0);

    let blurFilter = new am4core.BlurFilter();
    outline.filters.push(blurFilter);
    
    bullet.events.on("over", function(event) {
      let target = event.target;
      outline.radius = target.pixelRadius + 2;
      outline.x = target.pixelX;
      outline.y = target.pixelY;
      outline.show();
    })

    bullet.events.on("out", function(event) {
      outline.hide();
    })

    let hoverState = bullet.states.create("hover");
    hoverState.properties.fillOpacity = 1;
    hoverState.properties.strokeOpacity = 1;

    series.heatRules.push({ target: bullet, min: 2, max: 60, property: "radius" });

    bullet.adapter.add("tooltipY", function (tooltipY, target) {
      return -target.radius;
    })

    chart3.cursor = new am4charts.XYCursor();
    chart3.cursor.behavior = "zoomXY";
    chart3.cursor.snapToSeries = series;

    chart3.scrollbarX = new am4core.Scrollbar();
    chart3.scrollbarY = new am4core.Scrollbar();
    chart3.data = Numbers;
      }
      };
