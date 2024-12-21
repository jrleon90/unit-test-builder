import { Question, QuestionSet} from 'nest-commander';
console.log('QUESTION SET');
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
