import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    return await this.userService.checkCredentials(email, password);
  }

  async login(body: { email: string; password: string }) {
    const user = await this.validateUser(body.email, body.password);

    const payload = this.jwtService.sign({
      name: user.name,
      sub: user.id,
      email: user.email,
    });

    return {
      accessToken: payload,
    };
  }
}
