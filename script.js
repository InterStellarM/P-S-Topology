// Specify the number of rows and columns for the grid
const numRows = 17;
const numCols = 11;

// List of possible back colors
const colors = ['red', 'green', 'yellow'];

// Reference the grid container
const gridContainer = document.querySelector('.grid-container');

// Update CSS grid-template-columns dynamically
gridContainer.style.gridTemplateColumns = `repeat(${numCols}, 100px)`;

// Generate the grid
for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        
        // First row and column as headers
        if (i === 0 || j === 0) {
            gridItem.classList.add('header');
            gridItem.innerHTML = i === 0 && j === 0 ? '' : i === 0 ? `Column ${j}` : `Row ${i}`;
        } else {
            // Assign random back color
            const color = colors[Math.floor(Math.random() * colors.length)];
            
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

// Flip card functionality
function flipCard(cardElement) {
    const card = cardElement.closest('.card');
    card.classList.toggle('flipped');
    MathJax.typeset(); // Re-render MathJax expressions after flipping
}