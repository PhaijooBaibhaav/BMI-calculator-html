
let heightOptions = document.getElementById("heightOptions");
let weightOptions = document.getElementById("weightOptions");
let submitBtn = document.getElementById("submitBtn");
let displayBMI = document.getElementById("displayBMI");

function getHeightInMeter(height) {
    if (heightOptions.value === "cm") {
        return height / 100;   // cm → m
    } else if (heightOptions.value === "meter") {
        return height;
    } else if (heightOptions.value === "feet") {
        return height * 0.3048;
    }
}

function GetWeightInKilograms(weight) {
    if (weightOptions.value === "kg") {
        return weight;
    } else if (weightOptions.value === "pounds") {
        return weight * 0.45359237;
    }
}

function getBMI(height, weight) {
    return weight / (height * height);
}

function getResult(bmi) {
    let message = "";

    if (bmi < 18.5) {
        message = `Your BMI is ${bmi.toFixed(2)}. You are Underweight`;
    } else if (bmi < 25) {
        message = `Your BMI is ${bmi.toFixed(2)}. You are Normal`;
    } else if (bmi < 30) {
        message = `Your BMI is ${bmi.toFixed(2)}. You are Overweight`;
    } else {
        message = `Your BMI is ${bmi.toFixed(2)}. You are Obese`;
    }

    displayBMI.innerHTML = message;
}

submitBtn.addEventListener("click", function() {
    let height = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);

    height = getHeightInMeter(height);
    weight = GetWeightInKilograms(weight);

    let bmi = getBMI(height, weight);

    getResult(bmi);
});
