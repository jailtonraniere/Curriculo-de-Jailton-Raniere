
export interface Project {
  id: string;
  name: string;
  description: string;
  impactArea: string;
  solutionType: string;
  imageUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  description: string;
  tasks: string[];
}

export interface Education {
  degree: string;
  institution: string;
  details?: string;
}
