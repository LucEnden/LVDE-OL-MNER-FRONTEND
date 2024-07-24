import { Component, Input } from '@angular/core';
import { RegistrationSelection } from 'src/app/models/registration-selection';

@Component({
  selector: 'app-registration-info-container',
  templateUrl: './registration-info-container.component.html',
  styleUrls: ['./registration-info-container.component.scss']
})
export class RegistrationInfoContainerComponent {
    private _registration: RegistrationSelection | null = null;

    constructor() { }

    get registration(): RegistrationSelection | null {
        return this._registration
    }

    @Input() set registration(registration: RegistrationSelection | null) {
        this._registration = registration;
    }
}
