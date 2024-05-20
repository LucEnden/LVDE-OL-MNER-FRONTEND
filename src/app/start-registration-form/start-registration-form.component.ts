import { Component, Input, OnInit } from '@angular/core';
import { StartRegistration } from '../models/start-registration';
import { RegistrationService } from '../services/registration.service';
import { Registration } from '../models/registration';

@Component({
  selector: 'app-start-registration-form',
  templateUrl: './start-registration-form.component.html',
  styleUrls: ['./start-registration-form.component.scss']
})
export class StartRegistrationFormComponent implements OnInit {
    private model: StartRegistration = new StartRegistration(null);

    @Input() set registration(registration: Registration | null) {
        if (registration !== null) {
            this.model.registration = registration;
        }
    }

    constructor(
        private registrationService: RegistrationService
    ) {}

    ngOnInit() {
        this.registrationService.registrationSelected.subscribe(registration => {
            this.model.registration = registration;
        });
    }

    get registration(): Registration | null {
        return this.model.registration;
    }
}
