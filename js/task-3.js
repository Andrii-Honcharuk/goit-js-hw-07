
class StringBuilder {
  #value;
  
  constructor (value) {
    this.#value = value;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value = `${this.#value}${str}`;
  }

  padStart(str) {
    this.#value = `${str}${this.#value}`;
  }

  padBoth(str) {
    this.#value = `${str}${this.#value}${str}`
  }
}

console.log("===== task-3 =====");

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="