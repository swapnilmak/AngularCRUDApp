import { Address } from './address';

export class Employee {

    constructor(
        public id : number,
        public name : string,
        public age : number,
        public address : Address
    ){}
}
