import { Author } from "./author.interface";
import { Commit } from "./commit.interface";
import { Parent } from "./parent.interface";

export interface GithubCommit {
  sha: string;
  node_id: string;
  commit: Commit;
  url: string;
  html_url: string;
  comments_url: string;
  author: Author;
  committer: Author;
  parents: Parent[];
}
