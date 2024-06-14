import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PatientDetails } from 'src/app/models/patient-details';

@Component({
  selector: 'app-patient-info-container',
  templateUrl: './patient-info-container.component.html',
  styleUrls: ['./patient-info-container.component.scss']
})
export class PatientDetailsContainerComponent {
    @Input({ required: true }) patientsInfo: PatientDetails[] = [];

    @Output() onPatientSelect: EventEmitter<PatientDetails> = new EventEmitter<PatientDetails>();
}
