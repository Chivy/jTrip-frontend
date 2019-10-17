export class Register {

    constructor(
        public email: string,
        public name: string,
        public surname: string,
        public password: string, 
        public matchingPassword: string
    ) { }

}