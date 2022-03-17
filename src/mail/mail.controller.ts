import { Controller, Post, Query } from '@nestjs/common';
import { SendgridService } from 'src/sendgrid/sendgrid.service';

@Controller('mail')
export class MailController {
	constructor(private readonly sendgridService: SendgridService){

	}

	@Post('send-email')
	async sendEmail(@Query('email') email){
		const mail = {
			to: email,
			subject: 'Hello from sendgrid',
			from: 'antonio.silva@ampliato.com.br',
			text: 'Hello',
      html: '<h1>Hello</h1>',
		};

		return await this.sendgridService.send(mail)
	}
}
