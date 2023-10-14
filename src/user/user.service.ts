import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    create(user: CreateUserDto) {
        return user
    }

    findAll(user: CreateUserDto): CreateUserDto {
        return user
    }
}
