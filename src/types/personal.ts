export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  specialization: string;
  year: string;
  university: string;
  description: string;
  skills: string[];
  social: SocialLinks;
}