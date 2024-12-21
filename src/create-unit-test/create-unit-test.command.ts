import { Command, CommandRunner, InquirerService } from 'nest-commander';
import { FileReaderService } from '@src/create-unit-test/file-reader/file-reader.service';
import { GeminiService } from '@src/create-unit-test/gemini/gemini.service';

@Command({
  name: 'create-unit-test',
  description: 'Create Unit tests giving a file',
  options: { isDefault: true },
})
export class CreateUnitTestCommand extends CommandRunner {
  constructor(
    private readonly inquirerService: InquirerService,
    private readonly fileReaderService: FileReaderService,
    private readonly geminiService: GeminiService,
  ) {
    super();
  }
  async run(inputs: string[], options) {
    console.log('Start project');
    options = await this.inquirerService.ask(
      'create-unit-test-questions',
      options,
    );
    console.log('Questions asked: ', options);
    const fileContent = await this.fileReaderService.readFile(options.filePath);
    const unitTestResponse =
      await this.geminiService.getPromptResponse(fileContent);
    this.fileReaderService.writeFile(
      unitTestResponse,
      '/Users/joseleon/Documents/Projects/AI_Project/unit-test-builder/testFiles/UnitTestFile.ts',
    );
  }
}
