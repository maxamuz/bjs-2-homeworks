"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return arr; // корней нет
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    arr.push(root);
  } else {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    // Если взнос больше или равен сумме кредита
    if (contribution >= amount) {
        return 0;
    }

    // Преобразуем процентную ставку
    const monthlyPercent = percent / 100 / 12;
    
    // Тело кредита (сумма, которую нужно вернуть банку)
    const loanBody = amount - contribution;
    
    // Рассчитываем ежемесячный платёж
    const monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));
    
    // Общая сумма выплат по кредиту (без взноса)
    const totalPayments = monthlyPayment * countMonths;
    
    // Округляем до двух знаков после запятой
    return Number(totalPayments.toFixed(2));
}
