export interface  SchoolType {
    schoolName: string;
    // logo: string;
    subHeader: string;
    duration: string;
    desc: string;
    descBullets: Array<string>
}

export interface  WorkType {
    company: string;
    role: string;
    // companylogo: string;
    date: string;
    desc: string;
    stack: Array<string>;
    descBullets?: Array<string> | any;
}

export interface BlogType {
    url: string;
    title: string;
    description: string;
}
