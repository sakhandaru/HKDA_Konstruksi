import { Building2, Home, Ruler, Users, HardHat, PaintBucket } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: any; // Using any for Lucide icon component type simplicity in this context
}

export const services = [
  {
    title: "General Construction",
    description: "End-to-end management of residential and commercial construction projects with strict quality control.",
    icon: HardHat,
  },
  {
    title: "Renovation & Remodeling",
    description: "Transforming existing spaces to meet modern standards, functionality, and aesthetics.",
    icon: PaintBucket,
  },
  {
    title: "Architectural Planning",
    description: "Detailed blueprints, 3D modeling, and structural design services ensuring code compliance.",
    icon: Ruler,
  },
  {
    title: "Consultation & Estimation",
    description: "Expert advice on project feasibility, budgeting, material selection, and timeline planning.",
    icon: Users,
  },
  {
    title: "Commercial Build",
    description: "Specialized construction for office buildings, retail spaces, and industrial facilities.",
    icon: Building2,
  },
  {
    title: "Residential Development",
    description: "Custom home building and housing complex development tailored to client vision.",
    icon: Home,
  },
];
