/* When pressing a button this should be shown on the display
    1) [make a funtion to store the equation and show the last active number "before operator" in the display]
        [bridge between HTML and JavaScript]
            
   when pressing an operator it should not be shown. When pressing a new number the current number should be swapped.
    2) [ make a placeholder for operator to track if one is pressed - range from 0-1]
    
    When pressing "=" the calculation is shown in the display. If i on the other hand press an operator after one operator has allready been pressed, the solution is shown.
    3) [make a function that solves the equation (display and solve)]
    
    When pressing ="+/-" and "%" the calculations is made at an instance
    4) [make individual functions for "clear", "minus/plus conversion" and "percentage"]

    Make styling when pressing
    5) keep active button pressed - not equal. */

let currentDisplay = "0"; //current display content
let resultDisplay = false; // result display content
let historyEquation = "0"; // temp storage to be passed to notepad

// Function to append a value to the current display
function appendToDisplay(value) {
  if (currentDisplay === "0" || resultDisplay) {
    // If the current display is "0" or the result is already displayed, replace it with the new value
    currentDisplay = value;
  } else {
    // Otherwise, concatenate the new value to the current display
    currentDisplay += value;
  }

  // Reset the result display flag to false, as the user entered a new value
  resultDisplay = false;

  // Update the calculator display to show the new content
  updateDisplay();
  console.log(value);
}

// Function to update the calculator display with the current content
function updateDisplay() {
  const displayElement = document.getElementById("display");
  displayElement.value = currentDisplay;
}

//Function to calculate and display the result
function calculateResult() {
  try {
    // Use the eval() function to evaluate the mathematical expression
    mediate_result = currentDisplay;
    const result = eval(currentDisplay);
    console.log(result);

    // Append the result to the current display, preceded by an equal sign (=)
    currentDisplay += "\n=" + result.toString();

    // Update the calculator display with the result
    updateDisplay();
    calulationHistory(mediate_result, result);
  } catch (error) {
    // If there is an error in the expression (e.g., dividing by zero), display an error message
    currentDisplay += "\nError";

    // Update the calculator display to show the error message
    updateDisplay();
  }

  // Set the result display flag to true to indicate that the result is displayed
  resultDisplay = true;
}

// Function to clear the last element from the current display
function clearLastElement() {
  // Remove the last character from the current display using the slice() method
  currentDisplay = currentDisplay.slice(0, -1);

  // If the current display becomes empty, set it back to "0"
  if (currentDisplay === "") {
    currentDisplay = "0";
  }

  // Update the calculator display to reflect the changes
  updateDisplay();
}

//Function to clear the entire display
function clearDisplay() {
  currentDisplay = "0"; // Reset the current display to "0"
  resultDisplay = false; // Reset the result display flag to false

  // Update the calculator display to show the cleared content
  updateDisplay();
}

function calulationHistory(mediate_result, result) {
  let car2 = mediate_result.split("").join(" ");

  const listCalc = [];
  console.log(result);
  listCalc.push(car2 + " = " + result);

  print_out(listCalc, car2, result);

  if (listCalc.length >= 0) {
    document.getElementById("notes_frame").innerHTML +=
      '<li class="calcHistory">' + listCalc + "</li>";
    document.getElementById("notes_frame").innerHTML +=
      '<span id="border"></span>';
    updateScroll();
  } else if (listCalc === error) {
    document.getElementById("notes_frame").innerHTML +=
      '<li class="calcHistory">error"</li>';
    document.getElementById("notes_frame").innerHTML +=
      '<span id="border"></span>';
  }
}

function print_out(listCalc, car2, result) {
  console.log(
    "typeof Car 2 = " +
      typeof car2 +
      "\n" +
      "typeof listCalc = " +
      typeof listCalc +
      "\n" +
      "typeof result = " +
      typeof result +
      "\n" +
      'Car "2" = ' +
      car2 +
      "\n" +
      "Result = " +
      result +
      "\n" +
      "ListCalc = " +
      listCalc +
      "\n" +
      "Length listCalc = " +
      listCalc.length
  );
}

function updateScroll() {
  var element = document.getElementById("note-area");
  element.scrollTop = element.scrollHeight;
}

function handleMouseOver() {
  let textToCopy = document.getElementById("display").value;

  // Set a timeout to check focus after 3 seconds
  setTimeout(() => {
    const displayDiv = document.getElementById("displayDiv");

    if (document.hasFocus() && displayDiv && displayDiv.matches(":hover")) {
      // Document is in focus, and displayDiv is still being hovered after 3 seconds
      const copyToClipboard = async (text) => {
        try {
          await navigator.clipboard.writeText(text);
          console.log("Content copied to clipboard");
        } catch (err) {
          console.error("Failed to copy: ", err);
        }
      };

      copyToClipboard(textToCopy);
    } else {
      console.log(
        "Aborted: Either document is not in focus or displayDiv is not being hovered after 1.5 seconds."
      );
    }
  }, 1500);
}
