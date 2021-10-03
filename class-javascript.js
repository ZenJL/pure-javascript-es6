class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get sizeWidth() {
    return this.width
  }
  get sizeHeight() {
    return this.height
  }
  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.width * this.height
  }
}
// singeton pattern

const square = new Rectangle(200, 300);
console.log(square.sizeWidth)
console.log(square.sizeHeight)
console.log(square.arecalcAreaa)