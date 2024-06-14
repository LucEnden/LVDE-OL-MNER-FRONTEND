import { AfterViewInit, Component } from '@angular/core';
import { AnnotatedText } from 'src/app/models/annotated-text';
import { NerModelService } from 'src/app/services/ner-model.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
    selector: 'app-patient-history-container',
    templateUrl: './patient-history-container.component.html',
    styleUrls: ['./patient-history-container.component.scss']
})
export class PatientHistoryContainerComponent implements AfterViewInit {
    private _patientHistory: string[] = [];
    private _annotatedPatientHistory: AnnotatedText[] = [];

    constructor(
        private patientService: PatientService,
        private nerModelService: NerModelService
    ) { }

    async ngAfterViewInit() {
        await this.getPatientHistory();
        await this.getAnnotatedPatientHistory();
    }

    get annotatedPatientHistory(): AnnotatedText[] {
        return this._annotatedPatientHistory;
    }

    private async getPatientHistory() {
        const patientMdn = this.patientService.selectedPatient !== null ? this.patientService.selectedPatient.mdn : null;

        if (patientMdn !== null) {
            this._patientHistory = await this.patientService.getPatientHistory(patientMdn.toString());
        }
    }

    private async getAnnotatedPatientHistory() {
        // Mocking the annotation of the patient history
        this._annotatedPatientHistory = this._patientHistory.map((text) => {
            const annotations = this.nerModelService.annotate(text);
            return annotations
        });
    }
}
