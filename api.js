async function fetchAsyncLaunches() {
    let response = await fetch("https://api.spacexdata.com/v3/launches");
    let data = await response.json();
    console.log(data);
    generate_table_launches(data);
    return data;
}

function generate_table_launches(data) {
    const myBooks = data

// Extract value from table header. 
// ('Book ID', 'Book Name', 'Category' and 'Price')
let col = ["Numero de vol","Nom de mission","date de lancement","Reussite","nom de la capsule"];

// Create table.
const table = document.createElement("table");

// Create table header row using the extracted headers above.
let tr = table.insertRow(-1);                   // table row.

for (let i = 0; i < col.length; i++) {
let th = document.createElement("th");      // table header.
th.innerHTML = col[i];
tr.appendChild(th);
}

// add json data to the table as rows.
for (let i = 0; i < myBooks.length; i++) {

tr = table.insertRow(-1);
let tabCell = tr.insertCell(-1);
tabCell.innerHTML = myBooks[i].flight_number;
tabCell = tr.insertCell(-1);
tabCell.innerHTML = myBooks[i].mission_name;
tabCell = tr.insertCell(-1);
tabCell.innerHTML = myBooks[i].launch_date_utc;
tabCell = tr.insertCell(-1);
tabCell.innerHTML = myBooks[i].launch_success;
tabCell = tr.insertCell(-1);
tabCell.innerHTML = myBooks[i].rocket.rocket_name;
}

// Now, add the newly created table with json data, to a container.
const divShowData = document.getElementById('showLaunches');
divShowData.innerHTML = "";
divShowData.appendChild(table);
}

async function fetchAsyncCapsules() {
    let response = await fetch("https://api.spacexdata.com/v3/capsules");
    let data = await response.json();
    console.log(data);
    generate_table_capsules(data);
    return data;
}

function generate_table_capsules(data) {
    const myBooks = data

// Extract value from table header. 
// ('Book ID', 'Book Name', 'Category' and 'Price')
let col = ["id capsule","status","premier lancement","nombre de missions","atterissage","type","details"];

// Create table.
const table = document.createElement("table");

// Create table header row using the extracted headers above.
let tr = table.insertRow(-1);                   // table row.

for (let i = 0; i < col.length; i++) {
let th = document.createElement("th");      // table header.
th.innerHTML = col[i];
tr.appendChild(th);
}

// add json data to the table as rows.
for (let i = 0; i < myBooks.length; i++) {

tr = table.insertRow(-1);
let tabCell = tr.insertCell(-1);
tabCell.innerHTML = myBooks[i].capsule_id;
tabCell = tr.insertCell(-1);
tabCell.innerHTML = myBooks[i].status;
tabCell = tr.insertCell(-1);
tabCell.innerHTML = myBooks[i].original_launch;
tabCell = tr.insertCell(-1);
tabCell.innerHTML = myBooks[i].missions.length;
tabCell = tr.insertCell(-1);
tabCell.innerHTML = myBooks[i].landings;
tabCell = tr.insertCell(-1);
tabCell.innerHTML = myBooks[i].type;
tabCell = tr.insertCell(-1);
tabCell.innerHTML = myBooks[i].details;
}

// Now, add the newly created table with json data, to a container.
const divShowData = document.getElementById('showLaunches');
divShowData.innerHTML = "";
divShowData.appendChild(table);
}