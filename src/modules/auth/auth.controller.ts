import { Body, Controller, Post } from '@nestjs/common';
import { Public } from '../../common/decorator/public.decorator';
import { AuthService } from './auth.service';

@Controller('api')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @Public()
  async login(@Body() body: { email: string; password: string }) {
    return await this.authService.login(body);
  }
}
