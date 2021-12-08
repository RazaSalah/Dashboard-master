
// Line Chart for Orders
var ordersChart = document.getElementById("myAreaChart").getContext('2d');
var xyValues = [
    {x:'Aug 1', y:9000},
    {x:60, y:30000},
    {x:70, y:25000},
    {x:80, y:20000},
    {x:90, y:20000},
    {x:100, y:25000},
    {x:110, y:31000},
    {x:120, y:35000},
    {x:130, y:30000},
    {x:140, y:30000},
    {x:150, y:20000},
    {x:140, y:37000},
    {x:150, y:40000}
  ];
  
const myChart = new Chart(ordersChart, {
    type: 'line',
    data: {
        labels: ['Aug 1', 'Aug 3', 'Aug 5', 'Aug 7', 'Aug 9', 'Aug 11','Aug 13'],
        datasets: [{
            label: '',
            data: [9000,30000,25000,20000,20000,25000,31000,35000,30000,30000,20000,37000,40000],
           backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart");
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
        y: {
            type: 'linear',
            min: 0,
            max: 15000,
            ticks: {
                stepSize: 5000
            }
        }
    }
}
  });

// Liner Chart for Cities
var citiesChart = document.getElementById("myPieChart");
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
   
  }
});

// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart");
