export interface Organization{
    id: number;
    name:string;
    description:string;
    number_of_students:number;
}

export interface Profile{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    faculty: string;
    course: number;
    organization: string;
}

export interface LastNews {
    id: number;
   title: string;
   description: string;
   pub_date: Date;
}

export interface Event {
    id: number;
    title: string;
    description: string;
    pub_date: Date;
    event_date: Date;
}

export interface Goverment{
    id:number;
    description:string;
}

