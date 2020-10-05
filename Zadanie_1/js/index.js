$(document).ready(function (){
	//zaimportowanie pliku JSON
	var mydata = JSON.stringify(Data);
	var data = JSON.parse(mydata);
	//Tworzenie tabeli z nadaną klasą
	var htmlText = '<table class="table">';
		htmlText += '<tr>';
	
	//Pobieranie nagłówka
	$.each(data[0], function(index, value){
		htmlText +=	'<th>'+index+'</th>';
	});
	
	//Zamykanie wiersza
	htmlText += '</tr>';

	for(let i = 0; i < data.length; i++){
		htmlText += '<tr>';
		$.each(data[i], function(index, value){
		htmlText +=	'<td>'+value+'</td>';})
		htmlText += '</tr>';
	}
	//Zamykanie tabeli
	htmlText += '</table>';

	$('.inserted-table').html(htmlText);
});
