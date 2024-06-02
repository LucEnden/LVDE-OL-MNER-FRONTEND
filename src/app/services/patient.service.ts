import { EventEmitter, Injectable, Output } from '@angular/core';
import { PatientInfo } from '../models/patient-info';

import * as Patients from '../stubs/patients.json';

@Injectable({
    providedIn: 'root'
})
export class PatientService {
    private _localStorageKey = 'selectedPatient';

    @Output() patientSelected = new EventEmitter<PatientInfo>();

    constructor() { }

    get selectedPatient(): PatientInfo | null {
        const storedPatient = localStorage.getItem(this._localStorageKey);

        if (storedPatient !== null) {
            return JSON.parse(storedPatient) as PatientInfo;
        } else {
            return null;
        }
    }
    
    set selectedPatient(value: PatientInfo | null) {
        if (value !== null) {
            // Store the selected registration in local storage
            // IMPORTANT: This is not secure, once the backend is implemented, this should be stored in the user's session
            localStorage.setItem(this._localStorageKey, JSON.stringify(value));

            this.patientSelected.emit(value);
        } else {
            localStorage.removeItem(this._localStorageKey);
        }
    }

    async getPatientsInfo(): Promise<PatientInfo[]> {
        const patientsInfo: PatientInfo[] = [];

        const nStubObjects = Object.keys(Patients).length - 2;
        for (let i = 0; i < nStubObjects; i++) {
            patientsInfo.push(Patients[i] as PatientInfo);
        }

        return patientsInfo;
    }
}
