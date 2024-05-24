import { CanActivateFn, Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { inject } from '@angular/core';

export const registrationSelectedGuard: CanActivateFn = (route, state) => {
    const registrationService = new RegistrationService();
    const selectedRegistration = registrationService.selectedRegistration;

    if (selectedRegistration !== null) {
        return true;
    } else {
        console.log('A registration needs to be selected before accessing this page.');
        // TODO: add a toast message to inform the user that a registration needs to be selected before accessing this page

        // Redirect to the select-registration page
        const router = inject(Router);
        router.navigate(['/select-registration']);

        return false;
    }
};
