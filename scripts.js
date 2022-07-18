let save1 = document.getElementById("s1");
let save2 = document.getElementById("s2");
let save3 = document.getElementById("s3");
let save4 = document.getElementById("s4");
let save5 = document.getElementById("s5");
let save6 = document.getElementById("s6");
let save7 = document.getElementById("s7");
let save8 = document.getElementById("s8");
let save9 = document.getElementById("s9");
let save10 = document.getElementById("s10");
let save11 = document.getElementById("s11");
let save12 = document.getElementById("s12");
let save13 = document.getElementById("s13");
let save14 = document.getElementById("s14");
let save15 = document.getElementById("s15");
let save16 = document.getElementById("s16");
let save17 = document.getElementById("s17");

let Activity = document.querySelector("#form-control");

// save.addEventListener('click', function(){
// let key = Activity.value;
// let added = save.value;

// console.log(key);
// console.log(added)

// localStorage.setItem(key, added);
// console.log(localStorage)
// });

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

// getting timeblocks setup
let currentIndex = 0;

var input1 = document.querySelector("#box1");
let inputValue1 = document.querySelector("#inputPlan1");

var input2 = document.querySelector("#box2");
let inputValue2 = document.querySelector("#inputPlan2");
var input3 = document.querySelector("#inputPlan3");
let inputValue3 = document.querySelector("#inputPlan3");

var input4 = document.querySelector("#box4");
let inputValue4 = document.querySelector("#inputPlan4");

var input5 = document.querySelector("#box5");
let inputValue5 = document.querySelector("#inputPlan5");

var input6 = document.querySelector("#box6");
let inputValue6 = document.querySelector("#inputPlan6");

var input7 = document.querySelector("#box7");
let inputValue7 = document.querySelector("#inputPlan7");

var input8 = document.querySelector("#box8");
let inputValue8 = document.querySelector("#inputPlan8");

var input9 = document.querySelector("#box9");
let inputValue9 = document.querySelector("#inputPlan9");

var input10 = document.querySelector("#box10");
let inputValue10 = document.querySelector("#inputPlan10");

var input11 = document.querySelector("#box11");
let inputValue11 = document.querySelector("#inputPlan11");

var input12 = document.querySelector("#box12");
let inputValue12 = document.querySelector("#inputPlan12");

var input13 = document.querySelector("#box13");
let inputValue13 = document.querySelector("#inputPlan13");

var input14 = document.querySelector("#box14");
let inputValue14 = document.querySelector("#inputPlan14");

var input15 = document.querySelector("#box15");
let inputValue15 = document.querySelector("#inputPlan15");

var input16 = document.querySelector("#box16");
let inputValue16 = document.querySelector("#inputPlan16");

var input17 = document.querySelector("#box17");
let inputValue17 = document.querySelector("#inputPlan17");

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
  let hour = presentHour();

  if (hour == currentTimeBlock[0]) {
    input1.style.backgroundColor = "lightgreen";
  } else if (hours < currentTimeBlock[0]) {
    input1.style.backgroundColor = "lightblue";
  } else {
    input1.style.backgroundColor = "lightgrey";
  }
  if (hour == currentTimeBlock[1]) {
    input2.style.backgroundColor = "orange";
  } else if (hour < currentTimeBlock[1]) {
    input2.style.backgroundColor = "blue";
  } else {
    input2.style.backgroundColor = "green";
  }
  if (hour == currentTimeBlock[2]) {
    input3.style.backgroundColor = "orange";
  } else if (hour < currentTimeBlock[2]) {
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
    input7.style.backgroundColor = "orange";
  } else if (hour < hourBlock1) {
    input7.style.backgroundColor = "blue";
  } else {
    input7.style.backgroundColor = "green";
  }
  if (hour == currentTimeBlock[7]) {
    input8.style.backgroundColor = "orange";
  } else if (hour < currentTimeBlock[7]) {
    input8.style.backgroundColor = "blue";
  } else {
    input8.style.backgroundColor = "green";
  }
  if (hour == currentTimeBlock[8]) {
    input9.style.backgroundColor = "orange";
  } else if (hour < urrentTimeBlock[8]) {
    input9.style.backgroundColor = "blue";
  } else {
    input9.style.backgroundColor = "green";
  }
  if (hour == currentTimeBlock[9]) {
    input10.style.backgroundColor = "orange";
  } else if (hour < currentTimeBlock[9]) {
    input10.style.backgroundColor = "blue";
  } else {
    input10.style.backgroundColor = "green";
  }
  if (hour == currentTimeBlock[10]) {
    input11.style.backgroundColor = "orange";
  } else if (hour < currentTimeBlock[10]) {
    input11.style.backgroundColor = "blue";
  } else {
    input11.style.backgroundColor = "green";
  }
  if (hour == currentTimeBlock[11]) {
    input12.style.backgroundColor = "orange";
  } else if (hour < currentTimeBlock[11]) {
    input12.style.backgroundColor = "blue";
  } else {
    input12.style.backgroundColor = "green";
  }
  if (hour == currentTimeBlock[12]) {
    input13.style.backgroundColor = "orange";
  } else if (hour < currentTimeBlock[12]) {
    input13.style.backgroundColor = "blue";
  } else {
    input13.style.backgroundColor = "green";
  }
  if (hour == currentTimeBlock[13]) {
    input14.style.backgroundColor = "orange";
  } else if (hour < currentTimeBlock[13]) {
    input14.style.backgroundColor = "blue";
  } else {
    input14.style.backgroundColor = "green";
  }
  if (hour == currentTimeBlock[14]) {
    input15.style.backgroundColor = "orange";
  } else if (hour < currentTimeBlock[14]) {
    input15.style.backgroundColor = "blue";
  } else {
    input15.style.backgroundColor = "green";
  }
  if (hour == currentTimeBlock[15]) {
    input16.style.backgroundColor = "orange";
  } else if (hour < currentTimeBlock[15]) {
    input16.style.backgroundColor = "blue";
  } else {
    input16.style.backgroundColor = "green";
  }
  if (hour == currentTimeBlock[16]) {
    input17.style.backgroundColor = "orange";
  } else if (hour < currentTimeBlock[16]) {
    input17.style.backgroundColor = "blue";
  } else {
    input17.style.backgroundColor = "green";
  }
}

