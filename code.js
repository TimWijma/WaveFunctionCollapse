class Grid {
    constructor(x,y) {
        this.x = x
        this.y = y
        this.grid = []
        

        for(let i = x; i > 0; i--) {
            let row = []
            for(let j = y; j > 0; j--) {
                let value = 0
                let cell = new Cell(i, j, value)
                row.push(cell)
            }
            this.grid.push(row)
        }
    }
    log() {
        let tempGrid = []
        for(let i = this.x; i > 0; i--) {
            let row = []
            for(let j = this.y; j > 0; j--) {
                let cell = this.grid[this.y - 1][this.x - 1]
                row.push(cell.value)
            }
            tempGrid.push(row)
        }
        console.log(tempGrid)
    }
}

class Cell {
    constructor(x, y, value) {
        this.x = x
        this.y = y
        this.value = value
    }
    getPossibleValues() {

    }
}

let field = new Grid(10, 10)
console.log(field.grid);