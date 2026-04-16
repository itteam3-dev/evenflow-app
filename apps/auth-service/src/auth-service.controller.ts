import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import { LoginDto, RegisterDto } from '@app/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthServiceController {
  constructor(private readonly authServiceService: AuthServiceService) {}

  @Post('register')
  async register(@Body() body: RegisterDto) {
    return this.authServiceService.register(
      body.email,
      body.password,
      body.name,
    );
  }

  @Post('login')
  async login(@Body() body: LoginDto) {
    return this.authServiceService.login(body.email, body.password);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async getProfile(@Req() req: { user: { userId: string } }) {
    return this.authServiceService.getProfile(req.user.userId);
  }
}
