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
	htmlText += '<th class="lp font-weight-bold">L p</th><th class=" font-weight-bold">Nagłówek</th><th class="data font-weight-bold">Data</th>'
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