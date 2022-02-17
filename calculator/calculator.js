window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let data = {amount:null ,years:null , rate:null }
  data = getCurrentUIValues()
  document.getElementById("loan-amount").value = data.amount
  document.getElementById("loan-years").value = data.years
  document.getElementById("loan-rate").value = data.rate
  calculateMonthlyPayment(data)

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let data = {amount:null ,years:null , rate:null }
  data = getCurrentUIValues()
  let monthly = calculateMonthlyPayment(data)
  updateMonthly(monthly)

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyPayment = (values.amount * (values.rate/12))/(1-Math.pow((1 + (values.rate/12)),-(values.years * 12)))
  return monthlyPayment.toFixed(2).toString()
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.querySelector("#monthly-payment").textContent = monthly
}
