import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateUnitTestModule } from './create-unit-test/create-unit-test.module';

@Module({
  imports: [CreateUnitTestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
