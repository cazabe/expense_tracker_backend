import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }
    @Post()
    create(@Body() userDto: CreateUserDto) {
        try {
            return this.userService.create(userDto);
        } catch (error) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
    }

    @Get()
     findAll(): Promise<CreateUserDto[]> {
        return this.userService.findAll();
    }

    @Get(':username')
    findOne(@Param('username') userName: string) {
        return this.userService.findOne(userName);
    }
    

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} user`;
    }
}
