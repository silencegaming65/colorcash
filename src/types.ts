export interface EarningApp {
  id: string;
  name: string;
  description: string;
  bonus: string;
  referralLink: string;
  isHot?: boolean;
  pros: string[];
  cons: string[];
  image: string;
  rating: number;
  commission: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  intro: string;
  tips: { title: string; content: string }[];
  date: string;
  readTime: string;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
