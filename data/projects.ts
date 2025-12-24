export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  description: string;
  completionDate: string;
  image: string; // Placeholder for now
}

export const projects: Project[] = [
  {
    slug: "modern-office-tower",
    title: "Modern Office Tower",
    category: "Commercial",
    location: "Jakarta CBD",
    description: "A 30-story sustainable office building with state-of-the-art facilities.",
    completionDate: "2024",
    image: "/placeholder-project-1.jpg",
  },
  {
    slug: "luxury-residence-bali",
    title: "Luxury Residence Bali",
    category: "Residential",
    location: "Ubud, Bali",
    description: "Eco-friendly luxury villa complex integrated with nature.",
    completionDate: "2023",
    image: "/placeholder-project-2.jpg",
  },
  {
    slug: "industrial-warehouse",
    title: "Industrial Warehouse",
    category: "Industrial",
    location: "Cikarang",
    description: "Large scale logistics center with automated systems.",
    completionDate: "2024",
    image: "/placeholder-project-3.jpg",
  },
];
