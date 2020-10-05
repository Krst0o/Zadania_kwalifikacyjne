var data, mydata;
var htmlText;
let indexToCheck;
let valueToCheck;
let filteredData;
document.querySelector("select").addEventListener('select', writeData);

$(document).ready(function (){
	//zaimportowanie pliku JSON
	data = JSON.parse(JSON.stringify(Data));
	
	writeData();
	$('#inserted-table').html(htmlText);
});

function writeData(){
	writeHeaderData();
	writeValues();
}

function writeHeaderData(){
	htmlText = '<table>';
	htmlText += '<tr>';
	htmlText += '<td class="lp">L p</td><td>Nagłówek</td><td class="data">Data</td>';
	htmlText += '</tr>';
}

function writeValues(){
	filteredData = data.filter(function(entry){
		return entry.Data === $('#selected-data').val();
	});

	for(let i = 0; i < filteredData.length; i++){
		htmlText += '<tr>';
			$.each(filteredData[i], function(index, value){	
				htmlText += '<td>'+value+'</td>';
			});
		htmlText += '</tr>';
	}
}