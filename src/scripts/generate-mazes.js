import mazeGeneration from 'maze-generation';
import fs from 'node:fs';

function createMazes(mazeCount, mazeWidth, mazeHeight) {
    const mazes = {};

    for (let i = 1; i <= mazeCount; i++) {
        mazes[i] = mazeGeneration({
            width: mazeWidth,
            height: mazeHeight,
            seed: Math.random() * 987654
        }).toString().split("\n");
    }

    return mazes;
}

function writeMazesObject(mazes) {
    const mazesJSON = JSON.stringify(mazes);
    const data = `export default ${mazesJSON}`;

    fs.writeFileSync('src/data/mazes.js', mazesObject);
}

const mazes = createMazes(20, 20, 30);
writeMazesObject(mazes);
