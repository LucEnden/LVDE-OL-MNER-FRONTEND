import { Component } from '@angular/core';
import { RegistrationSelection } from '../models/registration-selection';
import { RegistrationService } from '../services/registration.service';
import { PatientService } from '../services/patient.service';
import { PatientDetails } from '../models/patient-details';

@Component({
    selector: 'app-select-registration',
    templateUrl: './select-registration.component.html',
    styleUrls: ['./select-registration.component.scss']
})
export class SelectRegistrationComponent {
    constructor(
        public registrationService: RegistrationService,
        public patientService: PatientService
    ) { }

    get registration(): RegistrationSelection | null {
        return this.registrationService.selectedRegistration
    }
    get patient(): PatientDetails | null {
        return this.patientService.selectedPatient
    }
}
