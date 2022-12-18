var chartDom1 = document.getElementById("main1");
var myChart1 = echarts.init(chartDom1);
var chartDom2 = document.getElementById("main2");
var myChart2 = echarts.init(chartDom2);
var option1;
var option2;

var cardata = [];
var namedata = [];
var valuedata = [];

class Car {
  constructor(name, value, person, displacement, wantK, wantR) {
    this.name = name;
    this.value = value;
    this.person = person;
    this.displacement = displacement;
    this.wantK = wantK;
    this.wantR = wantR;
  }
}

var Aqua = new Car("Aqua", 243, 5, 1.5, 2, 0);
var Yaris = new Car("Yaris", 215, 5, 1.5, 2, 4);
var Camry = new Car("Camry", 351, 5, 2.5, 2, 0);
var Crown = new Car("Crown", 493, 5, 3.5, 2, 0);
var GR86 = new Car("GR86", 339,5, 2.4, 2, 0);
var GRSupra = new Car("GRSupra", 641, 2, 3.0, 2, 0);
var GRYaris = new Car("GRYaris", 479, 2, 1.6, 2, 0);
var Harrier = new Car("Harrier", 369, 7, 2.5, 2, 0);
var Is = new Car("Is", 606, 5, 1.5, 3.5, 0);
var Macan = new Car("Macan", 859, 7, 1.5, 2, 0);
var MINI = new Car("MINI", 399, 5, 1.5, 2, 0);
var Model3 = new Car("Model3", 695, 5, 0, 2, 0);
var ModelY = new Car("ModelY", 739, 5, 0, 2, 0);
var Rangerover = new Car("Rangerover", 559, 7, 1.5, 2, 0);
var RAV4 = new Car("RAV4", 359, 7, 2.5, 2, 0);
var roomy = new Car("roomy", 193, 5, 1.0, 2, 0);
var RX = new Car("RX", 651, 7, 3.5, 2, 0);

var cars = {
  "Aqua":Aqua,
  "Yaris":Yaris,
  "Camry":Camry,
  "Crown":Crown,
  "GR86":GR86,
  "GRSupra":GRSupra,
  "GRYaris":GRYaris,
  "Harrier":Harrier,
  "Is":Is,
  "Macan":Macan,
  "MINI":MINI,
  "Model3":Model3,
  "ModelY":ModelY,
  "Rangerover":Rangerover,
  "RAV4":RAV4,
  "roomy":roomy,
  "RX":RX
}

namedata.push(
  Aqua.name,
  Yaris.name,
  Camry.name,
  Crown.name,
  GR86.name,
  GRSupra.name,
  GRYaris.name,
  Harrier.name,
  Is.name,
  Macan.name,
  MINI.name,
  Model3.name,
  ModelY.name,
  Rangerover.name,
  RAV4.name,
  roomy.name,
  RX.name
);

valuedata.push(
    Aqua.value,
    Yaris.value,
    Camry.value,
    Crown.value,
    GR86.value,
    GRSupra.value,
    GRYaris.value,
    Harrier.value,
    Is.value,
    Macan.value,
    MINI.value,
    Model3.value,
    ModelY.value,
    Rangerover.value,
    RAV4.value,
    roomy.value,
    RX.value
)

option1 = {
    tooltip: {},
    legend: {
      data: ['sales']
    },
  xAxis: {
    data: namedata,
    axisLabel: {
        interval: 0,
        rotate: 30 //If the label names are too long you can manage this by rotating the label.
      }
  },
  yAxis: {},
  series: [
    {
      type: "bar",
      data: valuedata,
    },

  ],

};

var value1 = [
    Yaris.value,
    Yaris.person,
    Yaris.displacement,
    Yaris.wantK,
    Yaris.wantR
]

var value2 = [
    GRSupra.value,
    GRSupra.person,
    GRSupra.displacement,
    GRSupra.wantK,
    GRSupra.wantR
]


option1 && myChart1.setOption(option1);


var select1;
var select2;
var count = 0;
function clickListener (e) {
    /*クリックした要素のIDを表示*/

    if (count == 0){
    
    document.getElementById('select1').textContent = "1台目: " + e.target.getAttribute("id");
    select1 = cars[e.target.getAttribute("id")]
    count +=1;
    }
    else{
    
    document.getElementById('select2').textContent = "2台目: " +  e.target.getAttribute("id");
    select2 = cars[e.target.getAttribute("id")]
    count =0;
    option2 = setOption(select1,select2);
    option2 && myChart2.setOption(option2);
    }
  }
  /*②IMG要素を全てセレクト*/
  document.querySelectorAll("img").forEach((imgElm) => {
    /*③要素のクリックイベントにイベントリスナーを紐づける*/
    imgElm.addEventListener('click', clickListener);
  })

  function setOption (car1,car2) {
    var value1 = [
        car1.value,
        car1.person,
        car1.displacement,
        car1.wantK,
        car1.wantR
    ]
    var value2 = [
        car2.value,
        car2.person,
        car2.displacement,
        car2.wantK,
        car2.wantR
    ]

    var option = {
        title: {
          text: "Basic Radar Chart",
        },
        legend: {
          data: [car1.name, car2.name],
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: "金額", max: 1000 },
            { name: "定員", max: 8 },
            { name: "排気量", max: 8 },
            { name: "欲しい度：俺", max: 5 },
            { name: "欲しい度：理", max: 5 },
          ],
        },
        series: [
          {
            name: car1.name + " vs " + car2.name,
            type: "radar",
            data: [
              {
                value: value1,
                name: car1.name,
              },
              {
                value: value2,
                name: car2.name,
              },
            ],
          },
        ],
      };
      return option
  }