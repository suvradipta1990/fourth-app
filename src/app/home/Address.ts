export class Address {

    constructor(
        public profile_id:number,
        public address_id:number,
        public address_type:string,
        public adddress_line_1:string,
        public adddress_line_2:string,
        public district:string,
        public city:string,
        public country:string,
        public pincode:number){}
  }
  export * from './Address';