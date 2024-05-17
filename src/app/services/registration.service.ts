import { Injectable } from '@angular/core';
import { Registration } from '../models/registration';

import * as Registrations from '../stubs/registrations.json';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {

    constructor() { }

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
