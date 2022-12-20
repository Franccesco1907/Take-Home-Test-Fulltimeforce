import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';

export const module: any = Test.createTestingModule({
  imports: [AppModule],
});

export const test = (): Promise<TestingModule> => module.compile();