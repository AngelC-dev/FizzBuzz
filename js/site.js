// Get the values from the page
// Start our controller function
function getValues() {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
  
    // Parse for numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
  
    // Check that the numbers are integers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
      // Call fizzBuzz
      let fbArray = fizzBuzz(fizzValue, buzzValue);
  
      // Call displayData and write the values to the screen
      displayData(fbArray);
    } else {
      alert("You must enter an integer.");
    }
  }
  
  // Do fizz buzz
  function fizzBuzz(fizzValue, buzzValue) {
    let returnArray = [];
  
    // Loop from 1 to 100
    for (let i = 1; i <= 100; i++) {
      if (i % fizzValue === 0 && i % buzzValue === 0) {
        returnArray.push("FizzBuzz");
      } else if (i % fizzValue === 0) {
        returnArray.push("Fizz");
      } else if (i % buzzValue === 0) {
        returnArray.push("Buzz");
      } else {
        returnArray.push(i);
      }
    }
    return returnArray;
  }
  
  // Loop over the array and create a table row for each item
  function displayData(fbArray) {
    // Get the table body from the page
    let tableBody = document.getElementById("results");
  
    // Get the templateRow
    let templateRow = document.getElementById("fbTemplate");
  
    // Clear table first
    tableBody.innerHTML = "";
  
    for (let i = 0; i < fbArray.length; i += 5) {
      let tableRow = document.importNode(templateRow.content, true);
  
      // Grab the td elements and populate them with values
      let rowCols = tableRow.querySelectorAll("td");

      rowCols[0].classList.add(fbArray[i]);
      rowCols[0].textContent = fbArray[i];

      rowCols[1].classList.add(fbArray[i + 1]);
      rowCols[1].textContent = fbArray[i + 1];

      rowCols[2].classList.add(fbArray[i + 2]);
      rowCols[2].textContent = fbArray[i + 2];

      rowCols[3].classList.add(fbArray[i + 3]);
      rowCols[3].textContent = fbArray[i + 3];

      rowCols[4].classList.add(fbArray[i + 4]);
      rowCols[4].textContent = fbArray[i + 4];
  
      tableBody.appendChild(tableRow);
    }
  }
  
  // Event listener for the submit button
  document.getElementById("btnSubmit").addEventListener("click", getValues);
  