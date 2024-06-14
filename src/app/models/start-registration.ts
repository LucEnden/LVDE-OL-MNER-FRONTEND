import { PatientDetails } from "./patient-details";
import { Registration } from "./registration";

export class StartRegistration {
    constructor(
        public registration: Registration | null,
        public patient: PatientDetails | null
    ) { }
}