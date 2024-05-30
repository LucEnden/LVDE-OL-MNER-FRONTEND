import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-container',
  templateUrl: './step-container.component.html',
  styleUrls: ['./step-container.component.scss']
})
export class StepContainerComponent implements OnInit {
    private _steps: { [path: string] : { index: number, description: string }; } = {};

    constructor(
        private router: Router,
    ) { }

    ngOnInit() {
        // IMPORTANT: This method is dependent on the routes defined in the app-routing.module.ts file.
        // If the routes are changed, this method will need to be updated.
        this._steps = {
            '/select-registration': { index: 0, description: 'Selecteer een registratie' },
            '/select-patient': { index: 1, description: 'Selecteer een patiënt' },
        };
    }

    get steps() {
        return this._steps;
    }

    get currentStep(): { index: number, description: string } {
        return this._steps[this.router.url];
    }
}
