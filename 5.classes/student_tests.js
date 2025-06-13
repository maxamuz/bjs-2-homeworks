describe("Домашнее задание к лекции 5 «Классы». Дополнительное задание", () => {
  describe("Задача №3", () => {
    let student;

    beforeEach(function () {
      student = new Student("Иван Петров");
    });

    it("создание объекта Student", () => {
      expect(student).toBeDefined();
      expect(student.name).toEqual("Иван Петров");
      expect(student.marks).toEqual({});
    });

    it("добавление оценок по разным предметам", () => {
      student.addMark(3, "математика");
      expect(student.marks).toEqual({ математика: [3] });
      student.addMark(5, "математика");
      expect(student.marks).toEqual({ математика: [3, 5] });
      student.addMark(5, "физика");
      expect(student.marks).toEqual({ математика: [3, 5], физика: [5] });
    });

    it("невозможность добавления некорректных оценок", () => {
      student.addMark(0, "математика");
      expect(student.marks).toEqual({});
      student.addMark(3, "математика");
      expect(student.marks).toEqual({ математика: [3] });
      student.addMark(10, "математика");
      expect(student.marks).toEqual({ математика: [3] });
      student.addMark(7, "физика");
      expect(student.marks).toEqual({ математика: [3] });
    });

    it("подсчёт средней оценки по предмету", () => {
      student.addMark(3, "математика");
      student.addMark(5, "математика");
      expect(student.getAverageBySubject("математика")).toEqual(4);
    });

    it("подсчёт средней оценки по несуществующему предмету", () => {
      student.addMark(3, "математика");
      student.addMark(5, "математика");
      expect(student.getAverageBySubject("программирование")).toEqual(0);
    });

    it("подсчёт общей средней оценки пустого объекта оценок", () => {
      expect(student.getAverage()).toEqual(0);
    });

    it("подсчёт общей средней оценки", () => {
      student.addMark(3, "математика");
      student.addMark(5, "математика");
      student.addMark(5, "история");
      student.addMark(5, "история");
      expect(student.getAverage()).toEqual(4.5);
    });
  });
});

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {}; // Хранилище оценок по предметам
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return; // Игнорируем некорректные оценки
    }

    if (!this.marks[subject]) {
      this.marks[subject] = []; // Создаем массив для предмета, если его нет
    }

    this.marks[subject].push(mark); // Добавляем оценку
  }

  getAverageBySubject(subject) {
    if (!this.marks[subject] || this.marks[subject].length === 0) {
      return 0; // Если предмета нет или нет оценок — возвращаем 0
    }

    const sum = this.marks[subject].reduce((acc, current) => acc + current, 0);
    return sum / this.marks[subject].length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);

    if (subjects.length === 0) {
      return 0; // Нет предметов — средняя оценка 0
    }

    const totalAveragesSum = subjects.reduce((sum, subject) => {
      return sum + this.getAverageBySubject(subject);
    }, 0);

    return totalAveragesSum / subjects.length;
  }
}
