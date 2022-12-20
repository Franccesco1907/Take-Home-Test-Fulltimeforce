import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CommitController } from './controllers/commit/commit.controller';
import { CommitService } from './services/commit.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        () => ({
          api_url: process.env.GITHUB_API_URL,
          token: process.env.GITHUB_API_TOKEN,
          owner: process.env.GITHUB_OWNER,
        }),
      ],
    }),
  ],
  controllers: [AppController, CommitController],
  providers: [AppService, CommitService],
})
export class AppModule {}
