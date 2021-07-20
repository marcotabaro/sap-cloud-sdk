import { Injectable } from '@nestjs/common';
import { IotService } from './iot.service';


// const router = new Router();

@Injectable()
export class DataService {
  constructor(private readonly iotService: IotService) {}
  getHello(): string {
    return 'Hello World!';
  }

  postData(data): { status: string; message: string } {
    const res = { status: 'ok', message: '' };

    //verifica dati validi
    console.log(data);
    if (!data.id) {
      res.status = 'error';
      res.message = 'missing id';
      return res;
    }
    // this.iotService.faicose()
    return res; //messaggio ok o errore
  }
}

//Da spostare
// var options = {
//   method: 'POST',
//   url: 'https://constep-demo.authentication.eu10.hana.ondemand.com/oauth/token',
//   headers: { 'content-type': 'application/x-www-form-urlencoded' },
//   json: true,
//   form: {
//       grant_type: 'client_credentials',
//       client_id: 'sb-sdk-xsuaa!t90176',
//       client_secret: 's0coCSNCS81pTsvmy4R/m5hgkbI='
//   }
// };

// function rawBodyMiddleware() {
//   return json({
//     verify: (request: RequestWithRawBody, response: Response, buffer: Buffer) => {
//       if (request.url === '/webhook' && Buffer.isBuffer(buffer)) {
//         request.rawBody = Buffer.from(buffer);
//       }
//       return true;
//     },
//   })
// }

// async function main() {
//   const webhook = await client.request({
//     url: '/https://constep-demo.authentication.eu10.hana.ondemand.com/oauth/token',
//     client_id: ''

//   })
//}
