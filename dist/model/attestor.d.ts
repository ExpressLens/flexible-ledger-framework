import { IAttestation, Attestation } from './attestation';
import { ITransaction, Transaction } from './transaction';
export interface IAttestor {
    name: string;
    icon: string;
    pubKey: string;
    datetime: Date | string;
    transactions?: ITransaction[];
    receivedAttestations?: IAttestation[];
    issuedAttestations?: IAttestation[];
}
/**
 * All data sources and ULA plugins
 * must eventually transform their
 * attestors / issuers  back to this
 * model.
 */
export declare class Attestor {
    private readonly _name;
    private readonly _icon;
    private readonly _pubKey;
    private readonly _datetime;
    private _transactions?;
    private _receivedAttestations?;
    private _issuedAttestations?;
    constructor(attestor: IAttestor);
    /**
     * The (company) name of the attestor
     * @return string
     */
    get name(): string;
    /**
     * The icon respresentation of this attestor
     * @return string
     */
    get icon(): string;
    /**
     * The public key for this attestor
     * @return string
     */
    get pubKey(): string;
    /**
     * The date/time when this attestor
     * was added to the (local) storage
     * @return Date
     */
    get datetime(): Date;
    /**
     * Transactions made by this attestor
   