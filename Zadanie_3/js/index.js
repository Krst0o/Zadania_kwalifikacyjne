$(document).ready(function (){
	//zaimportowanie pliku JSON
	var mydata = JSON.stringify(Data);
	var data = JSON.parse(mydata);
	//Tworzenie tabeli z nadaną klasą
	var htmlText = '<div class="row">';
	
	//Pobieranie nagłówka
	$.each(data[0], function(index, value){
		htmlText +=	'<div class="col-sm-4 border text-center" style="font-weight: 700;">' + index + '</div>';
	});
	
	//Zamykanie wiersza
	htmlText += '</div>';

	for(let i = 0; i < data.length; i++){
		htmlText += '<div class="row">';
		$.each(data[i], function(index, value){
		htmlText +=	'<div class="col-sm-4 border text-center">'+value+'</div>';})
		htmlText += '</div>';
	}
	//Zamykanie tabeli
	htmlText += '</div>';
	$('#inserted-table').html(htmlText);
});
