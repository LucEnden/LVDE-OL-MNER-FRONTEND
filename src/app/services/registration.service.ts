import { EventEmitter, Injectable, Output } from '@angular/core';
import { RegistrationSelection } from '../models/registration-selection';

import * as Registrations from '../stubs/registrations.json';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {
    private _localStorageKey = 'selectedRegistration';
    private _supportedRegistrations: RegistrationSelection[] = this._getSupportedRegistrations();

    @Output() registrationSelected = new EventEmitter<RegistrationSelection>();

    constructor() { }

    get selectedRegistration(): RegistrationSelection | null {
        const storedRegistration = localStorage.getItem(this._localStorageKey);

        if (storedRegistration !== null) {
            return JSON.parse(storedRegistration) as RegistrationSelection;
        } else {
            return null;
        }
    }
    set selectedRegistration(value: RegistrationSelection | null) {
        if (value !== null) {
            // Store the selected registration in local storage
            // IMPORTANT: This is not secure, once the backend is implemented, this should be stored in the user's session
            localStorage.setItem(this._localStorageKey, JSON.stringify(value));

            this.registrationSelected.emit(value);
        } else {
            localStorage.removeItem(this._localStorageKey);
        }
    }

    get supportedRegistrations(): RegistrationSelection[] {
        return this._supportedRegistrations;
    }

    private _getSupportedRegistrations() {
        const supportedRegistrations: RegistrationSelection[] = [];

        //console.log(Object.keys(Registrations)) // Array(5) [ "0", "1", "2", "length", "default" ]
        const nStubObjects = Object.keys(Registrations).length - 2;
        for (let i = 0; i < nStubObjects; i++) {
            supportedRegistrations.push(Registrations[i] as RegistrationSelection);
        }

        return supportedRegistrations;
    }

    public getRegistrationByName(name: string): RegistrationSelection | null {
        return this._supportedRegistrations.find(registration => registration.name === name) || null;
    }
}
