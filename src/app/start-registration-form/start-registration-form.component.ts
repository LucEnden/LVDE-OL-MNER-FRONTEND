import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { StartRegistration } from '../models/start-registration';
import { RegistrationService } from '../services/registration.service';
import { RegistrationSelection } from '../models/registration-selection';
import { PatientDetails } from '../models/patient-details';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-start-registration-form',
  templateUrl: './start-registration-form.component.html',
  styleUrls: ['./start-registration-form.component.scss']
})
export class StartRegistrationFormComponent implements OnInit {
    private model: StartRegistration = new StartRegistration(null, null);

    constructor(
        private registrationService: RegistrationService,
        private patientService: PatientService
    ) {}

    ngOnInit() {
        this.registrationService.registrationSelected.subscribe(registration => {
            this.model.registration = registration;
        });
        this.model.registration = this.registrationService.selectedRegistration;

        this.patientService.patientSelected.subscribe(patient => {
            this.model.patient = patient;
        });
        this.model.patient = this.patientService.selectedPatient;
    }

    get registration(): RegistrationSelection | null {
        return this.model.registration;
    }

    get patient(): PatientDetails | null {
        return this.model.patient;
    }
}
