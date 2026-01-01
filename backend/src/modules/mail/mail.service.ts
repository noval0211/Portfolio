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
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                type: "OAuth2",
                user: this.configService.get<string>('USER_EMAIL'),
                clientId: this.configService.get<string>('GOOGLE_CLIENT_ID'),
                clientSecret: this.configService.get<string>('GOOGLE_CLIENT_SECRET'),
                refreshToken: this.configService.get<string>('GOOGLE_REFRESH_TOKEN'),
            },
            connectionTimeout: 60000,
            greetingTimeout: 30000,
            socketTimeout: 300000,
        })

        this.transporter.verify((error, success) => {
            if (error) {
                console.error('SMTP connection failed:', error);
            } else {
                console.log('SMTP connection successful!');
            }
        });
    }

    async sendMsg(mailDto: MailDto) {
        await this.transporter.sendMail({
            from: `"${mailDto.name} - ${mailDto.email}" <${this.configService.get<string>("USER_EMAIL")}>`,
            to: this.configService.get<string>('SMTP_USER'),
            subject: mailDto.subject,
            text: mailDto.message,
        }).then((info) => {
            console.log("Message sent: %s", info.messageId);
            // Get a URL to preview the message in Ethereal's web interface
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        })

    }
}