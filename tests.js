// Test Case #1: Pressing % sign should convert 100 to 1%
const testPercentConversion = () => {
  try {
    clearDisplay();
    appendToDisplay("199");
    percentConvert();

    const result = currentDisplay;

    // Check if the result is equal to "1"
    if (result === 1.99) {
      console.log("✅ Test passed: Percent conversion successful");
    } else {
      console.warn(
        "❌ Test failed: Percent conversion result is not equal to 1.99"
      );
    }
  } catch (error) {
    console.warn(
      "❌ Test failed: Percent conversion encountered an error:",
      error.message
    );
  }
};

// Test Case #2: Pressing +/- sign should convert from positive to negative
const testPostiveNegative = () => {
  try {
    clearDisplay();
    appendToDisplay("199");
    plusNegativeConvert();

    const result = currentDisplay;

    // Check if the result is equal to "-199"
    if (result === -199) {
      console.log("✅ Test passed: PostiveNegative successful");
    } else {
      console.warn(
        "❌ Test failed: PostiveNegative result is not equal to -199"
      );
    }
  } catch (error) {
    console.warn(
      "❌ Test failed: PostiveNegative encountered an error:",
      error.message
    );
  }
};

// Test Case #3: Dividing with 0 returns an error
const testDivideZero = () => {
  try {
    clearDisplay();
    appendToDisplay("199");
    appendToDisplay("/");
    appendToDisplay("0");
    calculateResult();

    const result = currentDisplay;

    // Check if the result contains the error message
    if (result.includes("Error")) {
      // console.log(result);
      console.log("✅ Test passed: Dividing by zero throws an error");
    } else {
      console.warn("❌ Test failed: Dividing by zero doesn't throw an error");
    }
  } catch (error) {
    console.warn(
      "❌ Test failed: Dividing by zero encountered an irrelevant error:",
      error.message
    );
  }
};

// Test Case #4: addition test
const testPlus = () => {
  try {
    clearDisplay();
    appendToDisplay("199");
    appendToDisplay("+");
    appendToDisplay("1");
    calculateResult();

    const result = results;

    // Check if the result equals 200 as expected
    if (result === 200) {
      //  console.log(results);
      console.log("✅ Test passed: adding 1 gives 200");
    } else {
      //  console.log(results);
      console.warn("❌ Test failed: adding 1 doesn't return 200");
    }
  } catch (error) {
    console.warn(
      "❌ Test failed: Addition test encountered an irrelevant error:",
      error.message
    );
  }
};

// Test Case #5: subtraction test
const testMinus = () => {
  try {
    clearDisplay();
    appendToDisplay("199");
    appendToDisplay("-");
    appendToDisplay("1");
    calculateResult();

    const result = results;

    // Check if the result equals 200 as expected
    if (result === 198) {
      // console.log(results);
      console.log("✅ Test passed: subtracting 1 gives 198");
    } else {
      // console.log(results);
      console.warn("❌ Test failed: subtracting 1 doesn't return 198");
    }
  } catch (error) {
    console.warn(
      "❌ Test failed: Subtracting tests encountered an irrelevant error:",
      error.message
    );
  }
};

// Test Case #6: multiply test
const testMultiply = () => {
  try {
    clearDisplay();
    appendToDisplay("199");
    appendToDisplay("*");
    appendToDisplay("34");
    calculateResult();

    const result = results;

    // Check if the result equals 200 as expected
    if (result === 6766) {
      //  console.log(results);
      console.log("✅ Test passed: Mulitplying 199 by 34 gives 6766");
    } else {
      // console.log(results);
      console.warn("❌ Test failed: Mulitplying 199 by 34 doesn't return 6766");
    }
  } catch (error) {
    console.warn(
      "❌ Test failed: Multiplying tests encountered an irrelevant error:",
      error.message
    );
  }
};

// Test Case #7: divide test
const testDivide = () => {
  try {
    clearDisplay();
    appendToDisplay("199");
    appendToDisplay("/");
    appendToDisplay("2");
    calculateResult();

    const result = results;

    // Check if the result equals 9.55 as expected
    if (result === 99.5) {
      //   console.log(results);
      console.log("✅ Test passed: Dividing by 199 by 2 gives 99.5");
    } else {
      //  console.log(results);
      console.warn("❌ Test failed: Dividing by 199 by 2 doesn't return 6766");
    }
  } catch (error) {
    console.warn(
      "❌  Test failed: Division tests encountered an irrelevant error:",
      error.message
    );
  }
};

// Test Case #8: Check if there are li and span elements inside notes_frame
const testNotesContent = () => {
  try {
    const notesFrame = document.getElementById("notes_frame");

    // Check if the notes frame element exists
    if (!notesFrame) {
      console.warn("❌ Test failed: Element with ID 'notes_frame' not found");
      return;
    }

    const liElements = notesFrame.querySelectorAll("li");
    const spanElements = notesFrame.querySelectorAll("span");

    // Check if there are li and span elements
    if (liElements.length > 0 && spanElements.length > 0) {
      console.log(
        "✅ Test passed: 'notes_frame' contains li and span elements"
      );
    } else {
      console.warn(
        "❌ Test failed: 'notes_frame' does not contain li and span elements"
      );
    }
  } catch (error) {
    console.warn(
      "❌ Test failed: Error encountered during the test:",
      error.message
    );
  }
};

// delete all li and span inside document.getElementById("notes_frame").innerHTML
function deleteNotesContent() {
  const notesFrame = document.getElementById("notes_frame");

  // Check if the notes frame element exists
  if (notesFrame) {
    // Remove all child elements (li and span) from the notes frame
    while (notesFrame.firstChild) {
      notesFrame.removeChild(notesFrame.firstChild);
    }
  } else {
    console.warn("Element with ID 'notes_frame' not found");
  }
}

// Run the test
console.log("▶️ conducting tests");
testPercentConversion();
testPostiveNegative();
testDivideZero();
testPlus();
testMinus();
testMultiply();
testDivide();
clearDisplay();
testNotesContent();
deleteNotesContent();
console.log("⏹️ tests done");
