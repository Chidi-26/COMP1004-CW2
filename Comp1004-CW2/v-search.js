import {createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';


const supabaseUrl = 'https://hppbefgitfnlexblwddq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwcGJlZmdpdGZubGV4Ymx3ZGRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MTAzMDIsImV4cCI6MjAzMTE4NjMwMn0.YAKUyD9tkyXXy4WD7L5y-D_-1pOnBDVdt1T8L9s3Jp4';
const supabase = createClient(supabaseUrl, supabaseKey);

const rego = document.getElementById('rego');

const vehicleButton = document.getElementById("vehicle-id");
const results = document.getElementById("results");

vehicleButton.addEventListener("click", v2);

while(results.firstChild){
    results.removeChild(results.firstChild);
}

async function v2(){

    const {data,error} = await supabase.from('Vehicles').select().ilike('VehicleID',`%${rego.value}%`);
    for(let i = 0; i < data.length; i++){
        let resultSquare = document.createElement("div");
        resultSquare.style.border = "1px solid black";
        resultSquare.innerHTML = `VehicleID = ${data[i].VehicleID}<br>`;

        results.appendChild(resultSquare);
    }
}