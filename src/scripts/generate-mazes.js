import mazeGeneration from 'maze-generation';
import fs from 'node:fs';

function createMazes(mazeCount, mazeWidth, mazeHeight) {
    const mazes = {};

    for (let i = 1; i <= mazeWidth; i++) {
        mazes[i] = mazeGeneration({
            width: mazeWidth,
            height: mazeHeight,
            seed: Math.random() * 987654
        }).toString().split("\n");
    }

    return mazes;
}

function writeMazesJSON(mazes) {
    const mazesJSON = JSON.stringify(mazes);

    fs.writeFileSync('src/data/mazes.json', mazesJSON);
}

const mazes = createMazes(20, 20, 30);
writeMazesJSON(mazes);
