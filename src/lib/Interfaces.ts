import { AreaOfExpertise, Role } from "./Enums";

export interface IAreaOfExpertise<T> {
  frontend: T;
  backend: T;
  career: T;
}


export interface ICoach {
  id?: string;
  firstName: string;
  lastName: string;
  areas?: Array<AreaOfExpertise>;
  description: string;
  hourlyRate?: number;
}

export interface IUser{
  id?:string,
  email?:string
  coach?:ICoach
}

export interface IRequest{
  id?:string;
  senderId:string;
  receiverId:string
  email?:string;
  message:string;
}

export interface IValidCoach {
    firstName: {
      val: string;
      isValid: boolean;
    };
    lastName: {
      val: string;
      isValid: boolean;
    };
    description: {
      val: string;
      isValid: boolean;
    };
    areas:{
      val:Array<AreaOfExpertise>,
      isValid:boolean,
    },
    rate: {
      val: number;
      isValid: boolean;
    };
}



