function getArrayParams(...arr) {
  if (arr.length === 0) {
    return { min: undefined, max: undefined, avg: undefined };
  }

  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let num of arr) {
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
    sum += num;
  }

  const avg = parseFloat((sum / arr.length).toFixed(2));

  return { min, max, avg };
}

// Насадка суммирования элементов
function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, num) => sum + num, 0);
}

// Насадка вычисления разницы максимального и минимального элементов
function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

// Насадка вычисления разницы сумм чётных и нечётных элементов
function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEven = 0;
  let sumOdd = 0;
  for (const num of arr) {
    if (num % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }
  return sumEven - sumOdd;
}

// Насадка вычисления среднего значения чётных элементов
function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEven = 0;
  let countEven = 0;
  for (const num of arr) {
    if (num % 2 === 0) {
      sumEven += num;
      countEven++;
    }
  }
  return countEven === 0 ? 0 : sumEven / countEven;
}

function makeWork(arrOfArr, func) {
  if (arrOfArr.length === 0) return 0; // Если массив пуст, возвращаем 0

  let maxWorkerResult = -Infinity; // Инициализация минимально возможным числом

  for (const arr of arrOfArr) {
    const currentResult = func(...arr); // Применяем насадку к текущему подмассиву
    if (currentResult > maxWorkerResult) {
      maxWorkerResult = currentResult; // Обновляем максимум, если текущий результат больше
    }
  }

  return maxWorkerResult;
}
