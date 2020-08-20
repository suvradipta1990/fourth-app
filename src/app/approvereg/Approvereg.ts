export class Approvereg {
    static user_id: { userid: string; };
    constructor(
        public id :number,
        public firstname :string,
        public lastname :string,
        public mobilenumber :string,
        public emailid :string,
        public password :string,
        public dateofbirth :string,
        public dateofjoinning :string,
        public created_date :string,
        public created_by :string,
        public updated_date :string,
        public updated_by :string,
        public is_deleted :boolean,
        public old_regn_no :string,
        public regn_no :string,
        public status :string){}
  }
  export * from './Approvereg';