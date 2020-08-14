export class User {
  constructor(
    public user_id: number,
    public username: string,
    public password: string,
    public  is_admin: boolean,
    public  created_date: string,
    public  created_by: number,
    public updated_date: string,
    public updated_by: number,
    public  is_deleted: boolean){}
}
export * from './user';