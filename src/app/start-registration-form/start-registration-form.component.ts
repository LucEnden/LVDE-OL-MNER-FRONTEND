import { Component, Input } from '@angular/core';
import { StartRegistration } from '../models/start-registration';
import { RegistrationService } from '../services/registration.service';
import { Registration } from '../models/registration';

@Component({
  selector: 'app-start-registration-form',
  templateUrl: './start-registration-form.component.html',
  styleUrls: ['./start-registration-form.component.scss']
})
export class StartRegistrationFormComponent {
    private model: StartRegistration;

    @Input() set registration(registration: Registration | null) {
        if (registration !== null) {
            this.model.registration = registration;
        }
    }

    constructor(
        private registrationService: RegistrationService
    ) { 
        this.model = new StartRegistration(this.registrationService.getSupportedRegistrations()[0]);
    }

    get registration(): Registration {
        return this.model.registration;
    }
}
