export class Users {
    constructor(
        public _id: string,
        public name: string,
        public fathersurname: string,
        public mothersurname: string,
        public role: string,
        public creditcard: string,
        public nip: string,
        public email: string,
        public password: string,
        public expiration_date: string
    ){}
}