import {groups} from "./students.js";

var grade = document.getElementById("grade");
var funct = document.getElementById("funct");
var btn = document.getElementById("goBtn");
var outDiv = document.getElementById("outputDiv");
var studList;

function setList()
{
  for (var group of groups)
  {
    if (group.name === grade.value) {studList = group.list;}
  }
}

setList();

grade.addEventListener("change", setList);

btn.onclick = function ()
{
  outDiv.innerHTML = ""; //clear div
  if (funct.value === "single")
  {
    outDiv.innerHTML = studList[Math.floor(studList.length * Math.random())];
  }
  else if (funct.value === "shuffle")
  {
    var sl = shuffle(studList);
    for (var i = 0; i < sl.length; i++)
    {outDiv.innerHTML += i + 1 + ". " + sl[i] + '<br />';}
  }
}


function shuffle(array) { //taken from StackOverflow
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
