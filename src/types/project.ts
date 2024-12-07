export interface ProjectLink {
  demo: string;
  github: string;
}

export interface SubProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: ProjectLink;
}

export interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  subProjects: SubProject[];
}