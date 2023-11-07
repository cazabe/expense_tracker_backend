import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Public } from 'src/common/decorators/auth.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  signIn(@Body() signInDto: AuthDto) {
    return this.authService.signIn(signInDto.userName, signInDto.password);
  }
}
