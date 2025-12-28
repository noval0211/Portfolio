import { Body, Controller, Post, UseInterceptors } from "@nestjs/common";
import { MailService } from "./mail.service";
import { MailDto } from "./dto/mail.dto";
import { AnyFilesInterceptor } from "@nestjs/platform-express";
@Controller('email')
export class MailController {
    constructor(private emailService: MailService){}

    @Post('send')
    @UseInterceptors(AnyFilesInterceptor())
    async sendMail(@Body() mailDto: MailDto) {        
        const result = await this.emailService.sendMsg(mailDto);
        return { message: 'Email Sent', result}
    }
}