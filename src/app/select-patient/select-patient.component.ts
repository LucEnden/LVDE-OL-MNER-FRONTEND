import { AfterViewInit, Component } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { PatientInfo } from '../models/patient-info';

@Component({
    selector: 'app-select-patient',
    templateUrl: './select-patient.component.html',
    styleUrls: ['./select-patient.component.scss']
})
export class SelectPatientComponent implements AfterViewInit {
    private _patientsInfo: PatientInfo[] = [];

    private _mdnFilter: string = '';
    private _firstNameFilter: string = '';
    private _lastNameFilter: string = '';
    private _dateOfBirthFilter: string = '';

    constructor(
        private patientService: PatientService
    ) { }

    ngAfterViewInit(): void {
        this._patientsInfo = [];

        this.patientService.getPatientsInfo().then((patientsInfoResponse: PatientInfo[]) => {
            this._patientsInfo.push(...patientsInfoResponse);
        });
    }

    get filteredPatientsInfo(): PatientInfo[] {
        const defaultFil = (patInfoValue: string, filterValue: string) => {
            if (filterValue == null || filterValue == undefined || filterValue == '') {
                return true;
            } else {
                return patInfoValue.toLowerCase().includes(filterValue.toLowerCase());
            }
        };


        return this._patientsInfo.filter((patientInfo: PatientInfo) => {
            return (
                defaultFil(patientInfo.mdn.toString(), this._mdnFilter) && 
                defaultFil(patientInfo.firstName, this._firstNameFilter) && 
                defaultFil(patientInfo.lastName, this._lastNameFilter) && 
                defaultFil(patientInfo.dateOfBirth, this._dateOfBirthFilter)
            );
        });
    }

    set mdnFilter(value: string) {
        console.log('MDN filter changed:', value);
        this._mdnFilter = this.defaultSet(value);
    }
    set firstNameFilter(value: string) {
        console.log('First name filter changed:', value);
        this._firstNameFilter = this.defaultSet(value);
    }
    set lastNameFilter(value: string) {
        console.log('Last name filter changed:', value);
        this._lastNameFilter = this.defaultSet(value);
    }
    set dateOfBirthFilter(value: string) {
        console.log('Date of birth filter changed:', value);
        this._dateOfBirthFilter = this.defaultSet(value);
    }

    private defaultSet(val: string) {
        if (val !== null || val !== undefined) {
            return val.toString();
        } else {
            return '';
        }
    }

    onPatientSelect(patientInfo: PatientInfo): void {
        this.patientService.selectedPatient = patientInfo;
    }
}
