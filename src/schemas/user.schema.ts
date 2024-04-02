import { UserEntity } from '@/models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<UserEntity>;

@Schema()
export class User {
  @Prop()
  username: string;
  
  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop()
  _id: string;

  @Prop()
  createdAt: Date;
  
  @Prop()
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);