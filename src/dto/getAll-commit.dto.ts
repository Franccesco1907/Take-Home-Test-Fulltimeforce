import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateFooDto {
  @IsString()
  @IsNotEmpty()
  sha: string;

  @IsString()
  @IsNotEmpty()
  node_id: string;

  @IsNotEmpty()
  commit: any;

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
  author: any;

  @IsNotEmpty()
  committer: any;

  @IsNotEmpty()
  parents: any[];
}