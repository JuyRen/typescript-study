class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getAreaFunction() {
    return function () {
      return this.width * this.height;
    };
  }

  getAreaArrowFunction() {
    return () => {
      return this.width * this.height;
    };
  }
}
