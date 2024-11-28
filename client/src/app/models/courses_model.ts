export class Courses {
    constructor(
        public _id: string,
        public course_name: string,
        public duration: string,
        public instructor: string,
        public modules: string,
        public image: string
    ) {}
}