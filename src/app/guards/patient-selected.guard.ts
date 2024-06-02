import { CanActivateFn, Router } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { inject } from '@angular/core';

export const patientSelectedGuard: CanActivateFn = (route, state) => {
    const registrationService = new PatientService();
    const selectedPatient = registrationService.selectedPatient;

    if (selectedPatient !== null) {
        return true;
    } else {
        console.log('A patient needs to be selected before accessing this page.');
        // TODO: add a toast message to inform the user that a registration needs to be selected before accessing this page

        // Redirect to the select-registration page
        const router = inject(Router);
        router.navigate(['/select-patient']);

        return false;
    }
};
