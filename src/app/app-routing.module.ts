import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectRegistrationComponent } from './select-registration/select-registration.component';
import { registrationSelectedGuard } from './guards/registration-selected.guard';
import { SelectPatientComponent } from './select-patient/select-patient.component';

const routes: Routes = [
    {
        path: 'select-registration',
        component: SelectRegistrationComponent,
        canActivate: [ ]
    },
    {
        path: 'select-patient',
        component: SelectPatientComponent,
        canActivate: [registrationSelectedGuard]
    },
    // {
    //     path: 'verify-registration',
    //     component: VerifyRegistrationComponent,
    //     canActivate: [patientSelectedGuard]
    // },
    {
        path: '',
        redirectTo: '/select-registration',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
