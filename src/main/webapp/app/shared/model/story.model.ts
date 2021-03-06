import { ISprint } from 'app/shared/model/sprint.model';
import { IStudent } from 'app/shared/model/student.model';
import { IReview } from 'app/shared/model/review.model';

export interface IStory {
    id?: number;
    code?: string;
    name?: string;
    description?: string;
    status?: string;
    sprint?: ISprint;
    students?: IStudent[];
    stories?: IReview[];
}

export class Story implements IStory {
    constructor(
        public id?: number,
        public code?: string,
        public name?: string,
        public description?: string,
        public status?: string,
        public sprint?: ISprint,
        public students?: IStudent[],
        public stories?: IReview[]
    ) {}
}
