export class PaymentSummary {
    static user_id: { userid: string; };
    constructor(
        public payment_id:number,
        public profile_id:number,
        public payment_date:string,
        public pay_amount:string,
        public pay_month_from:string,
        public pay_month_to:String){}
  }
  export * from './PaymentSummary';