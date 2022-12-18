import { CommitAuthor } from "./commit-author.interface";
import { CommitTree } from "./commit-tree.interface";
import { CommitVerification } from "./commit-verification.interface";

export interface Commit {
  author: CommitAuthor;
  committer: CommitAuthor;
  message: string;
  tree: CommitTree;
  url: string;
  comment_count: number;
  verification: CommitVerification;
}
