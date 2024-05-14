import {createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';


const supabaseUrl = 'https://hppbefgitfnlexblwddq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwcGJlZmdpdGZubGV4Ymx3ZGRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MTAzMDIsImV4cCI6MjAzMTE4NjMwMn0.YAKUyD9tkyXXy4WD7L5y-D_-1pOnBDVdt1T8L9s3Jp4';
const supabase = createClient(supabaseUrl, supabaseKey);

const name = document.getElementById('name');

const peopleButton = document.getElementById("people-id");
const results = document.getElementById("results");

peopleButton.addEventListener("click", bleh);

while(results.firstChild){
    results.removeChild(results.firstChild);
}

async function bleh(){
    const {data,error} = await supabase.from('People').select().ilike('Name',`%${name.value}%`);
    for(let i = 0; i < data.length; i++){
        let resultSquare = document.createElement("div");
        resultSquare.style.border = "1px solid black";
        resultSquare.innerHTML = `Name = ${data[i].Name}<br>`;

        results.appendChild(resultSquare);
    }
}



