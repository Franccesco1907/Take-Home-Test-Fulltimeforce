import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { Axios } from 'axios';
import { GithubCommit } from 'src/interfaces/github-commit.interface';

@Injectable()
export class CommitService {
  private readonly _http: Axios;
  private readonly _repo: string;
  private readonly _owner: string;

  constructor(private configService: ConfigService) {
    const api_url = this.configService.get<string>('GITHUB_API_URL');
    const repo = this.configService.get<string>('GITHUB_REPO');
    const token = this.configService.get<string>('GITHUB_API_TOKEN');
    const owner = this.configService.get<string>('GITHUB_OWNER');
    if (api_url == undefined) {
      throw new Error('GITHUB_API_URL not found!');
    }

    if (repo == undefined) {
      throw new Error('GITHUB_REPO not found!');
    }

    if (token == undefined) {
      throw new Error('GITHUB_API_TOKEN not found!');
    }

    if (owner == undefined) {
      throw new Error('GITHUB_OWNER not found!');
    }

    this._owner = owner;
    this._repo = repo;

    this._http = axios.create({
      baseURL: api_url,
      headers: {
        Authorization: token,
      },
    });
  }

  async getAll(): Promise<GithubCommit[]> {
    try {
      const response = await this._http.get(
        `/repos/${this._owner}/${this._repo}/commits`,
      );
      const data: GithubCommit[] = response.data;
      return data;
    } catch (error) {
      console.error(`The following error has occurred: ${error}`);
      throw new NotFoundException(`${error}`);
    }
  }

  async getByMessage(message): Promise<GithubCommit[]> {
    try {
      const response = await this._http.get(
        `/repos/${this._owner}/${this._repo}/commits`,
      );
      const data = response.data;
      return data.filter((commit) => commit.commit.message.match(message));
    } catch (error) {
      console.error(`The following error has occurred: ${error}`);
      throw new NotFoundException(`${error}`);
    }
  }
}
