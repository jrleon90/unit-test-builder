import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class GeminiService {
  private readonly geminiAPIKey = '';
  private genAI;
  private model;
  constructor() {
    this.genAI = new GoogleGenerativeAI(this.geminiAPIKey);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  }

  async getPromptResponse(fileContent: string) {
    try {
      console.log('Requesting GEMINI info');
      const prompt = `Having this content as context: ${fileContent}. Create a set of unit tests that will cover the scenarios described by the file content, avoid to include any comments and mark the response as typescript code, I just need the pure text`;
      const result = await this.model.generateContent(prompt);
      console.log('Got results');
      return result.response.text();
    } catch (err) {
      console.error('ERROR REQUESTING GEMINIL: ', err);
    }
  }
}
