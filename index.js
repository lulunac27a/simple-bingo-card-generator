const generateButton = document.getElementById("generate"); //button to generate bingo board
const bingoTable = document.getElementById("bingo-table"); //bingo table
generateButton.addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
        //repeat for each row in bingo board
        let columnNumbers = [];
        let j = 0;
        while (j < 5) {
            //repeat for each column in each row
            let cellNumber = Math.floor(Math.random() * 15) + i * 15 + 1; //each column has 15 numbers
            if (!columnNumbers.includes(cellNumber)) {
                //check if other numbers are not in bingo board
                columnNumbers.push(cellNumber); //add numbers to bingo board
                bingoTable
                    .querySelector(`#row-${j + 1}`)
                    .querySelector(`#cell-${j + 1}-${i + 1}`).textContent =
                    cellNumber.toString();
                j++;
            }
        }
        if (bingoTable.checked) {
            bingoTable
                .querySelector(`#row-3`)
                .querySelector(`#cell-3-3`).textContent = "X";
        }
    }
});
