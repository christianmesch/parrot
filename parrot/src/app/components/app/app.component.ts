import { Component } from '@angular/core';
import { ParrotifyService } from 'src/app/services/parrotify.service';
import { Data } from 'src/app/models/data.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ParrotifyService]
})

export class AppComponent {

    private data: Data = {
        text: 'parrot',
        primary: ':parrot:',
        secondary: ':invisibleparrot:',
        result: ''
    };

    constructor(private parrotifyService: ParrotifyService) { }

    public parrotify(): void {
        this.parrotifyService.parrotify(this.data);
    }
}
