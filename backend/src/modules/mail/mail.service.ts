import { Injectable, NotFoundException } from "@nestjs/common";
import { MailDto } from "./dto/mail.dto";
import * as nodemailer from 'nodemailer'
import { ConfigService } from "@nestjs/config";
import { SentMessageInfo, Options } from "nodemailer/lib/smtp-transport";

@Injectable()
export class MailService {
    private transporter: nodemailer.Transporter<SentMessageInfo, Options>;

    constructor(private configService: ConfigService) {
        this.transporter = nodemailer.createTransport({
            host: this.configService.get<string>('SMTP_HOST'),
            port: this.configService.get<number>('SMTP_PORT'),
            secure: this.configService.get<boolean>('SMTP_SECURE'),
            auth: {
                user: this.configService.get<string>('SMTP_USER'),
                pass: this.configService.get<string>('SMTP_PASS'),
            },
        })
    }

    async sendMsg(mailDto: MailDto) {
        try {
            const info = await this.transporter.sendMail({
                from: `"${mailDto.name} - ${mailDto.email}" <${this.configService.get<string>("SMTP_USER")}>`,
                to: this.configService.get<string>('SMTP_USER'),
                subject: mailDto.subject,
                text: mailDto.message,
            })
            
            return info
        } catch (err) {
            console.error('Failed to send email:', err);
            throw new NotFoundException('Failed To Send Message')
        }
    }
}