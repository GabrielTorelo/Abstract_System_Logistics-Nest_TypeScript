import { IRepository } from "..";
import { UserEntity } from "@/models";

export default interface IUserRepository extends IRepository<UserEntity, string> {}