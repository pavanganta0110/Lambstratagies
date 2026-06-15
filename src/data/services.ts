export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tagline: string;
  iconName: "Cpu" | "Settings" | "TrendingUp" | "Brain" | "Users" | "Globe";
}

export const servicesData: ServiceItem[] = [
  {
    id: "product-development",
    title: "Product Development",
    description: "With a focus on efficiency and innovation, we help businesses transform ideas into tangible solutions. Our product development services streamline your product lifecycle from ideation to market entry. We leverage industry insights, current technology, and best practices to deliver results that resonate with your target audience.",
    tagline: "Your business is the product.",
    iconName: "Cpu"
  },
  {
    id: "internal-systems-engineering",
    title: "Internal Systems Engineering",
    description: "We specialize in internal systems engineering to streamline and optimize business processes. We provide guidance on CRMs, email marketing campaigns, website functionality, workflow systems, and office operations to elevate your operational framework.",
    tagline: "Components in perfect harmony.",
    iconName: "Settings"
  },
  {
    id: "innovative-growth-solutions",
    title: "Innovative Growth Solutions",
    description: "Experience the power of innovative solutions through expert consulting, creative problem-solving, and collaborative strategy workshops. Using tools like the Business Model Canvas, we help identify transformation opportunities that create measurable results.",
    tagline: "Let’s redefine your future together.",
    iconName: "TrendingUp"
  },
  {
    id: "ai-powered-operating-system",
    title: "AI-Powered Operating System",
    description: "Our patented AI-powered decentralized learning information system and communication solution helps businesses and organizations use AI to improve communication, knowledge sharing, and operational efficiency.",
    tagline: "OneRoom OS: Information & Communication Re-imagined.",
    iconName: "Brain"
  },
  {
    id: "user-research-ux-design",
    title: "User Research + UX Design",
    description: "We help you understand your customers’ real needs and design user-friendly digital experiences. From research to wireframes to experience strategy, we shape solutions that solve user challenges and improve customer satisfaction.",
    tagline: "It starts with people. It ends with people.",
    iconName: "Users"
  },
  {
    id: "mobile-web-development",
    title: "Mobile + Web Development",
    description: "We design, redesign, and optimize websites and mobile applications that are accessible, engaging, and built around real user needs. Whether you need a sleek website or functional application, we help you stand out.",
    tagline: "Stand out from the competition.",
    iconName: "Globe"
  }
];

export const strategicOpsTags = [
  "Product Development",
  "Product Management",
  "Go-to-Market Strategy",
  "User Research",
  "Competitor Analysis",
  "UX Audits",
  "Content Audits",
  "Brand Strategy",
  "IP Strategy",
  "Business Models",
  "Financial Projections",
  "Pitching",
  "Fundraising",
  "Networking",
  "Marketing Strategy",
  "Project Management",
  "CRM Systems",
  "Email Campaigns",
  "Website Optimization"
];
