
// Line Chart for Orders
var ordersChart = document.getElementById("myAreaChart").getContext('2d');
var xyValues = [
    {x:'Aug 1', y:9000},
    {x:'Aug 2', y:30000},
    {x:'Aug 3', y:25000},
    {x:'Aug 4', y:20000},
    {x:'Aug 5', y:20000},
    {x:'Aug 6', y:25000},
    {x:'Aug 7', y:31000},
    {x:'Aug 8', y:35000},
    {x:'Aug 9', y:30000},
    {x:'Aug 10', y:30000},
    {x:'Aug 11', y:20000},
    {x:'Aug 12', y:37000},
    {x:'Aug 13', y:40000}
  ];
  
  new Chart("myAreaChart", {
    type: "line",
    data: {
      datasets: [
      {
        fill:true,
        pointBackgroundColor:"#da4167",
        backgroundColor: 'rgb(15, 15, 15 , 0.2)',
        borderColor: "#da4167",
        data: xyValues
      }
      ]
    },
    options: {
      //to hide the chart legend
    plugins:{
     legend: {display:false},
     
    }
     ,
     //to modify the line style
     tension: 0.3,
      scales: {
        x: { 
          ticks: {
            //to specify the number of nods in the axis that i need
              maxTicksLimit:7
          }, grid:{
            display:false
          }
      },
      yAxes: {ticks: {min: 0, max:40000 , stepSize: 10000}},
     
    }
  }
  });

// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart").getContext('2d');
var xValues = ["June", "July", "August", "September", "October","November","December"];
var menValues = [4000,4500,13000,5000,7000,9000,12000];
var womenValues = [6000,6000,15000,7000,9500,13000,14000];

new Chart("myBarChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [
      {
          label:'Men',
        backgroundColor: '#37315e',
        data: menValues
      }
      ,{
        label:'women',
      backgroundColor: '#da4167',
        data: womenValues
        }
      ]
    },
    options: {
      legend: {display: false},
      scales: {
        x:{
          grid:{
            display:false
          }
        },
        yAxes:{ticks: {min: 0, max:15000 ,  type: 'linear',
        stepSize: 5000}
      },
        
        }
    }
  });

// Liner Chart for Cities
var citiesChart = document.getElementById("myPieChart").getContext('2d');
var xValues = ["Riyadh", "Jeddah", "Sharqia", "Mecca"];
var yValues = [65, 30, 20, 44];
var barColors = [
  "#da4167",
  "#494277",
  "#db6682",
  "#3a3366",
  
];

new Chart("myPieChart", {
  type: "pie",
  
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  
  options: {
    //to resize the chart
    responsive: true,
  }
});

// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart").getContext('2d');
var xValues = ["January", "February", "March", "April", "May","June"];
var yValues = [1,1.5,2.5,4,5,3.2];

new Chart("myLinearChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
    {
      fill:true,
      pointBackgroundColor:"#da4167",
      backgroundColor: 'rgb(201, 203, 207, 0.2)',
      borderColor: "#da4167",
      data: yValues
    }
    ]
  },
  options: {
    //to hide the chart legend
  plugins:{
   legend: {display:false}
   
  }
   ,
   //to modify the line style
   tension: 0.3,
    scales: {
      x:{
        grid:{
          display:false
        }
       },
       yAxes:{ticks: {min: 0, max:5 ,stepSize: 1},
       
      }
    }
}
});
