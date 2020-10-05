var data, mydata;
var htmlText;

$(document).ready(function (){
	//zaimportowanie pliku JSON
	data = JSON.parse(JSON.stringify(Data));
	
	writeHeaderData();
	writeData();
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
			}).filter(checkYear(index, value));
		htmlText += '</tr>';
	}
}

function checkYear(index, value){
	return index == "Data" && value == $('#selected-data').val()
}