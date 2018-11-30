export class Alphabet {

    private letters: Map<string, string[]>;

    constructor(letters: Map<string, string[]>) {
        this.letters = letters;
    }

    public getRow(letter: string, row: number): string {
        if (this.letters.has(letter)) {
            return this.letters.get(letter)[row];
        } else {
            return this.letters.get(' ')[row];
        }
    }
}