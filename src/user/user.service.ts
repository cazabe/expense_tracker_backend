import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
     
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}
    async create(user: CreateUserDto): Promise<string> {
        try {
            user.status = 'A';
            const hashedPassword = await bcrypt.hash(user.password, 10);
            user.password = hashedPassword;
            this.usersRepository.save(user);
            return 'User created'
        } catch (error) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
         
    }

    // async findAll(user: CreateUserDto): Promise<CreateUserDto> {
    //     try {
    //     await 
    //     } catch (error) {
            
    //     }
    // }

    // async findOne(user: CreateUserDto): Promise<CreateUserDto> {
    //     return this.users.find(user => user.username === username);
    //   }
}
