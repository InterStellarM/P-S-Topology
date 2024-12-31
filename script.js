// Specify the number of rows and columns for the grid
const numRows = 17;
const numCols = 11;

// List of possible back colors
const colors = ['red', 'green', 'yellow', 'grey'];

// Reference the grid container
const gridContainer = document.querySelector('.grid-container');

// Update CSS grid-template-columns dynamically
gridContainer.style.gridTemplateColumns = `repeat(${numCols}, 100px)`;

// Generate the grid
for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        if (i === 0 && j === 0) {
            gridItem.classList.add('transparent');
            gridItem.innerHTML = ''; // Keep it empty or transparent
        } else if ((i === 0 || j === 0)) {
            gridItem.classList.add('header');
            // gridItem.innerHTML = i === 0 && j === 0 ? '' : i === 0 ? `Column ${j}` : `Row ${i}`;

            if (i === 11){
                gridItem.innerHTML = `Lindelöf`;
            }
            if (j === 2){
                gridItem.innerHTML = `\\(\\mathbb{R}_l^2\\)`;
            } else if (j === 1){
                gridItem.innerHTML = `\\(\\mathbb{R}_l\\)`;
            }

        } else if (i === 11 && j === 2){
            const color = colors[0]
            gridItem.innerHTML = `
                <div class="card" onclick="flipCard(this)">
                    <div class="front"></div>
                    <div class="back ${color}">
                        <a href="proofs/test.html" target="_blank" style="color: inherit; text-decoration: none;">
                            proof
                        </a>
                    </div>
                </div>
            `;
        } else if (i === 11 && j === 1){
            const color = colors[1]
            gridItem.innerHTML = `
                <div class="card" onclick="flipCard(this)">
                    <div class="front"></div>
                    <div class="back ${color}">
                        <a href="proofs/test2.html" target="_blank" style="color: inherit; text-decoration: none;">
                            proof
                        </a>
                    </div>
                </div>
                </div>
            `;
        } else {
            // Assign random back color
            // const color = colors[Math.floor(Math.random() * colors.length)];
            const color = colors[3];
            
            // Create flippable card
            gridItem.innerHTML = `
                <div class="card" onclick="flipCard(this)">
                    <div class="front">\\(a_{${i}${j}}\\)</div>
                    <div class="back ${color}">\\(b_{${i}${j}} = a_{${i}${j}}^2\\)</div>
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