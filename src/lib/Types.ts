import { CoachValidation, RequestValidation } from "./Constants";
import { RequestState, State, UserState } from "@/@types";

export type CoachValidationTypes = typeof CoachValidation;
export type CoachValidationKeys = keyof CoachValidationTypes;

export type RequestValidationTypes = typeof RequestValidation;
export type RequestValidationKeys = keyof RequestValidationTypes;

export type RootState={
  coaches:State,
  requests:RequestState
  users:UserState
}

export const isOfType = <T>(
  varToBeChecked: any,
  propertyToCheckFor: keyof T
): varToBeChecked is T =>
  (varToBeChecked as T)[propertyToCheckFor] !== undefined;
