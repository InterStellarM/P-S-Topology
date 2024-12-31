// Specify the number of rows and columns for the grid
const numRows = 17;
const numCols = 11;

// List of possible back colors
const colors = ['red', 'green', 'yellow', 'grey'];

// Define grid data for headers, row labels, and cell colors
const gridData = {
    headers: ["", "\\(\\mathbb{Q}\\)","\\(\\mathbb{R}_l\\)", "\\(\\mathbb{R}_l^2\\)", "\\(\\mathbb{R}_K\\)", "\\(\\mathbb{R}^\\omega\\) Product", "R^ω Uniform", "R^ω Box", "R^J Product", "R^J Box", "I₀ × I₀ Order"],
    rows: [
        { label: "Connected", cells: ["red", "red", "green", "green", "red", "red", "grey", "red", "green", "red"] },
        { label: "Path connected", cells: ["red", "red", "green", "grey", "red", "red", "grey", "red", "green", "red"] },
        { label: "Compact", cells: ["red", "red", "green", "grey", "red", "red", "grey", "red", "red", "red"] },
        { label: "Limit point compact", cells: ["grey", "red", "red", "grey", "red", "red", "grey", "red", "red", "red"] },
        { label: "Sequential compact", cells: ["red", "grey", "red", "grey", "red", "red", "grey", "red", "red", "red"] },
        { label: "Local compact", cells: ["red", "red", "green", "grey", "grey", "red", "grey", "red", "green", "red"] },
        { label: "1st countable", cells: ["green", "green", "green", "grey", "green", "red", "grey", "red", "green", "red"] },
        { label: "2nd countable", cells: ["green", "green", "green", "grey", "green", "red", "grey", "red", "green", "red"] },
        { label: "Separable", cells: ["green", "green", "green", "grey", "green", "red", "grey", "red", "green", "red"] },
        { label: "Lindelöf", cells: ["green", "green", "green", "grey", "green", "red", "grey", "red", "green", "red"] },
        { label: "T2", cells: ["green", "green", "green", "grey", "green", "red", "grey", "red", "green", "red"] },
        { label: "T3", cells: ["green", "green", "green", "grey", "green", "red", "grey", "red", "green", "red"] },
        { label: "T3.5", cells: ["green", "green", "green", "grey", "green", "red", "grey", "red", "green", "red"] },
        { label: "T4", cells: ["green", "green", "green", "yellow", "green", "red", "grey", "red", "green", "red"] },
        { label: "T5", cells: ["green", "green", "green", "yellow", "green", "red", "grey", "red", "green", "red"] },
        { label: "Metrizable", cells: ["green", "green", "green", "yellow", "green", "red", "grey", "red", "green", "red"] }
    ],
};


// Reference the grid container
const gridContainer = document.querySelector('.grid-container');

// Update CSS grid-template-columns dynamically
gridContainer.style.gridTemplateColumns = `repeat(${numCols}, 100px)`;

// Generate the grid
for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        // Top-left corner cell (empty)
        if (i === 0 && j === 0) {
            gridItem.classList.add('transparent');
            gridItem.innerHTML = ''; // Keep it empty
        }
        // Header cells (first row)
        else if (i === 0) {
            gridItem.classList.add('header');
            gridItem.innerHTML = gridData.headers[j]; // Set header content
        }
        // Row labels (first column)
        else if (j === 0) {
            gridItem.classList.add('header');
            gridItem.innerHTML = gridData.rows[i - 1].label; // Set row label
        }
        // Data cells
        else {
            const color = gridData.rows[i - 1].cells[j - 1]; // Get color from gridData
            gridItem.innerHTML = `
                <div class="card" onclick="flipCard(this)">
                    <div class="front">\\(a_{${i}${j}}\\)</div>
                    <div class="back ${color}">
                        <a href="#" style="color: inherit; text-decoration: none;">proof</a>
                    </div>
                </div>
            `;
        }

        // Add the grid item to the container
        gridContainer.appendChild(gridItem);
    }
}


MathJax.typeset();

// Flip card functionality
function flipCard(cardElement) {
    const card = cardElement.closest('.card');
    card.classList.toggle('flipped');
    MathJax.typeset(); // Re-render MathJax expressions after flipping
}