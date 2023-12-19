import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    status: string;
}

export class UpdateUserDto {
    name: string;
    username: string;
    password: string;
    status: string;
}

export class GetUserDto {
    id: number;
    name: string;
    username: string;
    password: string;
    status: string;
}