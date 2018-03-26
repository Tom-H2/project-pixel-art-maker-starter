// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

}
    let grid = $('#pixelCanvas');
    let rows = $("#inputHeight").val();
    let columns = $("#inputWidth").val();

    grid.children().remove(); // delete any previous table rows

//Build the grid row by row and then append to the table
//  project rubrics requires use of for and while loops

    let tableRows = '';
    let r = 1;
    while (r <= rows) {
        tableRows += '<tr>';
        for (let c=1; c <= columns; c++) {
            tableRows += '<td></td>';
        }
        tableRows += '</tr>';
        r += 1;
    } // end while loop
    $(grid).append(tableRows); // add grid to DOM
