import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { StartRegistration } from '../models/start-registration';
import { RegistrationService } from '../services/registration.service';
import { Registration } from '../models/registration';
import { PatientInfo } from '../models/patient-info';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-start-registration-form',
  templateUrl: './start-registration-form.component.html',
  styleUrls: ['./start-registration-form.component.scss']
})
export class StartRegistrationFormComponent implements OnInit, AfterViewInit {
    private model: StartRegistration = new StartRegistration(null, null);

    @Input() set registration(registration: Registration | null) {
        if (registration !== null) {
            this.model.registration = registration;
        }
    }

    @Input() set patient(patient: PatientInfo | null) {
        if (patient !== null) {
            this.model.patient = patient;
        }
    };

    constructor(
        private registrationService: RegistrationService,
        private patientService: PatientService
    ) {}

    ngOnInit() {
        this.registrationService.registrationSelected.subscribe(registration => {
            this.model.registration = registration;
        });

        this.patientService.patientSelected.subscribe(patient => {
            this.model.patient = patient;
        });
    }

    ngAfterViewInit() {
        this.model.patient = this.patientService.selectedPatient;
        this.model.registration = this.registrationService.selectedRegistration;
    }

    get registration(): Registration | null {
        return this.model.registration;
    }

    get patient(): PatientInfo | null {
        return this.model.patient;
    }
}
