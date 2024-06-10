// JSON data
var jsonData = '{"name": "John", "age": 30, "city": "New York"}';

// Convert JSON to JavaScript object
var jsObject = JSON.parse(jsonData);

// Accessing the properties of the JavaScript object
console.log(jsObject.name); // Output: John
console.log(jsObject.age); // Output: 30
console.log(jsObject.city); // Output: New York