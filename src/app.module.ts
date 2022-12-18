import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CommitController } from './commit/commit.controller';
import { CommitService } from './services/commit.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, CommitController],
  providers: [AppService, CommitService],
})
export class AppModule {}
