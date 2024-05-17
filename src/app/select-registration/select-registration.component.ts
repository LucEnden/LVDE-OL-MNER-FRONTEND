import { Component } from '@angular/core';
import { Registration } from '../models/registration';

@Component({
    selector: 'app-select-registration',
    templateUrl: './select-registration.component.html',
    styleUrls: ['./select-registration.component.scss']
})
export class SelectRegistrationComponent {
    private _registration: Registration | null = null;

    constructor() { }

    get registration(): Registration | null {
        return this._registration
    }

    set registration(registration: Registration | null) {
        this._registration = registration;
    }
}
