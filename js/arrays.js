let spreadsheet = [
    ['name', 'age', 'occupation'],
    ['peter parker', 28, 'spiderman'],
    ['clark kent', 35, 'superman']
]

function copyPasteCell(sheet, a, b, x, y) {
    sheet[x][y] = sheet[a][b]
    return sheet
}

console.table(copyPasteCell(spreadsheet, 2, 0, 1, 0))
