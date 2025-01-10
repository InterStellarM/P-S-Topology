// Specify the number of rows and columns for the grid
const numRows = 17;
const numCols = 13;

// List of possible back colors
const colors = ['red', 'green', 'yellow', 'gray'];

const colHeaders = ["Q", "R", "R_l", "R_l**2", "R_K", "R**w-Pro", "R**w-Uni", "R**w-Box", "R**J-Pro", "R**J-Box", "I_0", "I_0**2"]
const rowHeaders = ["1st-Countable", "2nd-Countable", "Separable", "Lindelof", "T2", "T3", "T3-5", "T4", "T5", "Metrizable", "Connected", "P-Connected", "Compact", "LP-Compact", "SQ-Compact", "LC-Compact"]

// Define grid data for headers, row labels, and cell colors
const gridData = {
    headers: ["", "\\(\\mathbb{Q}\\)", "\\(\\mathbb{R}\\)","\\(\\mathbb{R}_l\\)", "\\(\\mathbb{R}_l^2\\)", "\\(\\mathbb{R}_K\\)", "\\(\\mathbb{R}^\\omega\\)" + "Product", "\\(\\mathbb{R}^\\omega\\) Uniform", "\\(\\mathbb{R}^\\omega\\) Box", "\\(\\mathbb{R}^J\\) Product", "\\(\\mathbb{R}^J\\) Box", "\\(I_0\\)", "\\(I_0^2\\)"],
    rows: [
        //                                              Q        R        R_l      R_l^2    R_K      w-pro    w-uni    w-box     J-pro    J-box    I_0      I_0^2
        { label: "1st countable",               cells: ["gray",  "green", "green", "green", "green", "green", "green", "red",    "gray", "gray",   "gray",  "green"] },
        { label: "2nd countable",               cells: ["gray",  "green", "red",   "red",   "green", "green", "red",   "red",    "gray", "gray",   "gray",  "red"] },
        { label: "Separable",                   cells: ["gray",  "green", "green", "green", "green", "green", "red",   "red",    "gray", "gray",   "gray",  "red"] },
        { label: "Lindelöf",                    cells: ["gray",  "green", "green", "red",   "green", "green", "red",   "red",    "gray", "gray",   "gray",  "green"] },
        { label: "Hausdorff (T2)",              cells: ["gray",  "green", "green", "green", "green", "green", "green", "green",  "gray", "green",  "gray",  "gray"] },
        { label: "Regular (T3)",                cells: ["gray",  "green", "green", "green", "red",   "green", "green", "green",  "gray", "green",  "gray",  "gray"] },
        { label: "Completely Regular (T3.5)",   cells: ["gray",  "green", "green", "green", "red",   "green", "green", "green",  "gray", "green",  "gray",  "gray"] },
        { label: "Normal (T4)",                 cells: ["gray",  "green", "green", "red",   "red",   "green", "green", "yellow", "gray", "gray",   "gray",  "gray"] },
        { label: "Completely Normal (T5)",      cells: ["gray",  "green", "green", "red",   "red",   "gray",  "gray",  "gray",   "gray", "gray",   "gray",  "gray"] },
        { label: "Metrizable",                  cells: ["gray",  "green", "red",   "red",   "red",   "green", "green", "red",    "red",  "red",    "gray",  "red"] },
        { label: "Connected",                   cells: ["gray",  "green", "red",   "gray",  "green", "green", "red",   "red",    "gray", "gray",   "gray",  "green"] },
        { label: "Path connected",              cells: ["gray",  "green", "red",   "gray",  "red",   "gray",  "red",   "red",    "gray", "gray",   "gray",  "red"] },
        { label: "Compact",                     cells: ["gray",  "red",   "red",   "red",   "red",   "red",   "gray",  "red",    "gray", "gray",   "green", "green"] },
        { label: "Limit point compact",         cells: ["gray",  "red",   "red",   "gray",  "gray",  "gray",  "gray",  "gray",   "gray", "gray",   "gray",  "gray"] },
        { label: "Sequentially compact",        cells: ["gray",  "red",   "gray",  "gray",  "gray",  "gray",  "gray",  "gray",   "gray", "gray",   "gray",  "gray"] },
        { label: "Locally compact",             cells: ["red",   "green", "red",   "gray",  "red",   "gray",  "gray",  "gray",   "gray", "gray",   "gray",  "gray"] }
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
            // gridItem.innerHTML = gridData.headers[j]; // Set header content
            gridItem.innerHTML = `
                <a href="definitions/${colHeaders[j-1]}.html" style="color: inherit; text-decoration: none;">${gridData.headers[j]}</a>
            `;
        }
        // Row labels (first column)
        else if (j === 0) {
            gridItem.classList.add('header');
            // gridItem.innerHTML = gridData.rows[i - 1].label; // Set row label
            gridItem.innerHTML = `
                <a href="definitions/${rowHeaders[i - 1]}.html" style="color: inherit; text-decoration: none;">${gridData.rows[i - 1].label}</a>
            `;
        }
        // Data cells
        else {
            const color = gridData.rows[i - 1].cells[j - 1]; // Get color from gridData

            if (color === colors[3]){
                gridItem.innerHTML = `
                <div class="front gray"></div>
                `
            } else if(color === colors[2]){
                const proofPath = `proofs/${colHeaders[j-1]}/${rowHeaders[i - 1]}/${colHeaders[j-1]}--${rowHeaders[i - 1]}.html`;
                gridItem.innerHTML = `
                <div class="card" onclick="flipCard(this)">
                    <!-- <div class="front">\\(a_{${i}${j}}\\)</div> -->
                    <div class="front"></div>
                    <div class="back ${color}">
                        <a href="${proofPath}" style="color: inherit; text-decoration: none;">explanation</a>
                    </div>
                </div>
            `;
            } else{
                // const dash = "--"
                const proofPath = `proofs/${colHeaders[j-1]}/${rowHeaders[i - 1]}/${colHeaders[j-1]}--${rowHeaders[i - 1]}.html`;
                gridItem.innerHTML = `
                <div class="card" onclick="flipCard(this)">
                    <!-- <div class="front">\\(a_{${i}${j}}\\)</div> -->
                    <div class="front"></div>
                    <div class="back ${color}">
                        <a href="${proofPath}" style="color: inherit; text-decoration: none;">proof</a>
                    </div>
                </div>
            `;
            }
// <a href="proofs/${colHeaders[j-1]}/${rowHeaders[i - 1]}/${colHeaders[j-1]}--${rowHeaders[i - 1]}.html" style="color: inherit; text-decoration: none;">proof</a>

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