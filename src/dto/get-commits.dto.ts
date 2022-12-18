import { IsString, IsNotEmpty, IsUrl } from 'class-validator';
import { Author } from 'src/interfaces/author.interface';
import { Commit } from 'src/interfaces/commit.interface';
import { Parent } from 'src/interfaces/parent.interface';

export class GetCommitsDto {
  @IsString()
  @IsNotEmpty()
  sha: string;

  @IsString()
  @IsNotEmpty()
  node_id: string;

  @IsNotEmpty()
  commit: Commit;

  @IsNotEmpty()
  @IsUrl()
  url: string;

  @IsNotEmpty()
  @IsUrl()
  html_url: string;

  @IsNotEmpty()
  @IsUrl()
  comments_url: string;

  @IsNotEmpty()
  author: Author;

  @IsNotEmpty()
  committer: Author;

  @IsNotEmpty()
  parents: Parent[];
}