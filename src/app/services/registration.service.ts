import { EventEmitter, Injectable, Output } from '@angular/core';
import { Registration } from '../models/registration';

import * as Registrations from '../stubs/registrations.json';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {
    private _selectedRegistration: Registration | null = null;

    @Output() registrationSelected = new EventEmitter<Registration>();

    constructor() {
        // Try to read the selected registration from local storage
        const storedRegistration = sessionStorage.getItem('selectedRegistration');
        if (storedRegistration !== null) {
            this._selectedRegistration = JSON.parse(storedRegistration);
        }
    }

    get selectedRegistration(): Registration | null {
        return this._selectedRegistration;
    }
    set selectedRegistration(value: Registration | null) {
        this._selectedRegistration = value;

        if (value !== null) {
            // Store the selected registration in local storage
            // IMPORTANT: This is not secure, once the backend is implemented, this should be stored in the user's session
            sessionStorage.setItem('selectedRegistration', JSON.stringify(value));

            this.registrationSelected.emit(value);
        } else {
            sessionStorage.removeItem('selectedRegistration');
        }
    }

    getSupportedRegistrations() {
        const supportedRegistrations: Registration[] = [];

        //console.log(Object.keys(Registrations)) // Array(5) [ "0", "1", "2", "length", "default" ]
        const nStubObjects = Object.keys(Registrations).length - 2;
        for (let i = 0; i < nStubObjects; i++) {
            supportedRegistrations.push(Registrations[i] as Registration);
        }

        return supportedRegistrations;
    }
}
