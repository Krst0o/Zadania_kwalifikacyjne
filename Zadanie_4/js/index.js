var data, mydata;
var htmlText;
var filledData;


$(document).ready(function (){
	//zaimportowanie pliku JSON
	data = JSON.parse(JSON.stringify(Data));
	
	writeHeaderData();
	$('#inserted-table').html(htmlText);
});

function writeHeaderData(){
	htmlText = '<table>';
	htmlText += '<tr>';
	htmlText += '<td class="lp">L p</td><td>Nagłówek</td><td class="data">Data</td>';
	htmlText += '</tr>';
}

function writeData(){
	for(let i = 0; i < data.length; i++){
		htmlText += '<tr>';
			$.each(data[i], function(index, value){
				htmlText += '<td>'+value+'</td>';
			}).filter(checkYear(value));
		htmlText += '</tr>';
	}
}
function checkYear(year){
	$('#selected-data').value.toString() === year;
}