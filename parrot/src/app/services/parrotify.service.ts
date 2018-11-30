import { Injectable } from '@angular/core';
import { AlphabetService } from './alphabet.service';
import { Alphabet } from '../models/alphabet.model';
import { Data } from '../models/data.model';

@Injectable()
export class ParrotifyService {

    private alphabet: Alphabet;

    constructor(private alphabetService: AlphabetService) {
        this.alphabet = this.alphabetService.getAlphabet();
     }

    public parrotify(data: Data): void {
        data.result = '';

        for (let row = 0; row < 5; row++) {
            let tmp = '';
            for (let c of data.text.split('')) {
                tmp += this.alphabet.getRow(c.toLowerCase(), row)
                    .replace(new RegExp('#', 'g'), data.primary)
                    .replace(new RegExp('¤', 'g'), data.secondary);
            }

            data.result += tmp + '\n';
        }

        data.result.trim();
    }
}