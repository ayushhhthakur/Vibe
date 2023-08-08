// This function replaces the current URL in the browser history without refreshing the page.
function changeUrlWithoutRefresh(newUrl) {
    window.history.pushState(null, null, newUrl);
}

// Call this function to change the URL when the page loads.
window.onload = function () {
    var currentUrl = window.location.href;
    var newUrl = currentUrl.replace('.html', ''); // Remove .html from the URL
    changeUrlWithoutRefresh(newUrl);
};