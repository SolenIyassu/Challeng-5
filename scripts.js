let save1 = document.querySelector(".save1");

let Activity = document.querySelector("#form-control");

// save.addEventListener('click', function(){
// let key = Activity.value;
// let added = save.value;

// console.log(key);
// console.log(added)

// localStorage.setItem(key, added);
// console.log(localStorage)
var currentTime = document.querySelector(".currentHour");
var timeBlock1 = document.querySelector(".input-group-text");

window.setInterval(() => {
  $(currentTime).html(moment().format("dddd, MMMM Do YYYY, kk:mm:ss"));
  console.log("working");
}, 1000);
// function backgroundColor(){
//     if (hourNow == currentTime){
//         input.style.backgroundColor = "#ff0000";
//     }else if (hourNow < currentTime){
//         document.getElementsByClassName("backgroundTool").style.backgroundColor = "#d3d3d3";
//     }else
//     {
//         document.getElementsByClassName("backgroundTool").style.backgroundColor = "#90ee90";
// let current = moment().format('k')
// let lastTime = lastTime < current;
// let now = current;
// let futureTime = futureTime < current;
let currentIndex = 0;

var input1 = document.querySelector("#inputPlan1");
var input2 = document.querySelector("#inputPlan2");
var input3 = document.querySelector("#inputPlan3");
var input4 = document.querySelector("#inputPlan4");
var input5 = document.querySelector("#inputPlan5");
var input6 = document.querySelector("#inputPlan6");
var input7 = document.querySelector("#inputPlan7");
var input8 = document.querySelector("#inputPlan8");
var input9 = document.querySelector("#inputPlan9");
var input10 = document.querySelector("#inputPlan10");
var input11 = document.querySelector("#inputPlan11");
var input12 = document.querySelector("#inputPlan12");
var input13 = document.querySelector("#inputPlan13");
var input14 = document.querySelector("#inputPlan14");
var input15 = document.querySelector("#inputPlan15");
var input16 = document.querySelector("#inputPlan16");
var input17 = document.querySelector("#inputPlan17");

input1 = 8;
input2 = 9;
input3 = 10;
input4 = 11;
input5 = 12;
input6 = 13;
input7 = 14;
input8 = 15;
input9 = 16;
input10 = 17;
input11 = 18;
input12 = 19;
input13 = 20;
input14 = 21;
input15 = 22;
input16 = 23;
input17 = 24;

// returns current hour
function presentHour() {
  let hour = moment().hour();
  console.log(hour);
  return hour;
}
// this return timeblock input values
let currentTimeBlock = [
  input1,
  input2,
  input3,
  input4,
  input5,
  input6,
  input7,
  input8,
  input9,
  input10,
  input11,
  input12,
  input13,
  input14,
  input15,
  input16,
  input17,
];

function changeHourColor() {
  const hour = presentHour();

  if (hour == currentTimeBlock[0]) {
    input1.style.backgroundColor = "lightgreen";
  } else if (hours < hourBlock1) {
    input1.style.backgroundColor = "lightblue";
  } else {
    input1.style.backgroundColor = "lightgrey";
  }
  if (hour == currentTimeBlock[1]) {
    input2.style.backgroundColor = "orange";
  } else if (hours < hourBlock1) {
    input2.style.backgroundColor = "blue";
  } else {
    input2.style.backgroundColor = "green";
  }
  if (hour == currentTimeBlock[2]) {
    input3.style.backgroundColor = "orange";
  } else if (hours < hourBlock1) {
    input3.style.backgroundColor = "blue";
  } else {
    input3.style.backgroundColor = "green";
  }
  if (hour == currentTimeBlock[3]) {
    input4.style.backgroundColor = "orange";
  } else if (hour < hourBlock1) {
    input4.style.backgroundColor = "blue";
  } else {
    input4.style.backgroundColor = "green";
  }
  if (hour == currentTimeBlock[4]) {
    input5.style.backgroundColor = "orange";
  } else if (hour < hourBlock1) {
    input5.style.backgroundColor = "blue";
  } else {
    input5.style.backgroundColor = "green";
  }
  if (hour == currentTimeBlock[5]) {
    input6.style.backgroundColor = "orange";
  } else if (hour < hourBlock1) {
    input6.style.backgroundColor = "blue";
  } else {
    input6.style.backgroundColor = "green";
  }
  if (hour == currentTimeBlock[6]) {
    input2.style.backgroundColor = "orange";
  } else if (hours < hourBlock1) {
    input7.style.backgroundColor = "blue";
  } else {
    input7.style.backgroundColor = "green";
  }
  if (hour == currentTimeBlock[7]) {
    input2.style.backgroundColor = "orange";
  } else if (hours < currentTimeBlock[7]) {
    input2.style.backgroundColor = "blue";
  } else {
    input2.style.backgroundColor = "green";
  }
  if (hour == currentTimeBlock[8]) {
    input2.style.backgroundColor = "orange";
  } else if (hours < urrentTimeBlock[8]) {
    input2.style.backgroundColor = "blue";
  } else {
    input2.style.backgroundColor = "green";
  }
  if (hour == currentTimeBlock[9]) {
    input2.style.backgroundColor = "orange";
  } else if (hours < hourBlock1) {
    input2.style.backgroundColor = "blue";
  } else {
    input2.style.backgroundColor = "green";
  }
  if (hour == currentTimeBlock[1]) {
    input2.style.backgroundColor = "orange";
  } else if (hours < hourBlock1) {
    input2.style.backgroundColor = "blue";
  } else {
    input2.style.backgroundColor = "green";
  }
  if (hour == currentTimeBlock[1]) {
    input2.style.backgroundColor = "orange";
  } else if (hours < hourBlock1) {
    input2.style.backgroundColor = "blue";
  } else {
    input2.style.backgroundColor = "green";
  }
}

// function savePlan() {
//
save1.addEventListener("click", SaveFN1);

function SaveFN1() {
  if (input1.length > 0) {
    console.log(input1.value);
    localStorage.setItem("save1", input1.value);
  }
}

// localStorage.setItem( 'save', '')
// if ().target.nodeName === 'svg'){
//     let id = $(event).attr('class')
//     console.log(id)
// }

// function Save() {
//     if (input1.value.length > 0) {
//         localStorage.setItem("", input1.value);
//         console.log("working??");
// }

// }
// }if (currentTime === timeBlock1) {
//     console.log('working2')
//     input1.style.backgroundColor = 'green';
//
