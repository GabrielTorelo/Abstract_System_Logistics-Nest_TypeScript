import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  public async login(@Body() AuthCredentialsDto: AuthCredentialsDto) {
    return this.authService.validateUser(AuthCredentialsDto);
  }

  @Post('register')
  public async register(@Body() AuthRegisterDto: AuthRegisterDto) {
    
    return this.authService.registerUser(AuthRegisterDto);
  }
}