class Grid {
    constructor(rows, columns) {
        this.rows = rows
        this.columns = columns
        this.grid = []
        this.values = {
            0: { //land
                0: [0],
                1: [0,1],
                2: [0,1],
                3: [0,1]
            },
            1: { //coast
                0: [0],
                1: [0,1,2],
                2: [2],
                3: [0,1,2]
            },
            2: { //sea
                0: [1,2],
                1: [1,2],
                2: [2],
                3: [1,2]
            }
        }

        for(let i = 0; i < rows; i++) {
            let row = []
            for(let j = 0; j < columns; j++) {
                let value = null
                let cell = new Cell(this, j, i, value)
                row.push(cell)
            }
            this.grid.push(row)
        }
        for(const row of this.grid) {
            for(const cell of row) {
                cell.getNeighbours()
            }
        }
    }
    log() {
        let tempGrid = []
        for(const row of this.grid) {
            let tempRow = []
            for(const cell of row) {
                tempRow.push(cell.value)
            }
            tempGrid.push(tempRow)
        }
        console.log(tempGrid)
    }
}

class Cell {
    constructor(parent, x, y, value) {
        this.parent = parent
        this.x = x
        this.y = y
        this.value = value
        this.neighbours = []
    }
    getNeighbours() {
        if(this.y > 0 && this.parent.grid[this.y - 1][this.x]) {
            this.neighbours.push({0: this.parent.grid[this.y - 1][this.x]})
        }
        if(this.parent.grid[this.y][this.x + 1]) {
            this.neighbours.push({1: this.parent.grid[this.y][this.x + 1]})
        }
        if(this.y < this.parent.rows - 1 && this.parent.grid[this.y + 1][this.x]) {
            this.neighbours.push({2: this.parent.grid[this.y + 1][this.x]})
        }
        if(this.parent.grid[this.y][this.x - 1]) {
            this.neighbours.push({3: this.parent.grid[this.y][this.x - 1]})
        }
    }
    getNeighbourValues() {

    }
    getPossibleValues() {

    }
}

let field = new Grid(10, 10)
console.log(field.grid);