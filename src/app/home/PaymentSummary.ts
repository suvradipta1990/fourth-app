export class PaymentSummary {
    static user_id: { userid: string; };
    constructor(
        public payment_id:number,
        public profile_id:number,
        public regn_no:string,
        public reg_no_old:string,
        public first_name:string,
        public middle_name:string,
        public last_name:string,
        public fees:string,
        public discounted_fees:string,
        public mobile_number:string,
        public email:string,
        public payment_date:string,
        public pay_amount:string,
        public pay_month_from:Date,
        public pay_month_to:Date,
        public payment_duration:string,
        public fees_payble_per_month:string,
        public actual_fees_per_month:string,
        public duration:string,
        public payment_due_for:string,
        public total_amount_due:number,
        public month:string,
        public year:number,
        public day:number,
        public month_year :string,
        public total_amount_paid :number){}
  }
  export * from './PaymentSummary';