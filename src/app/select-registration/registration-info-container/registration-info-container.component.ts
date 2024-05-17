import { Component, Input } from '@angular/core';
import { Registration } from 'src/app/models/registration';

@Component({
  selector: 'app-registration-info-container',
  templateUrl: './registration-info-container.component.html',
  styleUrls: ['./registration-info-container.component.scss']
})
export class RegistrationInfoContainerComponent {
    private _registration: Registration | null = null;

    constructor() { }

    get registration(): Registration | null {
        return this._registration
    }

    @Input() set registration(registration: Registration | null) {
        this._registration = registration;
    }
}
