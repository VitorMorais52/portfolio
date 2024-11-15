export interface IPost {
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

export interface IPosts {
  highlighted: IPost[];
  bestSkills: IPost[];
  experiences: IPost[];
}
