import { EventEmitter, Injectable, Output } from '@angular/core';
import { PatientDetails } from '../models/patient-details';

import * as Patients from '../stubs/patients.json';

@Injectable({
    providedIn: 'root'
})
export class PatientService {
    private _localStorageKey = 'selectedPatient';

    @Output() patientSelected = new EventEmitter<PatientDetails>();

    constructor() { }

    get selectedPatient(): PatientDetails | null {
        const storedPatient = localStorage.getItem(this._localStorageKey);

        if (storedPatient !== null) {
            return JSON.parse(storedPatient) as PatientDetails;
        } else {
            return null;
        }
    }

    set selectedPatient(value: PatientDetails | null) {
        if (value !== null) {
            // Store the selected registration in local storage
            // IMPORTANT: This is not secure, once the backend is implemented, this should be stored in the user's session
            localStorage.setItem(this._localStorageKey, JSON.stringify(value));

            this.patientSelected.emit(value);
        } else {
            localStorage.removeItem(this._localStorageKey);
        }
    }

    async getPatientsInfo(): Promise<PatientDetails[]> {
        const patientsInfo: PatientDetails[] = [];

        const nStubObjects = Object.keys(Patients).length - 2;
        for (let i = 0; i < nStubObjects; i++) {
            patientsInfo.push(Patients[i] as PatientDetails);
        }

        return patientsInfo;
    }

    async getPatientHistory(patientMdn: string): Promise<string[]> {
        // Mocking the patient history
        const nLorums = Math.floor(Math.random() * 4) + 1;
        const patientHistory: string[] = [];

        for (let i = 0; i < nLorums; i++) {
            patientHistory.push(this._lorumIpsumGenerator());
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(patientHistory);
            }, 500);
        });
    }

    private _lorumIpsumGenerator(): string {
        return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, purus nec sollicitudin ultricies, tortor urna varius ex, nec vehicula nunc risus at libero. Etiam nec dolor auctor, auctor lectus ac, aliquet nunc. Nullam auctor, purus nec sollicitudin ultricies, tortor urna varius ex, nec vehicula nunc risus at libero. Etiam nec dolor auctor, auctor lectus ac, aliquet nunc.';
    }
}
