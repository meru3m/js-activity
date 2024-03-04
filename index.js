// Get elements
let oddEvenLink = document.getElementById("oddEvenLink")
let converterLink = document.getElementById("converterLink")
let isMultipleLink = document.getElementById("isMultipleLink")
let largestNumberLink = document.getElementById("largestNumberLink")

let oddEvenSection = document.getElementById("oddEvenSection")
let converterSection = document.getElementById("converterSection")
let isMultipleSection = document.getElementById("isMultipleSection")
let largestNumberSection = document.getElementById("largestNumberSection")

// Function to handle switching between sections
function switchSection(sectionToShow, sectionsToHide) {
  sectionsToHide.forEach((section) => {
    section.classList.add("d-none")
  })
  sectionToShow.classList.remove("d-none")
}

// Event listener for Converter link
converterLink.addEventListener("click", function (event) {
  event.preventDefault() // Prevent default link behavior
  switchSection(converterSection, [
    oddEvenSection,
    isMultipleSection,
    largestNumberSection,
  ])
})

// Event listener for isMultiple link
isMultipleLink.addEventListener("click", function (event) {
  event.preventDefault() // Prevent default link behavior
  switchSection(isMultipleSection, [
    oddEvenSection,
    converterSection,
    largestNumberSection,
  ])
})

// Event listener for Largest Number link
largestNumberLink.addEventListener("click", function (event) {
  event.preventDefault() // Prevent default link behavior
  switchSection(largestNumberSection, [
    oddEvenSection,
    converterSection,
    isMultipleSection,
  ])
})

// Event listener for Even or Odd link
oddEvenLink.addEventListener("click", function (event) {
  event.preventDefault() // Prevent default link behavior
  switchSection(oddEvenSection, [
    converterSection,
    isMultipleSection,
    largestNumberSection,
  ])
})

// Function to handle the oddEven calculation (similar to your existing function)
function oddEven() {
  let number = document.getElementById("numberInput").value
  let resultDiv = document.getElementById("result")
  if (number % 2 === 0) {
    resultDiv.innerHTML =
      "<p class='text-success'>The number " + number + " is even.</p>"
  } else {
    resultDiv.innerHTML =
      "<p class='text-danger'>The number " + number + " is odd.</p>"
  }
}

let checkEl = document.getElementById("checkButton")
// Event listener for Check button
checkEl.addEventListener("click", oddEven)

// ===== CONVERT ======
let toggleUnitButton = document.getElementById("toggleUnitButton")
let temperatureInputLabel = document.getElementById("temperatureInputLabel")
let convertedTemperatureOutputLabel = document.getElementById(
  "convertedTemperatureOutputLabel"
)
let temperatureInput = document.getElementById("temperatureInput")
let convertedTemperatureOutput = document.getElementById(
  "convertedTemperatureOutput"
)
let convertButton = document.getElementById("convertButton")

let isCelsius = true // Initial state: Celsius

// Function to toggle between Celsius and Fahrenheit
toggleUnitButton.addEventListener("click", function () {
  isCelsius = !isCelsius // Toggle state

  if (isCelsius) {
    temperatureInputLabel.innerText = "℃"
    convertedTemperatureOutputLabel.innerText = "℉"
  } else {
    temperatureInputLabel.innerText = "℉"
    convertedTemperatureOutputLabel.innerText = "℃"
  }

  // Clear input and output fields
  temperatureInput.value = ""
  convertedTemperatureOutput.value = ""
})

// Function to convert temperature
function convertTemperature() {
  let inputTemperature = parseFloat(temperatureInput.value)

  if (isNaN(inputTemperature)) {
    alert("Please enter a valid temperature.")
    return
  }

  if (isCelsius) {
    // Convert Celsius to Fahrenheit
    let convertedTemperature = (inputTemperature * 9) / 5 + 32
    convertedTemperatureOutput.value = convertedTemperature.toFixed(2)
  } else {
    // Convert Fahrenheit to Celsius
    let convertedTemperature = ((inputTemperature - 32) * 5) / 9
    convertedTemperatureOutput.value = convertedTemperature.toFixed(2)
  }
}

// Event listener for Convert button
convertButton.addEventListener("click", convertTemperature)

// ===== isMultiple =====

let isMultipleInput = document.getElementById("isMultipleInput")

function isMultipleChecker() {
  let number = parseFloat(isMultipleInput.value)

  if (isNaN(number)) {
    alert("Please enter a valid number.")
    return
  }

  let message = ""

  if (number % 3 === 0 && number % 5 === 0) {
    message = "The number is divisible by both 3 and 5."
  } else if (number % 3 === 0) {
    message = "The number is divisible by 3."
  } else if (number % 5 === 0) {
    message = "The number is divisible by 5."
  } else {
    alert("The number is not divisible by either 3 or 5.")
    return
  }

  // Display the result
  isMultipleResult.innerHTML = "<p class='text-success'>" + message + "</p>"
}

let checkBtn = document.getElementById("check-el")
checkBtn.addEventListener("click", isMultipleChecker)
