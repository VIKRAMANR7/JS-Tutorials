//1st function - getExchangeRate
const exchangeUrl =
  "http://data.fixer.io/api/latest?access_key=7162f4aa95f80721247fe04bae75c1c8";
const currencyUrl = "https://restcountries.com/v3.1/currency";
//Fetch function
// const getExchangeRate = (fromCurrency, toCurrency) => {
//   const fetchedData = fetch(exchangeUrl)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
//   const rate = fetchedData.rates;
//   const euro = 1 / rate[fromCurrency];
//   const exchangeRate = euro * rate[toCurrency];
// };
// getExchangeRate("USD", "EUR");
/* The error TypeError: Cannot read properties of undefined (reading 'USD') occurs because you're trying to access fetchedData.rates before the data has been fully fetched and resolved. This happens because fetch() is asynchronous, but your code attempts to access the result as if it were synchronous. */

//Convert a fetch function to async/await
const getExchangeRate = async (fromCurrency, toCurrency) => {
  try {
    const response = await fetch(exchangeUrl); // Wait for the fetch call to complete
    const data = await response.json(); // Parse JSON data

    // Access the exchange rates from the fetched data
    const rate = data.rates;
    if (!rate || !rate[fromCurrency] || !rate[toCurrency]) {
      throw new Error("Invalid currency codes or data missing.");
    }
    const euro = 1 / rate[fromCurrency]; // Calculate the EUR equivalent
    const exchangeRate = euro * rate[toCurrency]; // Calculate the exchange rate
    return exchangeRate; // Return the value for further use
  } catch (error) {
    console.error("Error fetching exchange rates:", error.message);
  }
};
//2nd function - getCountries

const getCountries = async (toCurrency) => {
  try {
    const response = await fetch(`${currencyUrl}/${toCurrency}`);
    const data = await response.json();
    const countryNames = data.map((country) => country.name.common);
    return countryNames;
  } catch {
    throw new Error(`Unable to get countries that use ${toCurrency}`);
  }
};

//3rd function - convertCurrency
const convertCurrency = async (fromCurrency, toCurrency, amount) => {
  const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
  const countries = await getCountries(toCurrency);
  const convertedAmt = (amount * exchangeRate).toFixed(2);
  return `${amount} ${fromCurrency} is worth ${convertedAmt} ${toCurrency}.You can spend these in the following countries: ${countries}`;
};

//Call convert currency to get a meaningful data
convertCurrency("USD", "CAD", 30).then((message) => console.log(message));
//30 USD is worth 42.12 CAD.You can spend these in the following countries: Canada
