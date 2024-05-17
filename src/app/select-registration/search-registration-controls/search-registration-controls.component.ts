import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Registration } from 'src/app/models/registration';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-search-registration-controls',
  templateUrl: './search-registration-controls.component.html',
  styleUrls: ['./search-registration-controls.component.scss']
})
export class SearchRegistrationControlsComponent {
    private _registrationSearchText = '';
    @Output() registrationSearchTextChange = new EventEmitter<string>();
    @Output() registrationSelected = new EventEmitter<Registration>();

    constructor(
        private registrationService: RegistrationService
    ) { }

    get supportedRegistrationNames(): string[] {
        return this.registrationService.getSupportedRegistrations().map(reg => reg.name);
    }

    get registrationSearchText(): string {
        return this._registrationSearchText;
    }
    private set registrationSearchText(value: string) {
        this._registrationSearchText = value;
    }

    onSearchTextInput(e: Event): void {
        const target = e.target as HTMLInputElement;
        const value = target.value;

        console.log('Registration search text changed:', value);
        
        this.registrationSearchText = value;
        this.registrationSearchTextChange.emit(this.registrationSearchText);
    }

    onRegistrationSelect(registrationName: string): void {
        console.log('Registration selected:', registrationName);

        const registration = this.registrationService.getSupportedRegistrations().find(reg => reg.name === registrationName)!;

        this.registrationSelected.emit(registration);
    }

    onConfirmRegistrationSelection(): void {
        console.log('Confirming registration selection');
    }
}
