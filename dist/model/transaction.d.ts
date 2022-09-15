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
 * and