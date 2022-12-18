import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { CommitService } from '../services/commit.service';

@Controller('commit')
export class CommitController {
  constructor(private commitService: CommitService) {}

  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  getCommits(): any {
    return this.commitService.getAll();
  }
}
