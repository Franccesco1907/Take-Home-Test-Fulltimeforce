import { Test, TestingModule } from '@nestjs/testing';
import { CommitService } from '../src/services/commit.service';
import { CommitController } from '../src/controllers/commit/commit.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { test } from './jest.test.config';
import { getCommitsMock } from './mocks/getCommits';
import { getByMessageMock } from './mocks/getByMessage';
import { GithubCommit } from 'src/interfaces/github-commit.interface';

describe('CommitController', () => {
  let commitsController: CommitController;
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
    commitsController = module.get<CommitController>(CommitController);
  });

  describe('getCommits', () => {
    it('should return an array of GitHub Commits', async () => {
      let result: GithubCommit[] = await commitsController.getCommits();
      result.shift(); // In despite of push a commit, unit test will work, because last commit will be omitted
      expect(result).toEqual(getCommitsMock);
    });
  });

  describe('getByMessage', () => {
    it('should return an array of GitHub Commits by message', async () => {
      let result: GithubCommit[] = await commitsController.getByMessage({message: 'Adding'});
      expect(result).toEqual(getByMessageMock);
    });
  });
});
