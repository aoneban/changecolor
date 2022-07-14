document.getElementById("btn").addEventListener("click", myFunction);

function myFunction() {
  document.getElementsByTagName("body")[0].style.backgroundColor = myRand();
  document.getElementById("col").innerText = document.body.style.backgroundColor;
}

function makeRandomArr() {
  return Math.random() - 0.5;
}

function myRand() {
  const ar1 = ["a", "b", "c", "d", "e", "f"];
  const ar2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let y = [].concat(...ar1, ...ar2);
  return "#" + y.sort(makeRandomArr).join("").substr(0, 6);
}


//console.log(myRand());
