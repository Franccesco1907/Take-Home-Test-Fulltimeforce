import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStartedMessage(): string {
    return 'Welcome to Github Commit History App!';
  }
}
