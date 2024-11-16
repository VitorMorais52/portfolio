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

interface ISection {
  title?: string;
  list: IPost[];
}

export interface IPosts {
  highlighted: ISection;
  bestSkills: ISection;
  experiences: ISection;
}
