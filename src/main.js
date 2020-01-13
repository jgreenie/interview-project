var tableElement = document.getElementById('table-content');

function inputCheck(el) {
    // get absolute value
    value = Math.abs(el.value);

    // reset if too low
    if(value < 1) {
        el.value = '';
    } else {

        // reset if too high
        if(value > 6) {
            el.value = '';
        } else {

            // keep value if within range
            el.value = value;
        }
    }
}


function removeTable() {
    //find and empty main table content
    tableElement.innerHTML = "";
}

function resetTable() {
    var resetButton = document.getElementById('reset');
    //find and reset main table content populated with placeholder table
    tableElement.innerHTML = '<table class="init-table"><thead><tr>    <th></th>    <th>1</th>    <th>1</th>    <th>1</th>    <th>1</th></tr></thead><tbody><tr>    <td scope="row">1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td></tr><tr>    <td scope="row">1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td></tr><tr>    <td scope="row">1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td></tr><tr>    <td scope="row">1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td></tr></tbody>                 </table>';
    //turn off reset button
    resetButton.style.opacity = .5;

}

function generateTable() {
    // Clear away old table
    removeTable();

    // grab the major players
    var headers = 1,
        inputRow = document.getElementById('set-rows'),
        inputCol = document.getElementById('set-cols'),
        table = document.createElement('table'),
        resetButton = document.getElementById('reset');

    // if no value default to 6
    if(!inputRow.value) {
        inputRow.value = 6;
    }
    if(!inputCol.value) {
        inputCol.value = 6;
    }

    // accommodate for row/col headers
    var setRow = parseInt(inputRow.value, 10) + headers,
        setCol = parseInt(inputCol.value, 10) + headers;

    // add table
    tableElement.appendChild(table);

    //define structure
    table.innerHTML = "<thead><tr id='thead'></tr></thead><tbody id='tbody'></tbody>";

    var thead = document.getElementById('thead'),
        tbody = document.getElementById('tbody');

    //first loop for table headers to add to thead
    for (i = 0; i < setCol; i++) {
        //first row blank - no header
        if (i === 0) {
            thead.innerHTML += "<th></th>";
        } else {
            thead.innerHTML += "<th>" + i + "</th>";
        }
    }

    // second loop for rows into tbody
    for (j = 1; j < setRow; j++) {

        row = document.createElement('tr');

        // third loop for adding cells into row
        for (k = 0; k < setCol; k++) {
            // first row is the header
            if (k === 0) {
                row.innerHTML += "<td>" + j + "</td>";
            } else {
                row.innerHTML += "<td><span class='number'>" + j + " </span>" + "<span class='icon-cross'></span><span class='number'>" + k + "</span><span class='icon-equals'></span><span class='number'>" + (k * j) + " </span></td>";
            }
        }
        // add newly created row
        tbody.appendChild(row);
    }

    // turn on reset button
    resetButton.style.opacity = 1;
}

//on load
resetTable();