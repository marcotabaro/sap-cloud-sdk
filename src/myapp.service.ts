import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
 
@Injectable()
export default class StripeService {
  private stripe: Stripe;
 
  constructor(
    private configService: ConfigService
  ) {
    this.stripe = new Stripe(configService.get('STRIPE_SECRET_KEY'), {
      apiVersion: '2020-08-27',
    });
  }
 
  public async constructEventFromPayload(signature: string, payload: Buffer) {
    const webhookSecret = this.configService.get('STRIPE_WEBHOOK_SECRET');
 
    return this.stripe.webhooks.constructEvent(
      payload,
      signature,
      webhookSecret
    );
  }
 
  // ...
}