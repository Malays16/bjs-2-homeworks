"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = b**2 - 4 * a * c;

  if (D === 0) {
    arr = [-b / (2 * a)];
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    arr = [x1, x2];
  }

  return arr;
}

solveEquation(1, 2, 10);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyInterest = percent / 100 / 12;
  const creditAmount = amount - contribution;
  const monthlyPayment = creditAmount * (monthlyInterest + (monthlyInterest / ((1 + monthlyInterest) ** countMonths - 1)));
  const totalPayment = monthlyPayment * countMonths;

  return Number(totalPayment.toFixed(2));
}

calculateTotalMortgage(10,20000,20000,48);