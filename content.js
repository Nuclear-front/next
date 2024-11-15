console.log('write.js script loaded successfully.');

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed.');
    
    const nextPageButton = document.getElementById('nextPageButton');
    
    if (nextPageButton) {
        console.log('Next Page button found.');
        
        nextPageButton.addEventListener('click', function () {
            console.log('Next Page button clicked.');
            
            // Example logic for URL navigation (assuming it’s being used)
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                const url = tabs[0].url;
                console.log('Current URL:', url);

                const urlPattern = /^https:\/\/www\.wuxiaspot\.com\/novel\/(.+?)_(\d+)\.html$/;
                const match = url.match(urlPattern);

                if (match) {
                    console.log('URL matches pattern:', match);
                    const title = match[1];
                    const number = parseInt(match[2], 10);
                    const nextNumber = number + 1;
                    const nextUrl = `https://www.wuxiaspot.com/novel/${title}_${nextNumber}.html`;
                    console.log('Navigating to:', nextUrl);
                    
                    // Navigate to the next URL
                    chrome.tabs.update(tabs[0].id, { url: nextUrl });
                } else {
                    console.error('Unable to determine the next page URL.');
                }
            });
        });
    } else {
        console.error('Next Page button not found.');
    }
});
