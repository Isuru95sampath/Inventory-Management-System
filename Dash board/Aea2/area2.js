
function openPage(url) {
    document.getElementById('contentFrame').src = url;
}
document.addEventListener('DOMContentLoaded', function() {
    const inventoryTable = document.getElementById('inventory-table').getElementsByTagName('tbody')[0];
    const addItemButton = document.getElementById('add-item');

    addItemButton.addEventListener('click', function() {
        const newRow = inventoryTable.insertRow();
        newRow.innerHTML = `
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
        `;
    });

    const performanceTable = document.getElementById('performance-table').getElementsByTagName('tbody')[0];

    addMetricButton.addEventListener('click', function() {
        const newRow = performanceTable.insertRow();
        newRow.innerHTML = `
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true">0</td>
        `;
    });
});

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

