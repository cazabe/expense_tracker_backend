import { Injectable, UnauthorizedException  } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';



@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}
    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(username);
        const passCheck = await bcrypt.compare(pass, user.password)        
        if (!passCheck) {
          throw new UnauthorizedException();
        }
        const { password, ...result } = user;
        const payload = { id: result.id, username: result.userName };
    return {
      access_token: await this.jwtService.signAsync(payload),
      payload:payload
    };
      }
}
