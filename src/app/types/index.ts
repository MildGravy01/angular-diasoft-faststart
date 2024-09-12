export interface ICourse{
  Id: string;
  Title: string;
  CreationDate: Date | any;
  Duration: number;
  Description: string;
}

export interface IUser{
    Id: string;
    FirstName: string;
    LastName: string;
  }