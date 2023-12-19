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
    ) { }
    async create(user: CreateUserDto): Promise<string> {
        try {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            user.password = hashedPassword;
            this.usersRepository.save(user);
            return 'User created'
        } catch (error) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }

    }

    async findAll(): Promise<GetUserDto[]> {
        try {
            const users = await this.usersRepository.find();
            return users;
        } catch (error) {
            throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);
        }
    }

    async findOne(username: string): Promise<GetUserDto> {
        try {
            const user = await this.usersRepository.findOne({
                where: {
                    username: username
                }
            });
            return user;
        } catch (error) {
            throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);
        }

    }

    async findOneById(userId: number): Promise<GetUserDto> {
        try {
            const user = await this.usersRepository.findOne({
                where: {
                    id: userId
                }
            });
            return user;
        } catch (error) {
            throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);
        }

    }
}
