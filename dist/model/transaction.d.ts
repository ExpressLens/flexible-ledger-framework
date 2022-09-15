import { IAttestation, Attestation } from './attestation';
export interface ITransaction {
    uuid?: string;
    attestorPubKey: string;
    datetime: Date | string;
    attest: IAttestation[];
    revoke: IAttestation[];
    verifyRequest: IAttestation[];
    state?: string;
    error?: string;
}
/**
 * A Transaction is a way of recording data
 * transfers. The holder can either receive
 * or send data from/to other parties.
 * It is possible to send and receive data
 * in one transaction. In that case, attest
 * and verifyRequest are both filled.
 */
export declare class Transaction {
    private readonly _uuid;
    private readonly _attestorPubKey;
    private readonly _datetime;
    private readonly _attest;
    private readonly _revoke;
    private readonly _verifyRequest;
    private readonly _state?;
    private readonly _error?;
    constructor(transaction: ITransaction);
    /**
     * The uuid of the transaction
     * @return string
     */
    get uuid(): string;
    /**
     * The public key or DID from the attestor
     * @return string
   