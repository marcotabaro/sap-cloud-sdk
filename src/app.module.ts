import { Module } from '@nestjs/common';
import { DataController } from './data.controller';
import { DataService } from './data.service';
import { IotService } from './iot.service';

@Module({
  imports: [],
  controllers: [DataController],
  providers: [DataService, IotService],
})
export class AppModule {}
