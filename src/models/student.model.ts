import { IsNotEmpty, IsNumber, IsString, MIN, Max, MaxLength, Min } from "class-validator";
import { Gender } from "src/interface/student.interface";

export class StudentModel{
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  readonly rollNumber: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(10)
  readonly class: number;

  @IsNotEmpty()
  @IsString()
  readonly gender: Gender;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(100)
  readonly marks: number;
}