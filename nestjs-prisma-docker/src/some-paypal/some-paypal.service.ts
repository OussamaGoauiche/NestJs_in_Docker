/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { InjectPaypal, InjectPaypalClient } from 'nestjs-paypal-payouts';

@Injectable()
export class SomePaypalService {
   private readonly logger = new Logger(SomePaypalService.name)
    constructor(
    @InjectPaypalClient()
    private readonly paypalClient,
    @InjectPaypal()
    private readonly paypal,
  ) {}
 
async payout() {
  this.logger.log('payment received');
  const request =new this.paypal.payouts.PayoutsPostRequest();
 
  request.requestBody({
    sender_batch_header: {
      recipient_type: "EMAIL",
      email_message: "SDK payouts test txn",
      note: "Enjoy your Payout!!",
      //il doit unique
      sender_batch_id: "Test_sdk_5",
      email_subject: "This is a test transaction from SDK"
    },
    items: [{
      note: "Your 5$ Payout!",
      amount: {
        currency: "USD",
        value: "15.00"
      },
      //sandbox distination d'argent
      receiver: "sb-gg5op18078444@business.example.com",
      sender_item_id: "Test_txn_1"
    }]
  });
 
  const response = await this.paypalClient.execute(request);
  console.log(`Response: ${JSON.stringify(response)}`);
  // If call returns body in response, you can get the deserialized version from the result attribute of the response.
  console.log(`Payouts Create Response: ${JSON.stringify(response.result)}`);
}
}
