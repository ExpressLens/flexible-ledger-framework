export interface IAttestation {
    uuid?: string;
    attestorPubKey: string;
    forPubKey?: string;
    context: string[];
    type: string[];
    expires?: Date | string;
    datetime: Date | string;
    statements: any;
}
/**
 * All data source