export class Audition {
    constructor(
        public audiotn_id :number,
        public audition_name :string,
        public audition_date :Date,
        public reg_start_date :Date,
        public reg_end_date :Date,
        public reg_fee :number,
        public subject :string,
        public created_date :Date,
        public created_by :number,
        public updated_date :Date,
        public updated_by :number,
        public is_deleted :boolean){}
  }
  export * from './Audition';