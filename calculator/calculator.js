const { solve_aux } = require("./evaluation.js");

let result = document.getElementById("result");

function appendOperand(value) {
    result.value += value;
}

function clr() {
    result.value = "";
}



function solve() {
    try {
        result.value = solve_aux(result.value);
    } catch {
        result.value = "Error";
    }
}

module.exports = {
    solve_aux
};