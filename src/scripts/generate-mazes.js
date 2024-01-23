import mazeGeneration from 'maze-generation';
import fs from 'node:fs';

function createMazes(mazeCount, mazeWidth, mazeHeight) {
    const mazes = {
        data: [],
        width: mazeWidth,
        height: mazeHeight
    };

    for (let i = 1; i <= mazeCount; i++) {
        let maze = mazeGeneration({
            width: mazeWidth,
            height: mazeHeight,
            seed: Math.random() * 987654
        }).toString().split("\n");

        mazes.data.push(maze);
    }

    return mazes;
}

function writeMazesObject(mazes) {
    const mazesJSON = JSON.stringify(mazes);
    const data = `export default ${mazesJSON}`;

    fs.writeFileSync('src/data/mazes.js', data);
}

const mazes = createMazes(20, 20, 30);
writeMazesObject(mazes);
