export interface TodoModel{
    key: string;
    title: string;
    description: string;
    isCheked: boolean;
    creator: string;
    dateCreate: Date;
    modifier?: string;
    dateModify?: Date;
}