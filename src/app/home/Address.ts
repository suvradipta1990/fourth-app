export class Address {

    constructor(
        public profile_id:number,
        public address_id:number,
        public address_type:string,
        public adddress_line_1:string,
        public adddress_line_2:string,
        public district:String,
        public city:String,
        public country:String,
        public pincode:number){}
  }
  export * from './Address';