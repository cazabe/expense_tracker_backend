import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, GetUserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { Public } from 'src/common/decorators/auth.decorator';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Public()
    @Post()
    create(@Body() userDto: CreateUserDto): Promise<string> {
        return this.userService.create(userDto);
    }
    @Public()
    @Get()
    findAll(): Promise<GetUserDto[]> {
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
