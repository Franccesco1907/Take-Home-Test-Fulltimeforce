import { Test, TestingModule } from '@nestjs/testing';
import { CommitService } from '../src/services/commit.service';
import { CommitController } from '../src/controllers/commit/commit.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { test } from './jest.test.config';
import { mock } from './mocks/commits';

describe('CommitController', () => {
  let commitscontroller: CommitController;
  let commitService: CommitService;

  beforeAll(async () => {
    const module = await test();
    commitService = module.get<CommitService>(CommitService);
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommitController],
      providers: [CommitService, ConfigService, ConfigModule],
    }).compile();
    commitService = module.get<CommitService>(CommitService);
    commitscontroller = module.get<CommitController>(CommitController);
  });

  describe('getCommits', () => {
    it('should return an array of GitHub Commits', async () => {
      let result = await commitscontroller.getCommits();
      expect(result).toEqual(mock);
    });
  });
});
