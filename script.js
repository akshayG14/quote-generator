console.log("JS Loaded!!!");

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBttn = document.getElementById("twitter-button");
const newQuoteBttn = document.getElementById("new-quote-button");
const loader = document.getElementById("loader");

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  if (!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
}

// Get the quote from API
async function getQuote() {
  showLoadingSpinner();
  const proxyUrl = "https://frozen-lake-72991.herokuapp.com/";
  const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";

  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();

    // workaround for empty author data
    authorText.innerText = data.quoteAuthor === "" ? "Unknown" : data.quoteAuthor;
    // reduction of font size for long quotes
    data.quoteText.length > 120 ? quoteText.classList.add("long-quote") : quoteText.classList.remove("long-quote");
    quoteText.innerText = data.quoteText;

    removeLoadingSpinner();
  } catch (error) {
    getQuote();
  }
}

// Tweet quote
function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, "_blank");
}

// Event listeners
newQuoteBttn.addEventListener("click", getQuote);
twitterBttn.addEventListener("click", tweetQuote);

// on load
getQuote();
