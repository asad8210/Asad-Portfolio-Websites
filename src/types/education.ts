export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  courses: string[];
  certifications: string[]; // Added certifications array
  virtualInternshipExperience: {  // Added virtualInternshipExperience object
    paid: string[];  // Paid internships
    unpaid: string[]; // Unpaid internships
  };
}
