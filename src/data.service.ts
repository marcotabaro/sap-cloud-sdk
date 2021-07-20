import { Injectable } from '@nestjs/common';
import { IotService } from './iot.service';

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
