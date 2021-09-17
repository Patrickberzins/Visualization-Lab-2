
let attractions = fetch('../attractions.json')
  .then(response => response.json())
  .then(data => {
		//attractions = data;
		//console.log('attractions', attractions);
        return data;
	});

attractions.then (data => {console.log(data)})

function filterData(category) {
    if (category == 'All') {
        attractions.then (data => {renderBarChart(data.filter(function (e) {
            return e.Category;}).slice(0,5))}); 
    }
    else {
    attractions.then (data => {renderBarChart(data.filter(function (e) {
        return e.Category == category;}).slice(0,5))}); 
    }
}


function renderValue (x) {
    console.log (x.target.value)
    if (x.target.value != 'all')
        filterData(x.target.value);
    else filterData('All');
}

filterData ('All');

document.getElementById("attraction-category").addEventListener("change", renderValue);
