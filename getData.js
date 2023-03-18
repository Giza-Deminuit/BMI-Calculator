   /********************************************************************** 
   This function retrieves the data from the HTML form and sends it to 
   other functions for processing. It then displays the output to the 
   screen.
   ***********************************************************************/
   function getData() {
    // Ge the data from the HTML form, and convert values to numbers
    let formInput = document.getElementById("formID");
    let heightFeet = Number(formInput.elements[0].value);
    let heightInches = Number(formInput.elements[1].value);
    let weight = Number(formInput.elements[2].value);

    // Call function to perform calculation
    let BMI = calculateBMI(heightFeet, heightInches, weight);

    // Call function to determine category
    let category = findCategory(BMI);

    // Display output
    document.getElementById("BMIoutputID").innerHTML = "<strong>Your BMI: </strong>" + BMI;
    document.getElementById("CategoryOutputID").innerHTML = "<strong>Category: </strong>" + category;
  }