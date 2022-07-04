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
 * All data sources and ULA plugins
 * must eventually transform their
 * attestations / credentials back
 * to this model.
 */
export declare class Attestation {
    private readonly _uuid;
    private readonly _attestorPubKey;
    private readonly _forPubKey?;
    private readonly _context;
    private readonly _type;
    private readonly _expires?;
    private readonly _datetime;
    private readonly _statements;
    constructor(attestation: IAttestation);
    /**
     * The uuid of this attestation
     * @return string
     */
    get uuid(): string;
    /*