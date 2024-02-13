// Test Case #1: Pressing % sign should convert 100 to 1%
const testPercentConversion = () => {
  try {
    clearDisplay();
    appendToDisplay("199");
    percentConvert();

    const result = currentDisplay;

    // Check if the result is equal to "1"
    if (result === 1.99) {
      console.log("Test passed: Percent conversion successful");
    } else {
      console.warn(
        "Test failed: Percent conversion result is not equal to 1.99"
      );
    }
  } catch (error) {
    console.warn(
      "Test failed: Percent conversion encountered an error:",
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
      console.log("Test passed: PostiveNegative successful");
    } else {
      console.warn("Test failed: PostiveNegative result is not equal to -199");
    }
  } catch (error) {
    console.warn(
      "Test failed: PostiveNegative encountered an error:",
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
      console.log(result);
      console.log("Test passed: Dividing by zero throws an error");
    } else {
      console.warn("Test failed: Dividing by zero doesn't throw an error");
    }
  } catch (error) {
    console.warn(
      "Test failed: Dividing by zero encountered an irrelevant error:",
      error.message
    );
  }
};

//
const testplus = () => {
  try {
    clearDisplay();
    appendToDisplay("199");
    appendToDisplay("+");
    appendToDisplay("1");
    calculateResult();

    const result = results;

    // Check if the result equals 200 as expected
    if (result === 200) {
      console.log(results);
      console.log("Test passed: adding 1 gives 200");
    } else {
      console.log(results);
      console.warn("Test failed: adding 1 doesn't return 200");
    }
  } catch (error) {
    console.warn(
      "Test failed: Addition test encountered an irrelevant error:",
      error.message
    );
  }
};

//
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
      console.log(results);
      console.log("Test passed: subtracting 1 gives 198");
    } else {
      console.log(results);
      console.warn("Test failed: subtracting 1 doesn't return 198");
    }
  } catch (error) {
    console.warn(
      "Test failed: Subtracting tests encountered an irrelevant error:",
      error.message
    );
  }
};

//
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
      console.log(results);
      console.log("Test passed: Mulitplying 199 by 34 gives 6766");
    } else {
      console.log(results);
      console.warn("Test failed: Mulitplying 199 by 34 doesn't return 6766");
    }
  } catch (error) {
    console.warn(
      "Test failed: Multiplying tests encountered an irrelevant error:",
      error.message
    );
  }
};

//
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
      console.log(results);
      console.log("Test passed: Dividing by 199 by 2 gives 99.5");
    } else {
      console.log(results);
      console.warn("Test failed: Dividing by 199 by 2 doesn't return 6766");
    }
  } catch (error) {
    console.warn(
      "Test failed: Division tests encountered an irrelevant error:",
      error.message
    );
  }
};

// Run the test
testPercentConversion();
testPostiveNegative();
testDivideZero();
testplus();
testMinus();
testMultiply();
testDivide();
clearDisplay();
