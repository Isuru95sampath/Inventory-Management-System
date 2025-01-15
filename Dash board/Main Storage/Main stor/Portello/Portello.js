// Add Row Functionality
document.getElementById('addRow').addEventListener('click', () => {
    const tableBody = document.getElementById('tableBody');
    const newRow = document.createElement('tr');

    // Define the number of columns in the table
    const columns = document.querySelectorAll('thead th').length;

    // Create editable cells for each column except the last (Actions)
    for (let i = 0; i < columns - 1; i++) {
        const newCell = document.createElement('td');
        newCell.contentEditable = 'true'; // Make the cells editable
        newRow.appendChild(newCell);
    }

    // Create the Action cell with a Delete button
    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteRow';
    actionCell.appendChild(deleteButton);

    // Append the Action cell to the new row
    newRow.appendChild(actionCell);

    // Add the new row to the table body
    tableBody.appendChild(newRow);
});

// Delete Row Functionality using Event Delegation
document.getElementById('tableBody').addEventListener('click', (e) => {
    // Check if the clicked element is a Delete button
    if (e.target && e.target.classList.contains('deleteRow')) {
        const row = e.target.closest('tr'); // Get the closest <tr> element
        if (row) {
            row.remove(); // Remove the row from the table
        }
    }
});
