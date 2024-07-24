import { PatientDetails } from "./patient-details";
import { RegistrationSelection } from "./registration-selection";

export class StartRegistration {
    constructor(
        public registration: RegistrationSelection | null,
        public patient: PatientDetails | null
    ) { }
}