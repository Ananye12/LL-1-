let grammar = [];
let NT = []; // Non-Terminals
let T = [];  // Terminals
let LL1Table = {};
let FIRST = {};
let FOLLOW = {};

// Adds a production rule to the grammar
function addProduction() {
    const productionInput = document.getElementById("production-input").value.trim();
    if (productionInput === "") {
        alert("Please enter a production rule!");
        return;
    }

    grammar.push(productionInput);
    document.getElementById("production-input").value = "";
    alert("Production rule added!");
}

// Displays the current grammar
function showGrammar() {
    if (grammar.length === 0) {
        alert("No grammar rules added yet!");
        return;
    }

    const grammarDisplay = document.getElementById("grammar-display");
    grammarDisplay.innerHTML = `<h3>Grammar Rules</h3>${grammar.map(rule => `<p>${rule}</p>`).join("")}`;
}
