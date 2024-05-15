import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminModel } from 'src/models/admin.model';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService){}

  @Post('signup')
  @UsePipes(new ValidationPipe({ transform: true }))
  async userSignUp(@Body() signupUser: AdminModel){

  }

  @Post('login')
  @UsePipes(new ValidationPipe({ transform: true }))
  async userLogin(@Body() loginUser: AdminModel){

  }
}
