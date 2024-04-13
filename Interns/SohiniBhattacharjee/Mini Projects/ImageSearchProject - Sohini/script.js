// Declaration of constant accessKey containing Unsplash API access key
const accessKey = "DSyxrEYbLGRnWEkroRCwwFAAvkD855mGp039fzcQiR8";

// Selecting HTML elements and assigning them to variables
const formEl = document.querySelector("form"); // Selecting the form element
const inputEl = document.getElementById("search-input"); // Selecting the input element
const searchResults = document.querySelector(".search-results"); // Selecting the search results container
const showMore = document.getElementById("show-more-button"); // Selecting the "Show More" button
const recentSearchesDiv = document.getElementById("recent-searches"); // Selecting the recent searches container

// Declaration of variables
let inputData = ""; // Variable to store user input data
let page = 1; // Variable to track current page number of search results
let recentSearches = []; // Array to store recent search queries

// Asynchronous function to search for images using Unsplash API
async function searchImages(query) {
  // Constructing URL with query parameters and API access key
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${accessKey}`;

  // Fetching data from the API
  const response = await fetch(url);
  const data = await response.json(); // Parsing response data as JSON

  const results = data.results; // Extracting search results from response data

  searchResults.innerHTML = ""; // Clearing previous search results

  // Looping through each search result and creating HTML elements to display images
  results.forEach((result) => {
    const imageWrapper = document.createElement("div"); // Creating a div element to contain each image
    imageWrapper.classList.add("search-result"); // Adding a CSS class to the image wrapper
    const image = document.createElement("img"); // Creating an img element to display the image
    image.src = result.urls.small; // Setting the image source
    image.alt = result.alt_description; // Setting the alt text for accessibility
    const imageLink = document.createElement("a"); // Creating a link element to the image's Unsplash page
    imageLink.href = result.links.html; // Setting the link's href attribute
    imageLink.target = "_blank"; // Opening the link in a new tab
    imageLink.textContent = result.alt_description; // Setting the link text

    // Appending image and link elements to the image wrapper
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    // Appending the image wrapper to the search results container
    searchResults.appendChild(imageWrapper);
  });

  page++; // Incrementing the page number for next search results

  // Displaying the "Show More" button if there are more pages of results
  if (page > 1) {
    showMore.style.display = "block";
  }
}

// Function to handle click on recent search button
function handleRecentSearchClick(event) {
  const query = event.target.textContent; // Extracting the search query from the clicked button
  page = 1; // Resetting page number for new search
  searchImages(query); // Initiating a new search with the clicked query
}

// Function to display recent searches
function displayRecentSearches() {
  recentSearchesDiv.innerHTML = ""; // Clearing previous recent searches
  recentSearchesDiv.innerHTML = "Recent Searches: "; // Adding heading for recent searches
  // Looping through recent searches and creating buttons for each query
  recentSearches.forEach((search) => {
    const recentSearchButton = document.createElement("button"); // Creating a button element
    recentSearchButton.textContent = search; // Setting button text to search query
    // Adding click event listener to each button to initiate search with the query
    recentSearchButton.addEventListener("click", handleRecentSearchClick);
    // Appending buttons to the recent searches container
    recentSearchesDiv.appendChild(recentSearchButton);
  });
}

// Function to add search query to recent searches
function addToRecentSearches(query) {
  if (!recentSearches.includes(query)) { // Checking if query is not already in recent searches
    recentSearches.push(query); // Adding query to recent searches array
    if (recentSearches.length > 5) {
      recentSearches.shift(); // Removing oldest search query if there are more than 5
    }
    displayRecentSearches(); // Updating display of recent searches
  }
}

// Event listener for form submission
formEl.addEventListener("submit", (event) => {
  event.preventDefault(); // Preventing default form submission behavior
  page = 1; // Resetting page number for new search
  inputData = inputEl.value; // Storing user input data
  searchImages(inputData); // Initiating search with user input
  addToRecentSearches(inputData); // Adding user input to recent searches
});

// Event listener for "Show More" button
showMore.addEventListener("click", () => {
  searchImages(inputData); // Initiating search for more results
});

// Initial display of recent searches
displayRecentSearches();
