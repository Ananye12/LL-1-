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
function startParsing() {
    if (grammar.length === 0) {
        alert("Please add some grammar rules first!");
        return;
    }

    extractTerminalsAndNonTerminals();
    computeFirstSets();
    computeFollowSets();
    generateParsingTable();
    displayFirstAndFollow();
    displayParsingTable();

    // Show the parsing input section
    document.getElementById("parsing-input").classList.remove("hidden");
}

// Extracts terminals and non-terminals from the grammar
function extractTerminalsAndNonTerminals() {
    NT = [];
    T = [];

    grammar.forEach(rule => {
        const [lhs, rhs] = rule.split("->");
        if (!NT.includes(lhs)) {
            NT.push(lhs);
        }
        rhs.split("").forEach(char => {
            if (!/[A-Z]/.test(char) && char !== '|' && char !== '!' && !T.includes(char)) {
                T.push(char);
            }
        });
    });

    T.push("$"); // Add end-of-input symbol
}
