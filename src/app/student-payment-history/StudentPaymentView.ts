export class StudentPaymentView {
    static user_id: { userid: string; };
    constructor(
        public pending_payment_id :number,
        public profile_id :number,
        public regn_no :string,
        public first_name :string,
        public middle_name :string,
        public last_name :string,
        public actual_fee_per_month :string,
        public discounted_fees  :number,
        public payment_date :string,
        public pay_amount :number,
        public pay_month_from :string,
        public pay_month_to :string,
        public pay_for_months :number,
        public transaction_id  :string,
        public teachers_name  :string,
        public status :string,
        public month_year  :string,
        public remarks :string){}
  }
  export * from './StudentPaymentView';