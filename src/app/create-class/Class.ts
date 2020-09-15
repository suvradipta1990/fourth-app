export class Class {
    static user_id: { userid: string; };
    constructor(
        public class_id:number,
        public class_name:string,
        public day_of_week:string,
        public start_time:string,
        public end_time:string,
        public teacher_id:string,
        public subject_id:string,
        public teacher_name:string){}
  }
  export * from './Class';