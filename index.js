const heightInFeet = document.querySelector(".height-ft");
const heightInInches = document.querySelector(".height-in");
const weight = document.querySelector(".weight");
const gender = document.querySelector(".gender");
const age = document.querySelector(".age");
const displayAnswer = document.querySelector("span")

const btn = document.querySelector(".submit-btn").addEventListener("click", ()=> {
    const heightOfPatient = feetToMetres(heightInFeet.value);
    const weightOfPatient = weight.value;
    const genderOfPatient = gender.value;
    const ageOfPatient = age.value;
    const weightinLbs = kgToPounds(weightOfPatient);
    const total= calculateBMI(heightOfPatient, weightOfPatient);
    handleUI(genderOfPatient, ageOfPatient, total);
    clearInputs();
});

function feetToMetres(heightFt) {
    const convertedHeight = heightFt * 0.3048;
    const newHeight = convertedHeight;
    return newHeight;
}

function inchesToMetres(heightIn) {
    const convertedHeight = heightIn * 0.0254;
    const newHeight = convertedHeight;
    return newHeight;
}

function kgToPounds(weightInKg) {
    const weightinPounds = weightInKg * 2.2;
    return weightinPounds;
}

const calculateBMI = (height, weight) => {
    const bmiTotal = (weight / Math.pow(height, 2)).toFixed(2);
    return bmiTotal;
}

// UI Update
function handleUI(gender, age, bmi) {
    displayAnswer.innerHTML = `<p>Sex: ${gender} <br> Age: ${age} Years old <br> You have a BMI of ${bmi}</p>`;
}

const clearInputs = () => {
    heightInFeet.value = "";
    heightInInches.value = "";
    weight.value = "";
    gender.value = "";
    age.value = "";
}
