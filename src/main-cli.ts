import { CommandFactory } from 'nest-commander';
import { CreateUnitTestModule } from '@src/create-unit-test/create-unit-test.module';

async function bootstrap() {
  await CommandFactory.run(CreateUnitTestModule, ['warn', 'error']);
}

bootstrap();
