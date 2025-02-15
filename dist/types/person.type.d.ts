interface BaseRecord {
    id: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface PersonType extends BaseRecord {
    curp: string;
    lastName: string;
    name: string;
    nss: string;
    rfc: string;
    nationality: string;
}
export {};
