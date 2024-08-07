var printerCost = document.getElementById("printerCost")
var machineHours = document.getElementById("machineHours")
var printHour = document.getElementById("printHour")
var printMinutes = document.getElementById("printMinutes")
var pricePerKg = document.getElementById("pricePerKg")
var modelWeight = document.getElementById("modelWeight")
var hourlyRate = document.getElementById("hourlyRate")
var profitInput = document.getElementById("profit")
var submitBTN = document.getElementById("submitBTN")

var result = document.getElementById("result")
var breakdown = document.getElementById("breakdown")

var sectionA = document.getElementById("contentA")
var sectionB = document.getElementById("contentB")
var sectionC = document.getElementById("contentC")
var sectionD = document.getElementById("contentD")
var nextButtonA = document.getElementById("nextSectionA")
var nextButtonB = document.getElementById("nextSectionB")

function roundTo(num, decimals) {
    const factor = 10 ** decimals;
    return Math.round(num * factor) / factor;
}

function calculating_cost(printer_hours) {
    print_time = parseFloat(printHour.value) + parseFloat(printMinutes.value) / 60
    deprecation_cost = roundTo((parseFloat(printerCost.value) / parseFloat(printer_hours)) + print_time, 4)
    filament_cost = roundTo((parseFloat(pricePerKg.value) / 1000) * parseFloat(modelWeight.value), 4)
    other_costs = parseFloat(hourlyRate.value) * print_time
    base_price = deprecation_cost + filament_cost + other_costs
    profit_percent = parseFloat(profitInput.value) / 100
    profit = base_price * profit_percent
    total = base_price + profit

    result.innerText = "Your total for this project is $" + roundTo(total, 2) + "!"
    breakdown.innerText = "Here is how we got the total:\n\nDeprecation cost: $" + roundTo(deprecation_cost, 2) + "\nFilament cost: $" + roundTo(filament_cost, 2) + "\nOther costs: $" + roundTo(other_costs, 2) + "\nTotal before profit: $" + roundTo(base_price, 2) + "\nProfit: $" + roundTo(profit, 2) + "\nTotal after profit: $" + roundTo(total, 2)
}

nextButtonA.addEventListener("click", () => {
    if (printerCost.value == "") {
        alert("You need to add the cost of the printer.")
    } else if (printHour.value == "") {
        alert("You need to add how many hours would or did it take to print.")
    } else if (printMinutes.value == "") {
        alert("You need to add how many minutes would or did it take to print")
    } else {
        sectionA.style.display = "none"
        sectionB.style.display = "initial"
    }
})

nextButtonB.addEventListener("click", () => {
    if (pricePerKg.value == "") {
        alert("You need to add the cost of a kilogram of your filament.")
    } else if (modelWeight.value == "") {
        alert("You need to add how much the model would or does weigh in grams.")
    } else {
        sectionB.style.display = "none"
        sectionC.style.display = "initial"
    }
})

submitBTN.addEventListener("click", () => {
    if (hourlyRate.value !== "") {
        if (profitInput.value !== "") {
            if (profitInput.value <= 100 && profitInput.value >= 0) {
                if (machineHours.value !== "") {
                    hours = machineHours.value
                } else {
                    hours = 20000
                }
                calculating_cost(hours)
                sectionC.style.display = "none"
                sectionD.style.display = "initial"
            } else {
                alert("Your profit should be between 0% and 100%. " + profitInput.value + " is not a valid percentage!")
            }
        } else {
            alert("You need to add the percentage of how much profit you would like to add.")
        }
    } else {
        alert("You need to add your hourly rate!")
    }
})