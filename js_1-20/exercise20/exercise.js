class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(x) {
    if (x instanceof Square) {
      let area = x.side ** 2;
      return area;
    }
    if (x instanceof Circle) {
      let area = x.radius ** 2 * 3.14;
      return area;
    }
    if (x instanceof Rectangle) {
      let area = x.width * x.height;
      return area;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
