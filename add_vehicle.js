import {createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';


const supabaseUrl = 'https://hppbefgitfnlexblwddq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwcGJlZmdpdGZubGV4Ymx3ZGRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MTAzMDIsImV4cCI6MjAzMTE4NjMwMn0.YAKUyD9tkyXXy4WD7L5y-D_-1pOnBDVdt1T8L9s3Jp4';
const supabase = createClient(supabaseUrl, supabaseKey);

const rogo = document.getElementById('rogo');

const addVehicleButton = document.getElementById("button-id");
const message = document.getElementById("message");

addVehicleButton.addEventListener("click", addVehicle);



function addVehicle(registrationNumber, make, model, colour, owner) {
    // Create an object representing the new vehicle
    const newVehicle = {
      registrationNumber: registrationNumber,
      make: make,
      model: model,
      colour: colour,
      owner: owner
    };
  
   
    fetch(supabaseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey 
      },
      body: JSON.stringify(newVehicle)
    })
    .then(response => {
      if (response.ok) {
     
        showMessage('Vehicle added successfully');
      } else {
     
        showMessage('Error adding vehicle. Please try again.');
      }
    })
    .catch(error => {

      console.error('Error:', error);
      showMessage('Network error. Please try again later.');
    });
  }
  
  function showMessage(message) {
    
    const messageElement = document.getElementById('message');

    messageElement.textContent = message;
  }