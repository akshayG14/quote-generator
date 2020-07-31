console.log("JS Loaded!!!");

// Get the quote from API
async function getQuote() {
  const cors_api_host = "cors-anywhere.herokuapp.com";
  const cors_api_url = "https://" + cors_api_host + "/";
  const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";

  try {
    const response = await fetch(cors_api_url + apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Sorry but no quote", error);
  }
}

// on load
getQuote();
