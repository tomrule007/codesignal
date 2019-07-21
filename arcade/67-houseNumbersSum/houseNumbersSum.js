//return sum of all numbers to the left of the first zero
function houseNumbersSum(houseNumbers) {
    let sum = 0;
    for (let i = 0; houseNumbers[i] != 0 && i < houseNumbers.length; i++) {
        sum += houseNumbers[i];
    }
    return sum;
}
