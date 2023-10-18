import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto, GetUserDto } from './dto/user.dto';
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

    async findAll(): Promise<CreateUserDto[]> {
        try {
        const users = await this.usersRepository.find();
        return users;
        } catch (error) {
            throw new HttpException('INVALID TOKEN', HttpStatus.BAD_REQUEST);
        }
    }

    async findOne(userName: string): Promise<CreateUserDto> {
        try {
            const user = await this.usersRepository.findOne({where:{
                userName:userName
            }});
            return user;
        } catch (error) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
        
      }
}
