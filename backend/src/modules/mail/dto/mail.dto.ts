import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class MailDto {
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    subject?: string;

    @IsString()
    @IsNotEmpty()
    message: string;
}