class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.array = [initialValue];
  }

  add(number) {
    // your implementation
    this.array.push("+", number);
    return this;
  }
  
  subtract(number) {
    // your implementation
    this.array.push("-", number);
    return this;
  }

  multiply(number) {
    // your implementation
    this.array.push("*", number);
    return this;
  }

  devide(number) {
    // your implementation
    this.array.push("/", number);
    return this;
  }

  pow(number) {
    // your implementation
    this.array.push("^", number);
    return this;
  }

  valueOf() {
    for (var i = this.array.length; i > 0; i--) {
      if (this.array[i] == "^") {
        this.array.splice(i-1, 3, Math.pow(this.array[i-1], this.array[i+1]));
        i = this.array.length -1;
      }
    }
    for (var i = 0; i < this.array.length; i++) {
      if (this.array[i] == "/") {
        this.array.splice(i-1, 3, this.array[i-1] / this.array[i+1]);
        i = 0;
      }
    }  
    for (var i = 0; i < this.array.length; i++) {
      if (this.array[i] == "*") {
        this.array.splice(i-1, 3, this.array[i+1] * this.array[i-1]);
        i = 0;
      }
    }
    for (var i = 0; i < this.array.length; i++) {
      if (this.array[i] == "-") {
        this.array.splice(i-1, 3, this.array[i-1] - this.array[i+1]);
        i = 0;
      }
    }
    for (var i = 0; i < this.array.length; i++) {
      if (this.array[i] == "+") {
        this.array.splice(i-1, 3, this.array[i+1] + this.array[i-1]);
        i = 0;
      }
    }
    
    return this.array[0];
  }

}

module.exports = SmartCalculator;
