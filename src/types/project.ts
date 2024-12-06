export interface SubProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

export interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  subProjects: SubProject[];
}