import { IsEmail, IsNotEmpty, IsString, Matches, MinLength } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthCredentialsDto {
  @IsEmail({message: "Email is not valid"})
  @MinLength(16, {message: "Email he must be at least 16 characters long"})
  @IsString({message: "Is not a valid email"})
  @IsNotEmpty({message: "Email is required"})
  @ApiProperty()
  email: string;

  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/, {
    message: 'Password too weak. Must contain at least one uppercase letter, one lowercase letter, one number and one special character.',
  })
  @MinLength(14, {message: "Password he must be at least 14 characters long"})
  @IsString({message: "Is not a valid password"})
  @IsNotEmpty({message: "Password is required"})
  @ApiProperty()
  password: string;
}