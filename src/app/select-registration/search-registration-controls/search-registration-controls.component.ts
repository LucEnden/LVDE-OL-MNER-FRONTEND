import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-search-registration-controls',
  templateUrl: './search-registration-controls.component.html',
  styleUrls: ['./search-registration-controls.component.scss']
})
export class SearchRegistrationControlsComponent {
    private _registrationSearchText = '';

    constructor(
        private router: Router,
        public registrationService: RegistrationService
    ) { }

    get supportedRegistrationNames(): string[] {
        return this.registrationService.supportedRegistrations.map(reg => reg.name);
    }

    get registrationSearchText(): string {
        return this._registrationSearchText;
    }
    private set registrationSearchText(value: string) {
        this._registrationSearchText = value;
    }

    get selectedRegistrationName(): string {
        return this.registrationService.selectedRegistration ? this.registrationService.selectedRegistration.name : '';
    }

    onSearchTextInput(e: Event): void {
        const target = e.target as HTMLInputElement;
        const value = target.value;

        console.log('Registration search text changed:', value);
        
        this.registrationSearchText = value;
    }

    onRegistrationSelect(registrationName: string): void {
        console.log('Registration selected:', registrationName);
        
        this.registrationService.selectedRegistration = this.registrationService.supportedRegistrations.find(reg => reg.name === registrationName)!;
    }

    onConfirmRegistrationSelection(): void {
        console.log('Confirming registration selection:', this.selectedRegistrationName);

        if (this.registrationService.selectedRegistration !== null) {
            this.router.navigate(['/select-patient']);
        }
    }
}
