// Function to open the respective tab
function openTab(tabName) {
    // Hide all the tab content initially
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.style.display = 'none';
    });

    // Show the selected tab content
    const activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.style.display = 'block';
    }
}

// Set default tab to display when page loads
document.addEventListener("DOMContentLoaded", function () {
    openTab('about'); // Open the "About Me" tab by default
});
