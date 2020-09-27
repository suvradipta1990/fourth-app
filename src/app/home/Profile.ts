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
        public date_of_birth:string,
        public age:number,
        public fees: number,
        public discounted_fees: number,
        public mobile_number:String,
        public contact_number:String,
        public fathers_name:String,
        public fathers_contact_no:String,
        public mothers_name:String,
        public mothers_contact_no:String,
        public created_date:String,
        public created_by:String,
        public updated_date:Date,
        public updated_by: number,
        public is_deleted:boolean,
        public user_id:number,
        public email:string,
        public DOJ:string,
        public is_student: boolean,
        public father_occupation:string,
        public mother_occupation:string,
        public gender:string,
        public aadhaar_number:string,
        public subject:string,
        public class_id:number,
        public class_name:string){}
  }
  export * from './Profile';