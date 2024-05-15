import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Admin{
  @Prop({
    required: true,
    unique: true,
    validate: {
      validator: (value) =>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
      message: (props) => `${props.value} is not a valid email address!`,
    },
  })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);