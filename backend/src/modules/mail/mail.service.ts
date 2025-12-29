import { Injectable, NotFoundException } from "@nestjs/common";
import { MailDto } from "./dto/mail.dto";
import * as nodemailer from 'nodemailer'
import { ConfigService } from "@nestjs/config";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { google } from "googleapis";

@Injectable()
export class MailService {
    private transporter: nodemailer.Transporter;

    constructor(private configService: ConfigService) { }

    async initTransporter() {
        const oAuth2Client = new google.auth.OAuth2(
            this.configService.get('GOOGLE_CLIENT_ID'),
            this.configService.get('GOOGLE_CLIENT_SECRET'),
            this.configService.get('BASE_URL'),
        );
        oAuth2Client.setCredentials({
            refresh_token: this.configService.get('GOOGLE_REFRESH_TOKEN'),
        });
        const accessToken = await oAuth2Client.getAccessToken();

        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                user: this.configService.get('USER_EMAIL'),
                clientId: this.configService.get('GOOGLE_CLIENT_ID'),
                clientSecret: this.configService.get('GOOGLE_CLIENT_SECRET'),
                refreshToken: this.configService.get('GOOGLE_REFRESH_TOKEN'),
                accessToken: accessToken.token,
            },
        } as SMTPTransport.Options);
    }

    async sendMsg(mailDto: MailDto) {
        if (!this.transporter) await this.initTransporter();

        this.transporter
            .sendMail({
                from: `"${mailDto.name} - ${mailDto.email}" <${this.configService.get('USER_EMAIL')}>`,
                to: this.configService.get('MAIL_TO'),
                subject: mailDto.subject,
                text: mailDto.message,
            })
            .catch((err) => console.error('Failed to send email:', err));

        return { message: 'Email request queued' };
    }
}