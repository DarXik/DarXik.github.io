import dataBase from '/database/database.json' assert { type: 'json' };
JSON.stringify(dataBase)

var count = 0;
for (var key in dataBase) {
  if (dataBase.hasOwnProperty(key)) {
    count++;
  }
}
function first_load(loadTime) {
  $(document).ready(function () { $("body").hide().fadeIn(loadTime); });
}
first_load(1300)
var rnd = Math.round(Math.random() * count);
const btn = document.getElementById("confirmBtn");
var dbEng = String((document.getElementById("enWord").innerHTML = Object.keys(dataBase[rnd]))).toLowerCase();
var dbCzech = String(Object.values(dataBase[rnd]));

console.log(count)
console.log(dataBase[rnd])


window.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    alert("enter")
  }
});

btn.onclick = function () {
  var usrInput = String(
    document.getElementById("input_id").value
  ).toLowerCase();

  dbEng.localeCompare(usrInput);
  if (usrInput.localeCompare(dbCzech) == 0) {
    document.getElementById("main").style.borderColor = "green";
    document.getElementById("main").style.boxShadow = "1px -1px 49px -8px green";
    document.getElementById("shake").style.borderLeftColor = "green"
    window.setTimeout(reloader, 1000);
  } else {
    document.getElementById("main").style.borderColor = "red";
    document.getElementById("main").style.boxShadow = "1px -1px 49px -8px red";
    document.getElementById("shake").style.borderLeftColor = "red"
    window.setTimeout(reloader, 1000);
  }
  first_load(0)
};


function reloader() {
  window.location.reload();
  // window.location.href = window.location.href;
  document.getElementById("input_id").value = null;
  document.getElementById("main").style.borderColor = null;
  first_load(0)
  return console.log(true);
}

document.getElementById("nextBtn").onclick = function () {
  reloader();
}
// $(function () {
//   $('#shake').shake()
// });
// btn.onclick = function() {
//   document.getElementById("confirmBtn").classList.toggle("show-style");
// }
// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;