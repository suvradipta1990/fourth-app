export class Teachers {
    static user_id: { userid: string; };
    constructor(
        public teacher_id:number,
        public teacher_name:string,
        public speciality:string,
        public mobile_no:string,
        public email_id:string,
        public fees:number,
        public subject:string,
        public address_line_1:string,
        public address_line_2:string,
        public city:string,
        public state_name:string,
        public pincode:number,
        public created_date:Date,
        public created_by:number,
        public updated_date:Date,
        public updated_by:number,
        public is_deleted:boolean){}
  }
  export * from './Teachers';