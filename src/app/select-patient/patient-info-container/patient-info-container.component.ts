import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PatientInfo } from 'src/app/models/patient-info';

@Component({
  selector: 'app-patient-info-container',
  templateUrl: './patient-info-container.component.html',
  styleUrls: ['./patient-info-container.component.scss']
})
export class PatientInfoContainerComponent {
    @Input({ required: true }) patientsInfo: PatientInfo[] = [];

    @Output() onPatientSelect: EventEmitter<PatientInfo> = new EventEmitter<PatientInfo>();

    // get patientsInfo(): PatientInfo[] {
    //     return this._patientsInfo;
    // }
    // @Input({
    //     required: true
    // }) set patientsInfo(value: PatientInfo[]) {
    //     this._patientsInfo = value;
    // }
}
