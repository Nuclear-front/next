const url = window.location.href; // Get the current page URL
const urlPattern = /^https:\/\/www\.wuxiaspot\.com\/novel\/(.+?)_(\d+)\.html$/;
const match = url.match(urlPattern);

if (match) {
    const title = match[1]; // Extracts the novel title
    const number = parseInt(match[2], 10); // Extracts and parses the page number
    const nextNumber = number + 1; // Increment the page number
    const nextUrl = `https://www.wuxiaspot.com/novel/${title}_${nextNumber}.html`;
    console.log(nextUrl); // Outputs the next page URL
} else {
    console.error("Unable to determine the next page URL.");
}
