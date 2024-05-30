import { Component, Output } from '@angular/core';

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

    @Output() searchPatientFilterChanged: any;

    constructor() { }

    get mdn(): string {
        return this._mdn;
    }
    set mdn(value: string) {
        this._mdn = value;
    }
    
    get firstName(): string {
        return this._firstName;
    }
    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }
    set lastName(value: string) {
        this._lastName = value;
    }

    get dateOfBirth(): string {
        return this._dateOfBirth;
    }
    set dateOfBirth(value: string) {
        console.log(value);
        this._dateOfBirth = value;
    }

    private _onSearchPatientFilterChanged(): void {
        this.searchPatientFilterChanged.emit({
            mdn: this.mdn,
            firstName: this.firstName,
            lastName: this.lastName,
            dateOfBirth: this.dateOfBirth
        });
    }
}
