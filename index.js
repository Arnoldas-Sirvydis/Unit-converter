

const convertBtn = document.getElementById("convert-btn")
const multiplier = document.getElementById("multiplier")
const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")



convertBtn.addEventListener("click", function length() {
    const meterToFeet = 3.28084 * multiplier.value
    const feetToMeter = 0.3048 * multiplier.value
    let result = `${multiplier.value} meters = ${meterToFeet.toFixed(3)} feet | ${multiplier.value} feet = ${feetToMeter.toFixed(3)} meters`
    lengthResult.innerHTML = result
})

convertBtn.addEventListener("click", function volume() {
    const literToGallon = 0.264172 * multiplier.value
    const gallonToLiter = 3.78541 * multiplier.value
    let result = `${multiplier.value} liters = ${literToGallon.toFixed(3)} gallons | ${multiplier.value} gallons = ${gallonToLiter.toFixed(3)} liters`
    volumeResult.innerHTML = result
})

convertBtn.addEventListener("click", function mass() {
    const kilogramToPound = 2.20462 * multiplier.value
    const poundToKilogram = 0.45359 * multiplier.value
    let result = `${multiplier.value} kilograms = ${kilogramToPound.toFixed(3)} pounds | ${multiplier.value} pounds = ${poundToKilogram.toFixed(3)} kilograms`
    massResult.innerHTML = result
})

