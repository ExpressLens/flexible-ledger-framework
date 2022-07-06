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
    private _issuedAtte