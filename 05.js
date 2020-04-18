// Реализовать класс 2-х мерный вектор.
// Класс должен содержать приватные атрибуты x и y - координаты вектора,
//  а также публичные методы для
//  - сложения векторов,
//  - вычитания векторов,
//  - умножения вектора на число,
//  - вывода вектора на печать.

class Vector {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  getX() {
    return this._x;
  }

  getY() {
    return this._y;
  }

  addition(otherVector) {
    let x = this._x + otherVector.getX();
    let y = this._y + otherVector.getY();
    return new Vector(x, y);
  }

  subtraction(otherVector) {
    let x = this._x - otherVector.getX();
    let y = this._y - otherVector.getY();
    return new Vector(x, y);
  }

  multiplication(number) {
    let x = this._x * number;
    let y = this._y * number;
    return new Vector(x, y);
  }

  toString() {
    return "{ x: " + this._x + ", y: " + this._y + " }";
  }
}

console.log(new Vector(1, 2).addition(new Vector(2, 3)).toString());
console.log(new Vector(1, 2).subtraction(new Vector(2, 3)).toString());
console.log(new Vector(1, 2).multiplication(10).toString());

v1 = new Vector(5, 8);
console.log(v1.toString());
