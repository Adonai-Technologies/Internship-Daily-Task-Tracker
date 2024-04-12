// Get the DOM element with the id 'inputBox' and assign it to the variable 'display'
let display = document.getElementById('inputBox');

// Select all button elements in the document and assign them to the variable 'buttons'
let buttons = document.querySelectorAll('button');

// Convert the NodeList 'buttons' to an array and assign it to the variable 'buttonsArray'
let buttonsArray = Array.from(buttons);

// Initialize an empty string variable 'string'
let string ='';

// Iterate over each button in the 'buttonsArray'
buttonsArray.forEach(btn => {

   // Add an event listener for the 'click' event on each button
   btn.addEventListener('click',(e)=>{
  
      // Check if the innerHTML of the clicked button is 'DEL'
      if(e.target.innerHTML == 'DEL') {

         // Remove the last character from the 'string'
         string=string.substring(0,string.length-1)

         // Update the value of the display to the new 'string'
         display.value=string;

      // Check if the innerHTML of the clicked button is 'AC'
      }else if(e.target.innerHTML == 'AC') {

         // Reset the 'string' to an empty string
         string='';

         // Update the value of the display to the new 'string'
         display.value=string;

      // Check if the innerHTML of the clicked button is '='
      }else if(e.target.innerHTML == '=') {

         // Evaluate the expression in 'string' using the eval() function
         string=eval(string);

         // Update the value of the display to the result of the evaluation
         display.value=string;

      // If none of the above conditions are met
      }else{

         // Concatenate the innerHTML of the clicked button to the 'string'
         string +=e.target.innerHTML;

         // Update the value of the display to the new 'string'
         display.value=string;
      }
   })
})
