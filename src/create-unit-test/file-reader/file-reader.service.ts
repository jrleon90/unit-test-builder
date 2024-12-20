import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class FileReaderService {
  async readFile(filePath: string) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    console.log('FILE CONTENT', fileContent);
    return fileContent;
  }
}