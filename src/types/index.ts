export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  brand?: string;
  partNumber?: string;
  image: string;
  badge?: string;
  rating?: number;
  specs: string[];
  inStock: boolean;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  iconName: string;
  image: string;
  linkText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  photo: string;
  stars: number;
  quote: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}
