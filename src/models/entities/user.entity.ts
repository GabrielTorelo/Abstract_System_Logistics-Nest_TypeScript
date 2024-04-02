import { BaseEntity } from "..";

export interface UserEntity extends BaseEntity {
  username: string;
  password: string;
  email: string;
}