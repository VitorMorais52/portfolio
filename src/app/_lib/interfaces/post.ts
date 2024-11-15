export interface Post {
  title: string;
  subtitle?: string;
  author: string;
  icon: string;
  date: Date;
  highlighted?: boolean;
  emphasis?: boolean;
  paragraphs: string[];
  readingMinutes: number;
}

export type Posts = Post[];
