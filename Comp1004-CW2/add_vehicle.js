import {createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';


const supabaseUrl = 'https://hppbefgitfnlexblwddq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwcGJlZmdpdGZubGV4Ymx3ZGRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MTAzMDIsImV4cCI6MjAzMTE4NjMwMn0.YAKUyD9tkyXXy4WD7L5y-D_-1pOnBDVdt1T8L9s3Jp4';
const supabase = createClient(supabaseUrl, supabaseKey);

const rego = document.getElementById('rego');

const addVehicleButton = document.getElementById("button-id");

const make = document.getElementById('make');
const model = document.getElementById('model');
const colour = document.getElementById('colour');
const owner = document.getElementById('owner');



addVehicleButton.addEventListener("click", addVehicle);



async function addVehicle() {
   
   const{data,error} = await supabase.from('Vehicles').insert({ VehicleID: rego.value,
    Make: make.value,
    Model: model.value,
    Colour: colour.value,
    OwnerID: owner.value});

   
   if(error){
    showMessage('Error - cannot add vehicle');
   }
   if(data){
    showMessage('Added vehicle');
    
   }

}
  function showMessage(message) {
    
    const messageElement = document.getElementById('message');

    messageElement.textContent = message;
  }