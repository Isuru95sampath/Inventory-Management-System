document.getElementById('go-button').addEventListener('click', function() {
    const query = document.getElementById('search-bar').value;
    alert(`Search query: ${query}`);
    // Add search functionality here
});

document.getElementById('home-button').addEventListener('click', function() {
    window.location.href = '/'; // Redirect to home page
});

// Additional interactive features can be added here

/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main Stores</title>
    <link rel="stylesheet" href="store.css">
</head>
<body>
    <h1>Main Stores</h1>
    <div class="search-container">
        <input type="text" id="search-bar" placeholder="Search...">
        <button id="go-button"><b>Go</b></button>
    </div>
    <h2>Select Products</h2>
    <div class="dropdown">
        
        <button class="dropbtn"> <b>Products</b></button>
        <div class="dropdown-content">
            <a href="file:///C:/Users/pakaya/Desktop/Inventiry%20mannagment/Dash%20board/Main%20Storage/Main%20stor/Sprite/Sprite.html">Sprite</a>
            <a href="file:///C:/Users/pakaya/Desktop/Inventiry%20mannagment/Dash%20board/Main%20Storage/Main%20stor/Cocacola/Cocacola.html">Coca-Cola</a>
            <a href="file:///C:/Users/pakaya/Desktop/Inventiry%20mannagment/Dash%20board/Main%20Storage/Main%20stor/Portello/Portello.html">Portello</a>
            <a href="file:///C:/Users/pakaya/Desktop/Inventiry%20mannagment/Dash%20board/Main%20Storage/Main%20stor/Fanta/Fanta.html">Fanta</a>
        </div>
    </div>
    <div class="homebtn">
        <button onclick="location.href='file:///C:/Users/pakaya/Desktop/Inventiry%20mannagment/Dash%20board/Home%20page/home.html#report'">Home</button>
    </div>
    <script src="store.js"></script>
</body>
</html>
*/
