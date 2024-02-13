// Test Case #17: Pressing % sign should convert 100 to 1%
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

// Test Case #17: Pressing +/- sign should convert from positive to negative
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

// Run the test
testPercentConversion();
testPostiveNegative();
clearDisplay();
