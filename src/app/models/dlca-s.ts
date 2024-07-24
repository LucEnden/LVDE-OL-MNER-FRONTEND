import * as DLCA_S_JSON from '../stubs/dlca-s.json';
import { BaseRegistration } from './base-registration';


export class DLCA_S extends BaseRegistration {
    constructor() {
        super([]);
        console.log('DLCA_S', DLCA_S_JSON);
    }
}