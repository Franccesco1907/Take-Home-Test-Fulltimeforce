import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
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

  @Post('filter')
  getByMessage(@Body() body) {
    try {
      return this.commitService.getByMessage(body.message);
    } catch (error) {
      throw new Error(`The following error has occurred: ${error}`);
    }
  }
}
