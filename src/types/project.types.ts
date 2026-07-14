export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}
