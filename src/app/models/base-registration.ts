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

export abstract class BaseRegistration {
    constructor(
        public Sections: Sections[]
    ) {
        if (!Sections || Sections.length === 0) {
            this.Sections = [];
            console.log('BaseRegistration');
        }
    }
}