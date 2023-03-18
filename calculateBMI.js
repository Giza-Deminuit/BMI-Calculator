  /**********************************************************************  
  This function uses the input data to calculate the BMI and returns it 
  to getData().
  ***********************************************************************/
  function calculateBMI(heightFeet, heightInches, weight) {
    let heightInInches = (heightFeet * 12) + heightInches;
    let weightMetric = weight * 0.45;
    let heightMetric = heightInInches * 0.025;
    heightMetric = heightMetric * heightMetric;
    return Number((weightMetric / heightMetric).toFixed(2));
  }

  module.exports = calculateBMI;