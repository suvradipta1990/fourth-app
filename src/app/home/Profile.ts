export class Profile {
    static user_id: { userid: string; };
    constructor(
        public profile_id:number,
        public regn_no:string,
        public reg_no_old:string,
        public student_photo:string,
        public first_name:string,
        public middle_name:String,
        public last_name:String,
        public date_of_birth:String,
        public age:number,
        public fees: number,
        public discounted_fees: number,
        public mobile_number:String,
        public contact_number:String,
        public fathers_name:String,
        public fathers_conact_number:String,
        public mothers_name:String,
        public mothers_number:String,
        public created_date:String,
        public created_by:String,
        public updated_date:Date,
        public updated_by: number,
        public is_deleted:boolean,
        public user_id:number,
        public email:String,
        public DOJ:String,
        public is_student: boolean){}
  }
  export * from './Profile';