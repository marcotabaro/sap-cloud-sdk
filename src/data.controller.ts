import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  getHello(): string {
    return this.dataService.getHello();
  }
  @Post()
  async postData(@Body() data: any) {
    console.log('data:', data);
    if (JSON.stringify(data) === '{}') {
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    }

    //controllo sul passaggio
    const res = this.dataService.postData(data);
    if (res.status === 'error') {
      throw new HttpException(res.message, HttpStatus.BAD_REQUEST);
    }
    return;
  }
}
