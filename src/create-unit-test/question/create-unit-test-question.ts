import { Question, QuestionSet} from 'nest-commander';

@QuestionSet({ name: 'create-unit-test-questions' })
export class CreateUnitTestQuestion {
  @Question({
    message: 'Please provide path of file',
    name: 'filePath',
  })
  parseFilePath(val: string) {
    return val;
  }
}
