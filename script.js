// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Function to load content dynamically
    function loadContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.querySelector("section").innerHTML = data;
            })
            .catch(error => console.error("Error:", error));
    }

    // Check if hash exists in URL
    if (window.location.hash) {
        // Load content based on hash
        loadContent(window.location.hash.substring(1) + ".html");
    }

    // Event listener for navigation links
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            // Load content based on href attribute of clicked link
            loadContent(this.getAttribute("href"));
            // Update URL hash
            window.location.hash = this.getAttribute("href").substring(1);
        });
    });
});
