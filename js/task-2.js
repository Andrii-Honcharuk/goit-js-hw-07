

class Storage {
  #items;

  constructor(items) {
    this.#items = items;
}
getItems() {
  return this.#items;
}

addItem(newItem) {
  this.#items.push(newItem);
}

removeItem(itemToRemove){
  this.#items = this.#items.filter((value) => value !== itemToRemove);
}

// removeItem(itemToRemove) {
//   const indexToRemove = this.#items.indexOf(itemToRemove);
//   if (indexToRemove !== -1) {
//     this.#items.splice(indexToRemove, 1);
//   }
// } /* При нагоді прокоментуйте як краще  */

}




const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

console.log("===== task-2 =====");

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]