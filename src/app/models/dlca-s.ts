import * as DLCA_S_JSON from '../stubs/dlca-s.json';

interface SectionItem {
    Categorie: string;
    LabelOmschrijving: string;
    VariabeleNaam: string;
    Type: string;
    Lengte: string;
    Formaat: string;
    VariabeleVerplicht: string;
    OptieKeuzeVerplicht: string;
    HelpTekst: string;
}

interface Sections {
    SectionName: string;
    SectionItems: SectionItem[];
}

export class DLCA_S {
    constructor(
        public Sections: Sections[]
    ) {
        if (!Sections || Sections.length === 0) {
            this.Sections = [];
            console.log(DLCA_S_JSON);
        }
    }
}