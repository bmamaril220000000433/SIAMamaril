function saveData() {
    // Get values from the modal inputs
    var dateValue = document.getElementById("Date").value;
    var productValue = document.getElementById("Product").value;
    var quantityValue = parseFloat(document.getElementById("Quantity").value) || 0;
    var priceValue = parseFloat(document.getElementById("Price").value) || 0;
    var quantity01Value = parseFloat(document.getElementById("Quantity01").value) || 0;
    var priceValue01 = parseFloat(document.getElementById("Price01").value) || 0;

// Calculate the total values
var totalSpent = quantityValue * priceValue;
var totalEarned = quantity01Value * priceValue01;
var profits = totalEarned - totalSpent;

// Find the index of the existing row
var table = document.getElementById("dataRows");
if (table.rows.length > 0) {
    var existingRowIndex = -1;
    for (var i = 0; i < table.rows.length; i++) {
        if (table.rows[i].cells.length >= 3) {
            existingRowIndex = i;
            break;
        }
    }

    // Create a new row
    var newRow = table.insertRow(existingRowIndex + 1);

    // Create cells and set their content
    var cells = [];
    for (var i = 0; i < 9; i++) {
        cells[i] = newRow.insertCell(i);
    }
    cells[0].innerHTML = dateValue;
    cells[1].innerHTML = productValue;
    cells[2].innerHTML = quantityValue;
    cells[3].innerHTML = priceValue;
    cells[4].innerHTML = quantity01Value;
    cells[5].innerHTML = priceValue01;
    cells[6].innerHTML = totalSpent.toFixed(2);
    cells[7].innerHTML = totalEarned.toFixed(2);
    cells[8].innerHTML = profits.toFixed(2);

    // Clear the input fields
    document.getElementById("Date").value = "";
    document.getElementById("Product").value = "";
    document.getElementById("Quantity").value = "";
    document.getElementById("Price").value = "";
    document.getElementById("Quantity01").value = "";
    document.getElementById("Price01").value = "";

    // Find the index of the existing row
    var table = document.getElementById("dataRows");
    if (table.rows.length > 0) {
        var existingRowIndex = -1;
        for (var i = 0; i < table.rows.length; i++) {
            if (table.rows[i].cells.length >= 3) {
                existingRowIndex = i;
                break;
            }
        }

        // Close the modal
        $('#myModal').modal('hide');
        }
    }
}

  
function updateTotal() {
    // Get values from Quantity and Price inputs
    var quantity = parseFloat(document.getElementById("Quantity").value) || 0;
    var price = parseFloat(document.getElementById("Price").value) || 0;
    var quantity01 = parseFloat(document.getElementById("Quantity01").value) || 0;
    var price01 = parseFloat(document.getElementById("Price01").value) || 0;

    // Calculate the total
    var total = quantity * price;
    var total01 = quantity01 * price01;
  
    // Update the Total input
    document.getElementById("Total").value = total.toFixed(2);
    document.getElementById("Total01").value = total01.toFixed(2);
  }
  
  // Add an event listener to the delete button
document.getElementById("deleteButton").addEventListener("click", function () {
    // Get the reference to the table
    var table = document.getElementById("dataRows");

    // Get the selected row index
    var selectedRowIndex = getSelectedRowIndex();

    // Remove the selected row from the table
    if (selectedRowIndex !== -1) {
        table.deleteRow(selectedRowIndex);
    }
});