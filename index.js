function cars(name, price, calc) {
  this.name = name;
  this.price = price;
  this.calc = calc;
}

var a = document.getElementById("cars");

function x() {
  let Cars = document.getElementById("cars").value;
  let amont = document.getElementById("amont").value;
  let parseC = parseInt(Cars);
  let parseV = parseInt(amont);
  console.log(parseC);
  console.log(parseV);

  //
  let pay = parseC * parseV;
  let calc = pay / 100;
  console.log(calc);
  var sumall = (parseC - calc) * 0.011667;
  console.log(sumall);
  document.getElementById("sum").innerHTML = `
  ${parseC}₪ :מחיר הרכב
    <br/>
    ${calc}₪ :מחיר המקדמה 
    <br/>
    ${sumall}₪ :המחיר לחודש
    <br/>
    <img  src="Untitled design.gif" width="200px" height="200px" alt="">
    `;
}

// console.log('data');
