
var chartDom1 = document.getElementById('main1');
var myChart1 = echarts.init(chartDom1);
var chartDom2 = document.getElementById('main2');
var myChart2 = echarts.init(chartDom2);
var option1;
var option2;

var cardata = [];
var namedata = [];

class Car {
    constructor(name,value,person,displacement,wantK,wantR){
        this.name = name;
        this.value = value;
        this.person = person;
        this.displacement = displacement;
        this.wantK = wantK;
        this.wantR = wantR;
    }
}

var Aqua = new Car("Aqua",243,5,1.5,2,0);
var Yaris = new Car("Yaris",243,5,1.5,2,4);
var Camry = new Car("Camry",243,5,1.5,2,0);
var Crown = new Car("Crown",243,5,1.5,2,0);
var GR86 = new Car("GR86",5,1.5,2,0);
var GRSupra = new Car("GRSupra",243,5,1.5,2,0);
var GRYaris = new Car("GRYaris",243,5,1.5,2,0);
var Harrier = new Car("Harrier",243,5,1.5,2,0);
var Is = new Car("Is",243,5,1.5,2,0);
var Macan = new Car("Macan",243,5,1.5,2,0);
var MINI = new Car("MINI",243,5,1.5,2,0);
var Model3 = new Car("Model3",243,5,1.5,2,0);
var ModelY = new Car("ModelY",243,5,1.5,2,0);
var Rangerover = new Car("Rangerover",243,5,1.5,2,0);
var RAV4 = new Car("RAV4",243,5,1.5,2,0);
var roomy = new Car("roomy",243,5,1.5,2,0);
var RX = new Car("RX",243,5,1.5,2,0);

namedata.push(Aqua.name,Yaris.name,);

option1 = {
    xAxis: {
      data: namedata
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        data: [23, 24, 18, 25, 27, 28, 25]
      },
      {
        type: 'bar',
        data: [26, 24, 18, 22, 23, 20, 27]
      }
    ]
  };

option2 = {
  title: {
    text: 'Basic Radar Chart'
  },
  legend: {
    data: ['Allocated Budget', 'Actual Spending']
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: 'Sales', max: 6500 },
      { name: 'Administration', max: 16000 },
      { name: 'Information Technology', max: 30000 },
      { name: 'Customer Support', max: 38000 },
      { name: 'Development', max: 52000 },
      { name: 'Marketing', max: 25000 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'Allocated Budget'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: 'Actual Spending'
        }
      ]
    }
  ]
};


option1 && myChart1.setOption(option1);
option2 && myChart2.setOption(option2);
