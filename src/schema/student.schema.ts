import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Gender } from "src/interface/student.interface";

@Schema()
export class Student{
  @Prop({unique: true})
  rollNumber: number;
  @Prop({
    required: true,
    validate: {
      validator: (value) => /^[a-zA-Z\s]+$/.test(value),
      message: (props) => `${props.value} is not a valid name.`,
    },
  })
  name: string;
  @Prop()
  class: number;
  @Prop()
  gender: Gender;
  @Prop()
  marks: number;
}

export const StudentSchema = SchemaFactory.createForClass(Student);