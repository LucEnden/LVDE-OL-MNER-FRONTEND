import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectRegistrationComponent } from './select-registration/select-registration.component';
import { SearchRegistrationControlsComponent } from './select-registration/search-registration-controls/search-registration-controls.component';
import { RegistrationInfoContainerComponent } from './select-registration/registration-info-container/registration-info-container.component';
import { StartRegistrationFormComponent } from './start-registration-form/start-registration-form.component';
import { StepContainerComponent } from './step-container/step-container.component';
import { SelectPatientComponent } from './select-patient/select-patient.component';
import { SearchPatientControlsComponent } from './select-patient/search-patient-controls/search-patient-controls.component';
import { PatientDetailsContainerComponent } from './select-patient/patient-info-container/patient-info-container.component';
import { VerifyRegistrationComponent } from './verify-registration/verify-registration.component';
import { ComorbiditiesChecklistComponent } from './verify-registration/comorbidities-checklist/comorbidities-checklist.component';
import { PatientHistoryContainerComponent } from './verify-registration/patient-history-container/patient-history-container.component';
import { AnnotationLegendComponent } from './verify-registration/annotation-legend/annotation-legend.component';
import { SelectedAnnotationsDetailsComponent } from './verify-registration/selected-annotations-details/selected-annotations-details.component';
import { VerifyRegistrationActionsComponent } from './verify-registration/verify-registration-actions/verify-registration-actions.component';
import { AnnotationComponent } from './verify-registration/patient-history-container/annotation/annotation.component';
import { AnnotatedTextComponent } from './verify-registration/patient-history-container/annotated-text/annotated-text.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectRegistrationComponent,
    SearchRegistrationControlsComponent,
    RegistrationInfoContainerComponent,
    StartRegistrationFormComponent,
    StepContainerComponent,
    SelectPatientComponent,
    SearchPatientControlsComponent,
    PatientDetailsContainerComponent,
    VerifyRegistrationComponent,
    ComorbiditiesChecklistComponent,
    PatientHistoryContainerComponent,
    AnnotationLegendComponent,
    SelectedAnnotationsDetailsComponent,
    VerifyRegistrationActionsComponent,
    AnnotationComponent,
    AnnotatedTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
