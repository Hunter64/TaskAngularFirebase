export class TodoModel{
    $key?: string;
    title: string;
    description: string;
    status: boolean;
    creator: string;
    dateCreate: Date;
    modifier?: string;
    dateModify?: Date;
    completed: boolean;
    dateComplete: Date;
}