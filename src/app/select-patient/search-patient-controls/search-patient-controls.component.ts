import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search-patient-controls',
    templateUrl: './search-patient-controls.component.html',
    styleUrls: ['./search-patient-controls.component.scss']
})
export class SearchPatientControlsComponent {
    private _mdn: string = '';
    private _firstName: string = '';
    private _lastName: string = '';
    private _dateOfBirth: string = '';

    @Output() onMdnChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() onFirstNameChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() onLastNameChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() onDateOfBirthChange: EventEmitter<string> = new EventEmitter<string>();

    constructor(
        private router: Router
    ) { }

    get mdn(): string {
        return this._mdn;
    }
    set mdn(value: string) {
        this._mdn = value;
        this.onMdnChange.emit(this._mdn);
    }
    
    get firstName(): string {
        return this._firstName;
    }
    set firstName(value: string) {
        this._firstName = value;
        this.onFirstNameChange.emit(this._firstName);
    }

    get lastName(): string {
        return this._lastName;
    }
    set lastName(value: string) {
        this._lastName = value;
        this.onLastNameChange.emit(this._lastName);
    }

    get dateOfBirth(): string {
        return this._dateOfBirth;
    }
    set dateOfBirth(value: string) {
        this._dateOfBirth = value;
        this.onDateOfBirthChange.emit(this._dateOfBirth);
    }

    onConfirmPatient(): void {
        this.router.navigate(['/verify-registration']);
    }
}
