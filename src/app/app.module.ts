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

@NgModule({
  declarations: [
    AppComponent,
    SelectRegistrationComponent,
    SearchRegistrationControlsComponent,
    RegistrationInfoContainerComponent,
    StartRegistrationFormComponent,
    StepContainerComponent,
    SelectPatientComponent
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
