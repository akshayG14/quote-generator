console.log("JS Loaded!!!");

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBttn = document.getElementById("twitter-button");
const newQuoteBttn = document.getElementById("new-quote-button");

// Get the quote from API
async function getQuote() {
  const proxyUrl = "https://frozen-lake-72991.herokuapp.com/";
  const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";

  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    // console.log(data);
    authorText.innerText = data.quoteAuthor;
    quoteText.innerText = data.quoteText;
  } catch (error) {
    getQuote();
    // console.log("Sorry but no quote", error);
  }
}

// on load
getQuote();
