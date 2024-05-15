import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class AdminModel {
  @IsEmail()
  @IsString()
  @MaxLength(254)
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @MaxLength(32)
  @IsNotEmpty()s
  password: string;
}