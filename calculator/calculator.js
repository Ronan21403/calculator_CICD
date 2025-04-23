let result = document.getElementById("result");

function appendOperand(value) {
    result.value += value;
}

function clr() {
    result.value = "";
}

function solve() {
    try {
        result.value = eval(result.value);
    } catch {
        result.value = "Error";
    }
}
