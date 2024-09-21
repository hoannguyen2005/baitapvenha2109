function convertCurrency() {
    // Get the values from the form
    var amount = document.getElementById("amount").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    
    // Define the exchange rates
    var exchangeRates = {
      "USD": 1,
      "EUR": 0.88,
      "VND": 23000
    };
    
    // Convert the currency
    var result = amount * exchangeRates[from] / exchangeRates[to];
    
    // Display the result
    document.getElementById("result").innerHTML = "Kết quả: " + result + " " + to;
  }