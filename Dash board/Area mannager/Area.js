
/*function openPage(url) {
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
            <td><button onclick="deleteRow(this)">Delete</button></td>
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
            <td><button onclick="deleteRow(this)">Delete</button></td>
        `;
    });
});

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Area Manager</title>
    <link rel="stylesheet" href="Area.css">
</head>
<body>
    <h1><u>Area Manager</u></h1>
    <div class="container">
        <h3>Select Area Manager Id</h3>
        <div class="dropdown">
            <button class="dropbtn">Select ID</button>
            <div class="dropdown-content">
                <a href="file:///C:/Users/pakaya/Desktop/Inventiry%20mannagment/Dash%20board/Aea2/area2.html">Kamal Perera</a>
                <!-- <a href="#" onclick="openPage('file:///C:/Users/pakaya/Desktop/Inventiry%20mannagment/Dash%20board/Aea2/area2.html')">Kamal Perera</a>
-->

                <a href="#" onclick="openPage('page2.html')">Lasantha Kumara</a>
                <a href="#" onclick="openPage('page3.html')">Hiran Sampath</a>
            </div>
        </div>
    </div>
    <iframe id="contentFrame" src="" style="width:100%; height:1px; border:none;"></iframe>
    
    <section id="inventory">
        <h2>Area manager Stock</h2>
        <table id="inventory-table">
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <!-- Inventory items will be populated here -->
            </tbody>
        </table>
        <button id="add-item">Add Item</button>
        <button id="save-item">Save</button>
    </section>
    <section id="performance">
        <h2>Requested Items</h2>
        
        <!-- Additional table under Performance -->
        <h3></h3>
        <table id="performance-table">
            <thead>
                <tr>
                    <th>Shop ID</th>
                    <th>Product ID</th>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <!-- Performance metrics will be populated here -->
            </tbody>
        </table>
        <button id="done">Done</button>
    </section>

    <script type="module">
        // Import Firebase modules
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
        import { getFirestore, collection, getDocs, setDoc, doc, addDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

        // Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyDeyt839rDGcoH3LwRWuc65_CUg6D6S5XE",
            authDomain: "test-8cd9e.firebaseapp.com",
            projectId: "test-8cd9e",
            storageBucket: "test-8cd9e.appspot.com",
            messagingSenderId: "745412020745",
            appId: "1:745412020745:web:701eed8c9075a3572c86d8",
            measurementId: "G-91P7MY8658"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        // Function to load data from Firestore
        const loadData = async () => {
            try {
                console.log("Loading data from Firestore...");
                const tableBody = document.getElementById('tableBody');
                tableBody.innerHTML = ""; // Clear existing rows

                const querySnapshot = await getDocs(collection(db, "webMainStor"));
                querySnapshot.forEach((docSnap) => {
                    const data = docSnap.data();
                    const id = docSnap.id;

                    // Filter for Coca-Cola products only
                    if (id.includes("cocacola")) {
                        const row = document.createElement('tr');
                        row.setAttribute("data-id", id); // Attach document ID for updates
                        row.innerHTML = 
                            <td contenteditable="true">${data.product_id || ""}</td>
                            <td contenteditable="true">${data.product_name || ""}</td>
                            <td contenteditable="true">${data.quantity || ""}</td>
                            <td><button class="deleteRow">Delete</button></td>
                        ;
                        tableBody.appendChild(row);
                    }
                });

                console.log("Data loaded successfully!");
            } catch (error) {
                console.error("Error loading data:", error);
            }
        };

        // Add Row Functionality
        const addRow = () => {
            const tableBody = document.getElementById('tableBody');
            const newRow = document.createElement('tr');

            newRow.innerHTML = 
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td contenteditable="true"></td>
                <td><button class="deleteRow">Delete</button></td>
            ;
            tableBody.appendChild(newRow);
        };

        // Delete Row Functionality
        document.getElementById('tableBody').addEventListener('click', (e) => {
            if (e.target && e.target.classList.contains('deleteRow')) {
                const row = e.target.closest('tr');
                if (row) row.remove();
            }
        });
    <div class="homebtn">
        <button onclick="location.href='file:///C:/Users/pakaya/Desktop/Inventiry%20mannagment/Dash%20board/Home%20page/home.html#report'">Home</button>
    </div>
    <script src="Area.js"></script>
</body>
</html>  



}*/

