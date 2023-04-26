export interface Organization{
    name:string;
    description:string;
    number_of_students:number;
}

export interface Profile{
    firstName: string;
    lastName: string;
    eMail: string;
    password: string;
    faculty: string;
    course: number;
    organization: string;
}