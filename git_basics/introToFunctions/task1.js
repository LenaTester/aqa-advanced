// this is function declaration
function rectangleAreaDeclaration(width, height) {
  return width * height;
}

console.log(rectangleAreaDeclaration(5, 10));

// this is function expression
const rectangleAreaExpression = function (width, height) {
  return width * height;
};

console.log(rectangleAreaExpression(5, 10));

// this is arrow function
const rectangleAreaArrow = (width, height) => width * height;

console.log(rectangleAreaArrow(5, 10));
