function fun() {
    let n = document.getElementById('num1').value.trim();
    let nu = document.getElementById('num2').value.trim();

    // Check for numeric input
    if (!/^\d*\.?\d+$/.test(n) || !/^\d*\.?\d+$/.test(nu)) {
        document.getElementById('op').innerHTML = "PLEASE ENTER NUMBERS ONLY";
        return;
    }

    let n1 = parseFloat(n); // Weight
    let n2 = parseFloat(nu); // Height in meters

    // Check for valid values
    if (n1 <= 0 || n2 <= 0) {
        document.getElementById('op').innerHTML = "PLEASE ENTER VALID INPUTS";
        return;
    }

    if (n1 > 500) {
        document.getElementById('op').innerHTML = "HUMAN WEIGHT CAN'T EXCEED 500 KG, ENTER A VALID INPUT";
        return;
    }

    if (n2 > 2.5) {
        document.getElementById('op').innerHTML = "HUMAN HEIGHT CAN'T EXCEED 2.5 METERS, ENTER A VALID INPUT";
        return;
    }

    // Calculate BMI
    let val = n1 / (n2 * n2);
    let m = "";

    if (val < 18.5) {
        m = "UNDERWEIGHT";
    } else if (val >= 18.5 && val < 24.9) {
        m = "NORMAL WEIGHT";
    } else if (val >= 24.9 && val < 29.9) {
        m = "OVERWEIGHT";
    } else {
        m = "OBESE";
    }

    document.getElementById('op').innerHTML = `Your BMI is ${val.toFixed(2)}: ${m}`;
}
