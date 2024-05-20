import { Component } from '@angular/core';
import { Registration } from '../models/registration';
import { RegistrationService } from '../services/registration.service';

@Component({
    selector: 'app-select-registration',
    templateUrl: './select-registration.component.html',
    styleUrls: ['./select-registration.component.scss']
})
export class SelectRegistrationComponent {
    constructor(
        public registrationService: RegistrationService
    ) { }

    get registration(): Registration | null {
        return this.registrationService.selectedRegistration
    }
}
