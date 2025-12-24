import { Building2, Home, Ruler, Users, HardHat, PaintBucket } from "lucide-react";

export interface Service {
  title: string;
  slug: string;
  description: string;
  details: string; // Markdown or long text for the individual page
  features?: string[];
  icon: any; 
}

export const services: Service[] = [
  {
    title: "General Construction",
    slug: "general-construction",
    description: "End-to-end management of residential and commercial construction projects with strict quality control.",
    details: `Our General Construction service offers a comprehensive approach to building. We handle every aspect of the project, from site preparation and foundation work to the final touches. Our team ensures that every stage meets rigorous quality standards.

We specialize in:
- New building construction
- Site management and safety
- Subcontractor coordination
- Material sourcing and quality assurance

With years of experience, we guarantee that your project will be completed on time, within budget, and to the highest standards of safety and workmanship.`,
    features: ["Project Planning", "Site Management", "Quality Control", "Safety Compliance"],
    icon: HardHat,
  },
  {
    title: "Renovation & Remodeling",
    slug: "renovation-remodeling",
    description: "Transforming existing spaces to meet modern standards, functionality, and aesthetics.",
    details: `Breathe new life into your property with our Renovation & Remodeling services. whether you're looking to modernize a kitchen, update an office layout, or restore a historic building, we have the expertise to make it happen.

Our process involves:
- Structural assessment
- Interior and exterior redesign
- Upgrading utilities (electrical, plumbing, HVAC)
- High-quality finishing

We work closely with you to minimize disruption during the renovation process while maximizing the value and appeal of your property.`,
    features: ["Interior Design", "Structural Reinforcement", "Utility Upgrades", "Space Optimization"],
    icon: PaintBucket,
  },
  {
    title: "Architectural Planning",
    slug: "architectural-planning",
    description: "Detailed blueprints, 3D modeling, and structural design services ensuring code compliance.",
    details: `Great buildings start with a great plan. Our Architectural Planning service provides the roadmap for your project. We combine aesthetic vision with practical engineering to create designs that are beautiful, safe, and buildable.

Services include:
- Conceptual design and sketches
- Detailed architectural blueprints
- 3D modeling and rendering
- Structural engineering and load analysis
- Permit acquisition and code compliance

We ensure that every design is optimized for cost-efficiency without compromising on style or structural integrity.`,
    features: ["3D Visualization", "Blueprint Creation", "Structural Engineering", "Permit Assistance"],
    icon: Ruler,
  },
  {
    title: "Consultation & Estimation",
    slug: "consultation-estimation",
    description: "Expert advice on project feasibility, budgeting, material selection, and timeline planning.",
    details: `Making informed decisions is crucial for any construction project. Our Consultation & Estimation service gives you the clarity you need before breaking ground.

We provide:
- Feasibility studies and site analysis
- Accurate cost estimation and budgeting
- Material selection advice
- Project timeline development

Our goal is to help you avoid costly mistakes and ensure that your project is viable from the start.`,
    features: ["Cost Analysis", "Feasibility Studies", "Material Consulting", "Timeline Planning"],
    icon: Users,
  },
  {
    title: "Commercial Build",
    slug: "commercial-build",
    description: "Specialized construction for office buildings, retail spaces, and industrial facilities.",
    details: `We understand the unique demands of commercial construction. From strict deadlines to specific zoning requirements, our Commercial Build service is designed to support your business goals.

We build:
- Office complexes and high-rises
- Retail stores and shopping centers
- Warehouses and industrial plants
- Hospitality and healthcare facilities

We focus on durability, functionality, and creating spaces that enhance your business operations and brand image.`,
    features: ["Office Complexes", "Retail Spaces", "Industrial Facilities", "Hotels & Restaurants"],
    icon: Building2,
  },
  {
    title: "Residential Development",
    slug: "residential-development",
    description: "Custom home building and housing complex development tailored to client vision.",
    details: `Your home is your sanctuary. Our Residential Development service focuses on bringing your unique vision to life. Whether it's a single custom home or a multi-unit housing development, we deliver comfort and quality.

What we offer:
- Custom home design and build
- Multi-family housing developments
- Sustainable and eco-friendly building options
- Smart home integration

We prioritize craftsmanship and attention to detail to create homes that are as durable as they are beautiful.`,
    features: ["Custom Homes", "Housing Complexes", "Sustainable Building", "Smart Home Ready"],
    icon: Home,
  },
];
