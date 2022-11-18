function createMatrix(edges) {
    // TODO: 여기에 코드를 작성합니다.
    let maxVertax = 0;

    for (let i = 0; i < edges.length; i++) {
        for (let j = 0; j < edges[i].length; j++) {
            if (typeof (edges[i][j]) === 'number') {
                edges[i][j] > maxVertax ? (maxVertax = edges[i][j]) : false;
            }
        }
    }

    let matrix = new Array(maxVertax + 1);

    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(maxVertax + 1).fill(0);
    }

    for (let i = 0; i < edges.length; i++) {
        if (edges[i][2] === 'directed') {
            matrix[edges[i][0]][edges[i][1]] = 1;
        }
        else {
            matrix[edges[i][0]][edges[i][1]] = 1;
            matrix[edges[i][1]][edges[i][0]] = 1;
        }
    }

    return matrix;
}

const output1 = createMatrix([
    [0, 3, "directed"],
    [0, 2, "directed"],
    [1, 3, "directed"],
    [2, 1, "directed"],
]);

console.log(output1);