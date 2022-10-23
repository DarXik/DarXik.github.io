// import dataBase from "./database.json" assert { type: "json" };
// btn.onclick = function() {
//   document.getElementById("confirmBtn").classList.toggle("show-style");
// }
import data from './database.json' assert { type: 'JSON' };
console.log(data);

const dataBase = [
  {
    computer: "počítač",
  },
  {
    house: "dům",
  },
  {
    car: "auto",
  },
  {
    yellow: "žlutá",
  },
  {
    book: "kniha",
  },
  {
    table: "stůl",
  },
  {
    wall: "zeď",
  },
  {
    iron: "železo",
  },
];

var rnd = Math.round(Math.random() * 7);
var dbCzech = String(Object.values(dataBase[rnd]));
const btn = document.getElementById("confirmBtn");
var dbEng = String(
  (document.getElementById("enWord").innerHTML = Object.keys(dataBase[rnd]))
).toLowerCase();

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    alert("enter");
    // https://stackoverflow.com/questions/6542413/bind-enter-key-to-specific-button-on-page
  }
});

btn.onclick = function () {
  var usrInput = String(
    document.getElementById("input_id").value
  ).toLowerCase();

  dbEng.localeCompare(usrInput);
  if (usrInput.localeCompare(dbCzech) == 0) {
    // alert("CORRECT");
    document.getElementById("main").style.borderColor = "green";
    document.getElementById("main").style.boxShadow =
      "1px -1px 49px -8px green";
  } else {
    // alert("INCORRECT");
    document.getElementById("main").style.borderColor = "red";
    document.getElementById("main").style.boxShadow = "1px -1px 49px -8px red";
  }
  window.setTimeout(reloader, 1700);
};

function reloader() {
  window.location.reload();
  document.getElementById("input_id").value = null;
  document.getElementById("main").style.borderColor = null;
}
