import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { CommitService } from '../../services/commit.service';

@Controller('commit')
export class CommitController {
  constructor(private commitService: CommitService) {}

  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  getCommits() {
    try {
      return this.commitService.getAll();
    } catch (error) {
      throw new Error(`The following error has occurred: ${error}`);
    }
  }

  @Get('filter')
  getOne() {
    try {
      return this.commitService.getAll();
    } catch (error) {
      throw new Error(`The following error has occurred: ${error}`);
    }
  }
}
