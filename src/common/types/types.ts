export type PatientSlim = {
    id: number;
    firstName: string;
    lastName: string;
    photoUrl?: string;
}

export type PatientDetails = PatientSlim & {
    // TODO - add fields for the details page
}