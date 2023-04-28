export interface Organization{
    name:string;
    description:string;
    number_of_students:number;
}

export interface Profile{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    faculty: string;
    course: number;
    organization: string;
}

export interface LastNews {
   title: string;
   description: string;
   pub_date: Date;
}

export interface Event {
    title: string;
    description: string;
    pub_date: Date;
    event_date: Date;
}

