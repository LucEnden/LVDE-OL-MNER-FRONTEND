import { PatientInfo } from "./patient-info";
import { Registration } from "./registration";

export class StartRegistration {
    constructor(
        public registration: Registration | null,
        public patient: PatientInfo | null
    ) { }
}