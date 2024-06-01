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
        const defaultFil = (patInfo: PatientInfo, filterValue: string) => {
            if (filterValue == '') {
                return true;
            }

            return patInfo.lastName.toLowerCase().includes(filterValue.toLowerCase());
        };


        return this._patientsInfo.filter((patientInfo: PatientInfo) => {
            return (
                defaultFil(patientInfo, this._mdnFilter) && 
                defaultFil(patientInfo, this._firstNameFilter) && 
                defaultFil(patientInfo, this._lastNameFilter) && 
                defaultFil(patientInfo, this._dateOfBirthFilter)
            );
        });
    }

    set mdnFilter(value: string) {
        this._mdnFilter = value;
    }
    set firstNameFilter(value: string) {
        this._firstNameFilter = value;
    }
    set lastNameFilter(value: string) {
        this._lastNameFilter = value;
    }
    set dateOfBirthFilter(value: string) {
        this._dateOfBirthFilter = value
    }

    onPatientSelect(patientInfo: PatientInfo): void {
        this.patientService.selectedPatient = patientInfo;
    }
}
