function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
console.log(getType("Hello")); // String, string
console.log(getType(123)); // Number, number
console.log(getType(12.3)); // Number, number
console.log(getType(true)); // Boolean, boolean
console.log(getType(undefined)); // Undefined, undefined
console.log(getType(null)); // Null, object
console.log(getType({})); // Object객체, object
console.log(getType([])); // Array객체, object
console.log(getType(function fct() {})); // Function객체, function
