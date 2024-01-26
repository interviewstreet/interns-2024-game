import mazes from './../data/mazes.js';

export default class Maze {
    // static placeInternRandomly(pattern) {
    //     const patternWidth = pattern[0].length;
    //     const patternHeight = pattern.length

    //     let x = Math.random() * (patternWidth - 1);
    //     let y = Math.random() * (patternHeight - 2);

    //     if (x % 2 == 0 || x == 0) x++;
    //     if (x == patternWidth - 1) x--;

    //     if (y == 0) y++;
    // }

    constructor(internsCount) {
        const randIndex = Math.floor(Math.random() * mazes.data.length);
        this.pattern = mazes.data[randIndex];
        const patternWidth = this.pattern[0].length;
        const patternHeight = this.pattern.length;

        this.pattern[1] = this.pattern[1].replace("|", " ");
        this.pattern[patternHeight - 1] = this.pattern[patternHeight - 1].substring(0, patternWidth) + "  ";
    }
}