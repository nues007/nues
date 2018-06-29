// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  let canvas, cell, gridHeight, gridWidth, rows;
	
	canvas = $('#pixelCanvas');
	gridHeight = $('#inputHeight').val();
	gridWidth = $('#inputWeight').val();
	canvas.children().remove();
	
	for (x = 0; x < gridHeight; x++) {
	canvas.append('<tr></tr>');
	}
	
	rows = $('tr');
	
	for (y = 0; y < gridWidth; y++) {
	rows.append('<td></td>');
	}
// use find because the td is not known before the code runs
	cell = canvas.find('td');
	
	// When td is clicked by the user, change color of td
	cell.click(function(){
	var color;
		color = $("#colorPicker").val();
		$(this).css("background-color", color);
	});
	
}
// Your code goes here!


var submit;

submit = $('input[type="submit"]');

submit.click(function(event) {
  event.preventDefault();
  
  makeGrid();
  
  
});

	


