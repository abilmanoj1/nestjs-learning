import { PartialType } from "@nestjs/mapped-types";
import { StudentModel } from "./student.model";

export class UpdateStudentModel extends PartialType(StudentModel){}