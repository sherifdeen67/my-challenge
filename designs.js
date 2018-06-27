$('#sizePicker').submit(function(event) {
    event.preventDefault();
    //get Grid sizes
    let gridHeight = $('#inputHeight').val();
    let gridWidth = $('#inputWeight').val();

    //pass the value of the grid sizes as arguments to the makeGrid function.
    makeGrid(gridHeight, gridWidth);
    applyColor();
  });

//create the grid using the value of the grid sizes
function makeGrid(gridHeight, gridWidth) {
  $('tr').remove();
  for (let row = 1; row <= gridHeight; row++) {
    $('#pixelCanvas').append('<tr></tr>');
    for (let column = 1; column <= gridWidth; column++) {
      $('tr').filter(':last').append('<td></td>');
    }
  }
}

//add color to the cell when clicked
function applyColor(){
  const cells = $('td');
  cells.click(function() {

    //extract the current value of the color picker
    let color = $('#colorPicker').val();
  
    //check for style attribute and remove or add it.
    if ($(this).attr('style')) {
      $(this).removeAttr('style');
    }
    else {
      $(this).attr('style', 'background-color:' + color);
    }
  });
}