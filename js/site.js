// Get the values from the page
// Start our controller function
function getValues() {
    let startValue = 1;
    let endValue = 100;
  
    // We call generateNumbers
    let numbers = generateNumbers(startValue, endValue);
    // We call displayNumbers
    displayNumbers(numbers);
  }
  
  // Generate numbers from start value to end value
  // Logic functions
  function generateNumbers(startValue, endValue) {
    let numbers = [];
  
    // We want to get all numbers from start to end
    for (let index = startValue; index <= endValue; index++) {
      let number;
  
      if (index % 3 === 0 && index % 5 === 0) {
        number = "FizzBuzz";
      } else if (index % 3 === 0) {
        number = "Fizz";
      } else if (index % 5 === 0) {
        number = "Buzz";
      } else {
        number = index;
      }
  
      numbers.push(number);
    }
  
    return numbers;
  }
  
  // Display the numbers and mark even numbers bold
  // Display or view functions
  function displayNumbers(numbers) {
    let templateRows = "";
  
    for (let index = 0; index < numbers.length; index++) {
      let className = "even";
      let number = numbers[index];
  
      if (typeof number === "number") {
        if (number % 2 === 0) {
          className = "even";
        } else {
          className = "odd";
        }
      }
  
      templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }
  
    document.getElementById("results").innerHTML = templateRows;
  }
  