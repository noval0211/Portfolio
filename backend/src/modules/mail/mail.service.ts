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
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: this.configService.get<string>('USER_EMAIL'),
                clientId: this.configService.get<string>('GOOGLE_CLIENT_ID'),
                clientSecret: this.configService.get<string>('GOOGLE_CLIENT_SECRET'),
                refreshToken: this.configService.get<string>('GOOGLE_REFRESH_TOKEN'),
            },
        })
    }

    async sendMsg(mailDto: MailDto) {
        try {
            const info = await this.transporter.sendMail({
                from: `"${mailDto.name} - ${mailDto.email}" <${this.configService.get<string>("USER_EMAIL")}>`,
                to: this.configService.get<string>('MAIL_TO'),
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