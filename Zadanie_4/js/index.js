var data, mydata;


$(document).ready(function (){
	//zaimportowanie pliku JSON
	mydata = JSON.stringify(Data);
	data = JSON.parse(mydata);
	
	writeData();
});


function writeData(){
	var htmlText = '<table>';
	htmlText += '<tr>';
	htmlText += '<td class="lp">L p</td><td>Nagłówek</td><td class="data">Data</td>';
	htmlText += '</tr>';

	for(let i = 0; i < data.length; i++){
		htmlText += '<tr>';
			$.each(data[i], function(index, value){
				htmlText += '<td>'+value+'</td>';
			});
		htmlText += '</tr>';
	}

	$('#inserted-table').html(htmlText);
}