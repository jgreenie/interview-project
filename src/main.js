function generateTable() {
    removeTable();
    var parentElement = document.getElementById('table-content'),
        // add 1 row & col for headers
        headers = 1,
        setRow = parseInt(document.getElementById('set-rows').value, 10) + headers,
        setCol = parseInt(document.getElementById('set-cols').value, 10) + headers,
        table = document.createElement('table'),
        genButton = document.getElementById('generate'),
        resetButton = document.getElementById('reset');

    parentElement.appendChild(table);
    table.innerHTML = "<thead><tr id='thead'></tr></thead><tbody id='tbody'></tbody>";

    var thead = document.getElementById('thead'),
        tbody = document.getElementById('tbody');
    for (i = 0; i < setCol; i++) {

        if (i === 0) {
            thead.innerHTML += "<th></th>";
        } else {
            thead.innerHTML += "<th>" + i + "</th>";
        }
    }
    for (j = 1; j < setRow; j++) {

        row = document.createElement('tr');

        for (k = 0; k < setCol; k++) {
            if (k === 0) {
                row.innerHTML += "<td>" + j + "</td>";
            } else {
                row.innerHTML += "<td><span class='number'>" + j + " </span>" + "<span class='icon-cross'></span><span class='number'>" + k + "</span><span class='icon-equals'></span><span class='number'>" + (k * j) + " </span></td>";
            }
        }

        tbody.appendChild(row);
    }

    resetButton.style.display = "flex";
}

function removeTable() {
    var tableElements = document.getElementById('table-content');
    tableElements.innerHTML = "";
}


function resetTable() {
    var tableElements = document.getElementById('table-content'),
        resetButton = document.getElementById('reset');
    tableElements.innerHTML = '<table class="init-table"><thead><tr>    <th></th>    <th>1</th>    <th>1</th>    <th>1</th>    <th>1</th></tr></thead><tbody><tr>    <td scope="row">1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td></tr><tr>    <td scope="row">1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td></tr><tr>    <td scope="row">1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td></tr><tr>    <td scope="row">1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td>    <td>1 x 1 = 1</td></tr></tbody>                 </table>';

    resetButton.style.display = "none";

}

resetTable();