// function savePlan() {
//
save1.addEventListener("click", SaveFN1);

function SaveFN1() {
  //   if (inputValue1.length > 0) {
  console.log(inputValue1.value);
  localStorage.setItem("save1", inputValue1.value);

  // }]
  save2.addEventListener("click", SaveFN2);

  function SaveFN2() {
    //   if (inputValue1.length > 0) {
    console.log(inputValue2.value);
    localStorage.setItem("save2", inputValue2.value);
  }
  save3.addEventListener("click", SaveFN3);

  function SaveFN3() {
    //   if (inputValue1.length > 0) {
    console.log(inputValue3.value);
    localStorage.setItem("save3", inputValue3.value);
  }

  save4.addEventListener("click", SaveFN4);

  function SaveFN4() {
    //   if (inputValue1.length > 0) {
    console.log(inputValue4.value);
    localStorage.setItem("save4", inputValue4.value);
  }
  save5.addEventListener("click", SaveFN5);

  function SaveFN5() {
    //   if (inputValue1.length > 0) {
    console.log(inputValue5.value);
    localStorage.setItem("save5", inputValue5.value);
  }
  save6.addEventListener("click", SaveFN6);

  function SaveFN6() {
    //   if (inputValue1.length > 0) {
    console.log(inputValue6.value);
    localStorage.setItem("save6", inputValue6.value);
  }
  save7.addEventListener("click", SaveFN7);

  function SaveFN7() {
    //   if (inputValue1.length > 0) {
    console.log(inputValue7.value);
    localStorage.setItem("save7", inputValue7.value);
  }
  save8.addEventListener("click", SaveFN8);

  function SaveFN8() {
    //   if (inputValue1.length > 0) {
    console.log(inputValue8.value);
    localStorage.setItem("save8", inputValue8.value);
  }
  save9.addEventListener("click", SaveFN9);
  function SaveFN9() {
    //   if (inputValue1.length > 0) {
    console.log(inputValue9.value);
    localStorage.setItem("save9", inputValue9.value);
  }
  save10.addEventListener("click", SaveFN10);

  function SaveFN10() {
    //   if (inputValue1.length > 0) {
    console.log(inputValue10.value);
    localStorage.setItem("save10", inputValue10.value);
  }
  save11.addEventListener("click", SaveFN11);

  function SaveFN11() {
    //   if (inputValue1.length > 0) {
    console.log(inputValue11.value);
    localStorage.setItem("save11", inputValue11.value);
  }
  save12.addEventListener("click", SaveFN12);

  function SaveFN12() {
    //   if (inputValue1.length > 0) {
    console.log(inputValue12.value);
    localStorage.setItem("save12", inputValue12.value);
  }
  save13.addEventListener("click", SaveFN13);

  function SaveFN13() {
    //   if (inputValue1.length > 0) {
    console.log(inputValue13.value);
    localStorage.setItem("save13", inputValue13.value);
  }
  save14.addEventListener("click", SaveFN14);

  function SaveFN14() {
    //   if (inputValue1.length > 0) {
    console.log(inputValue14.value);
    localStorage.setItem("save14", inputValue14.value);
  }
  save15.addEventListener("click", SaveFN15);

  function SaveFN15() {
    //   if (inputValue1.length > 0) {
    console.log(inputValue15.value);
    localStorage.setItem("save15", inputValue15.value);
  }
  save16.addEventListener("click", SaveFN16);

  function SaveFN16() {
    //   if (inputValue1.length > 0) {
    console.log(inputValue16.value);
    localStorage.setItem("save16", inputValue16.value);
  }
  save17.addEventListener("click", SaveFN17);
  function SaveFN17() {
    //   if (inputValue1.length > 0) {
    console.log(inputValue17.value);
    localStorage.setItem("save17", inputValue17.value);
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
}
