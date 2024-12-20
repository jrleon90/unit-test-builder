import { Command, CommandRunner, InquirerService } from 'nest-commander';

@Command({
  name: 'create-unit-test',
  description: 'Create Unit tests giving a file',
  options: { isDefault: true },
})
export class CreateUnitTestCommand extends CommandRunner {
  constructor(private readonly inquirerService: InquirerService) {
    super();
  }
  async run(inputs: string[], options) {
    console.log('Start project');
    options = await this.inquirerService.ask(
      'create-unit-test-questions',
      options,
    );
    console.log(`Your feedback has been created`);
  }
}
