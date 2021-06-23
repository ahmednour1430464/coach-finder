import { AreaOfExpertise } from "./Enums";
export const CoachValidation = {
  firstName: {
    val: "",
    isValid: true,
    errorMgs:'First Name shouldn\'t be empty.'
  },
  lastName: {
    val: "",
    isValid: true,
    errorMgs:'Last Name shouldn\'t be empty.'
  },
  description: {
    val: "",
    isValid: true,
    errorMgs:'Description shouldn\'t be empty.'
  },
  rate: {
    val: '',
    isValid: true,
    errorMgs:'Rate shouldn\'t be empty and shouldn\'t be less than zero.'
  },
  areas: {
    val: Array<AreaOfExpertise | undefined>(),
    isValid: true,
    errorMgs:'Area Of Expertise should be one or more of [ backend , frontend , career].'
  },
};

export const RequestValidation={
  email:{
    val:'',
    isValid:true,
    errorMsg:'You should use a valid email.'
  },
  message:{
    val:'',
    isValid:true,
    errorMsg:'Your message shouldn\'t be empty' 
  }
}
