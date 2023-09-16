'use strict';

const container = document.querySelector('.container');

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (let j = 0; j < size; j++) {
      const cell = document.createElement('div');
      cell.setAttribute('id', `cell-${i}${j}`);
      cell.classList.add('cell');
      cell.style.cssText = ' min-width: 20px; min-height: 20px;';
      cell.textContent = ` `;
      row.appendChild(cell);
    }
  }
}

createGrid(16);

const squares = document.querySelectorAll('.cell');
const resetBtn = document.querySelector('.reset-button');

let isDrawing = false;
let lastSquare = null;

squares.forEach(square => {
  square.addEventListener('mousedown', e => {
    isDrawing = true;
    lastSquare = square;
  });
  square.addEventListener('mouseup', e => {
    isDrawing = false;
    lastSquare = null;
  });
  square.addEventListener('mousemove', function () {
    if (isDrawing && square !== lastSquare) {
      square.style.backgroundColor = '#333333';
    }
  });
});

resetBtn.addEventListener('click', function () {
  squares.forEach(square => {
    square.style.backgroundColor = '#fefefe';
  });
});
