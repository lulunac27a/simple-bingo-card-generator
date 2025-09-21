const generateButton = document.getElementById('generate');
const bingoTable = document.getElementById('bingo-table');
generateButton.addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
        let columnNumbers = [];
        let j = 0;
        while (j < 5) {
            let cellNumber = Math.floor(Math.random() * 15) + i * 15 + 1;
            if (!columnNumbers.includes(cellNumber)) {
                columnNumbers.push(cellNumber);
                bingoTable.querySelector(`#row-${j + 1}`).querySelector(`#cell-${j + 1}-${i + 1}`).textContent = cellNumber.toString();
                j++;
            }
        }
    }
});