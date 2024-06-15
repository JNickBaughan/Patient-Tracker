export type PatientSlim = {
    id: number;
    firstName: string;
    lastName: string;
    photoUrl?: string;
    age: number;
}

export type PatientStats = {
    date: string;
    heartRate: number;
    diastolic: number;
    systolic: number;
}

export type PatientDetails = PatientSlim & {
    // TODO - add fields for the details page
    stats: PatientStats[];
}