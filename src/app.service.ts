import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly iotService: IotService){
    public async constructEventFromPayload(signature: string, payload: Buffer) {
      const webhookSecret = this.configService.get('WEBHOOK_SECRET');
      return this.webhooks.constructEvent(
        payload,
        signature,
        webhookSecret
      )
    }

    
  getHello(): string {
    return 'Hello World!';
  }
  postData(): void {
    // this.iotService.faicose()
    return;
  }
}
