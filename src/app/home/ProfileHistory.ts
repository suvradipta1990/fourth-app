export class ProfileHistory {
    static user_id: { userid: string; };
    constructor(
        public history_id:number,
        public profile_id:number,
        public teachers_name:string,
        public practise_from:string,
        public practise_till:string,
        public period_of_practice:string,
        public is_lalitkala_teacher:boolean,
        public created_date:string,
        public created_by:string,
        public updated_date:Date,
        public updated_by: number,
        public is_deleted:boolean){}
  }
  export * from './ProfileHistory';