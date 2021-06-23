import { AreaOfExpertise } from "./Enums";
import { ICoach, IValidCoach } from "./Interfaces";
export class Coach implements ICoach {
  id?: string;
  firstName!: string;
  lastName!: string;
  areas?: AreaOfExpertise[];
  description!: string;
  hourlyRate?: number;
  constructor(coach: ICoach) {
    this.id = coach.id;
    this.areas = coach.areas;
    this.firstName = coach.firstName;
    this.lastName = coach.lastName;
    this.description = coach.description;
    this.hourlyRate = coach.hourlyRate;
  }
}

export class CoachValidation implements IValidCoach {
  
  constructor(
      public _coach:Coach,
      public firstName:{
          val:string,
          isValid:boolean
      },
      public lastName:{
          val:string,
          isValid:boolean
      },
      public description:{
          val:string,
          isValid:boolean
      },
      public rate:{
          val:0,
          isValid:boolean
      },
      public areas:{
          val:[],
          isValid:boolean
      },
      ) {
   this.firstName.val=''
   this.firstName.isValid=true
   this.lastName.val=''
   this.description.isValid=true
   this.description.val=''
   this.rate.isValid=true
   this.rate.val=0 
   this.areas.isValid=true
   this.areas.val=[]
    this._coach=new Coach({
        id:'12',
        firstName:this.firstName.val,
        lastName:this.lastName.val,
        description:this.description.val,
        hourlyRate:this.rate.val,
        areas:this.areas.val
    })
  }
}
