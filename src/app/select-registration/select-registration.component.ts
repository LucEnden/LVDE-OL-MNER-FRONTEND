import { Component } from '@angular/core';
import { Registration } from '../models/registration';
import { RegistrationService } from '../services/registration.service';
import { PatientService } from '../services/patient.service';
import { PatientInfo } from '../models/patient-info';

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

    get registration(): Registration | null {
        return this.registrationService.selectedRegistration
    }
    get patient(): PatientInfo | null {
        return this.patientService.selectedPatient
    }
}
