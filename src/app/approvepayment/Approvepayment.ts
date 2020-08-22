export class Approvepayment {
    static user_id: { userid: string; };
    constructor(
        public pending_payment_id :number,
        public profile_id :number,
        public regn_no :string,
        public student_photo :string,
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
        public business_name :string,
        public transaction_id  :string,
        public teachers_name  :string,
        public transaction_slip :string,
        public created_date :string,
        public created_by :string,
        public updated_date :string,
        public updated_by :string,
        public is_deleted :boolean,
        public old_regn_no :string,
        public status :string){}
  }
  export * from './Approvepayment';