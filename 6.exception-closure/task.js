// Функция parseCount
function parseCount(value) {
  const result = Number.parseFloat(value);
  if (Number.isNaN(result)) {
    throw new Error("Невалидное значение");
  }
  return result;
}

// Функция validateCount
function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error; // Возвращаем объект ошибки
  }
}

class Triangle {
  constructor(a, b, c) {
    // Проверка на существование треугольника
    if (a <= 0 || b <= 0 || c <= 0 || a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    const p = this.perimeter / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return parseFloat(area.toFixed(3)); // Округление до 3 знаков после запятой
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
