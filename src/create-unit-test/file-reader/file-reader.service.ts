import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class FileReaderService {
  async readFile(filePath: string) {
    try {
      console.log('READING FILE', filePath);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      console.log('FILE CONTENT', fileContent);
      return fileContent;
    } catch (err) {
      console.error('ERROR READING FILE', err);
    }
  }

  async writeFile(fileContent: string, filePath: string) {
    try {
      console.log('CREATING FILE');
      fs.writeFileSync(filePath, fileContent);
      console.log('FILE CREATED');
    } catch (err) {
      console.error('ERROR WRITING FILE ', err);
    }
  }
}
