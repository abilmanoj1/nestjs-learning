
import { Document } from "mongoose";

export enum Gender{
  MALE = 'Male',
  FEMALE = 'Female'
}

export interface IStudent extends Document{
  readonly name: string;
  readonly rollNumber: number;
  readonly class: number;
  readonly gender: Gender;
  readonly marks: number;
}