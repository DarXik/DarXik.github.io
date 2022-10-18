// import dataBase from "./database.json" assert { type: "json" };
// btn.onclick = function() {
//   document.getElementById("confirmBtn").classList.toggle("show-style");
// }
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



btn.onclick = function () {
  
  console.log("compared " + dbCzech.localeCompare(usrInput));
  var usrInput = String(
    document.getElementById("input_id").value
  ).toLowerCase();

  dbEng.localeCompare(usrInput);

  if (usrInput.localeCompare(dbCzech) == 0) {
    alert("CORRECT");
    // btn.addEventListener("click", function onClick() {
    //   const element = document.querySelector("main");
    //   element.style.border = "green";
    // });
  } else {
    alert("INCORRECT");
    // btn.addEventListener("click", function onClick() {
    //   const element = document.querySelector("main");
    //   element.style.border = "red";
    // });
  }
  console.log(dbEng + " vs " + usrInput);
};


function reloader() {
  window.location.reload();
  document.getElementById("input_id").value = null;
}
function comparer(){
  
}