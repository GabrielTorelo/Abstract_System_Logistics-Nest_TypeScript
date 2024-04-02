import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '@/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  public async validateUser(AuthCredentialsDto: AuthCredentialsDto): Promise<any> {
    const foundUser = await this.userModel.findOne({ email: AuthCredentialsDto.email }).exec();

    return foundUser?.password === AuthCredentialsDto.password;
  }

  public registerUser(AuthRegisterDto: AuthRegisterDto): Promise<any> {
    const registeredUser = new this.userModel(AuthRegisterDto);
    registeredUser._id = new ObjectId()._id as unknown as string;

    return registeredUser.save();
  }
}
