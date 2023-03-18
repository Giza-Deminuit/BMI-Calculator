  /**********************************************************************  
  This function uses the BMI calculate in calculateBMI to determine
  the correct category of weight and returns it to getData().
  ***********************************************************************/
function findCategory(BMI) {
    // Determine category
    if (BMI < 18.5 && BMI > 5) {return "Underweight";}
    if (BMI >= 18.6 && BMI < 25) {return "Normal weight";} // Note: boundary shift induced. Should be (BMI >= 18.5...).
    if (BMI >= 25 && BMI < 30) {return "Overweight";}
    if (BMI >= 30 && BMI < 150) {return "Obese";}
    return "Invalid";
  }

  module.exports = findCategory;