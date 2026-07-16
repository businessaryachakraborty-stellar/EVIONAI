export interface WaitlistFormInput {
  name: string;
  email: string;
  phone: string;
  college: string;
  branch: string;
  year: string;
  preferredRole: string;
}

export interface Testimonial {
  id: string;
  name: string;
  college: string;
  role: string;
  avatar: string;
  text: string;
  placedAt?: string;
  salaryText?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  isPopular: boolean;
  color: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  status: "completed" | "active" | "upcoming";
}
