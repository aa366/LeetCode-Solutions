
// problem => Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.



function isValidSudoku(board: string[][]): boolean {
    // set to store and check if column or row has duplicate 
    const set = new Set()

    for (let i = 0; i < board.length; i++) {
        // loop at the column 
        for (let j = 0; j < board[i].length; j++) {
            // loop on each element in the column 

            const cell = board[i][j]
            // get the cell value 

            if (cell === '.') continue
            // if it empty just pass it 

            const row = `row: ${i}, value: ${cell}`
            const column = `column: ${j}, value: ${cell}`
            // make string explain the row and cell value


            const boxNumber =
                3 * Math.floor(i / 3) + Math.floor(j / 3)

            const box =
                `boxNumber: ${boxNumber}, value: ${cell}`


            if (set.has(row) || set.has(column) || set.has(box)) return false
            // check if the cell already exist then its not valid 

            set.add(row).add(column).add(box)
            // add strings row column box by chaining 
        }

    }


    return true
};


console.log(isValidSudoku(
    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]));
console.log(isValidSudoku([["8", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]));








