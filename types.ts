export type Language = 'fr' | 'en';

export interface Content {
  hero: {
    title: string;
    subtitle: string;
    buttons: {
      contact: string;
      learnMore: string;
    };
  };
  about: {
    title: string;
    description: string;
    description2: string;
  };
  usage: {
    title: string;
    cards: {
      dosage: { title: string; text: string };
      prep: { title: string; text: string };
      app: { title: string; text: string };
    };
  };
  crops: {
    title: string;
    items: string[];
  };
  formulation: {
    title: string;
    disclaimer: string;
    ingredients: string[];
  };
  sustainability: {
    title: string;
    points: string[];
  };
  product: {
    title: string;
    specs: string[];
    packaging: {
      title: string;
      options: {
        weight: string;
        label: string;
        description: string;
      }[];
    };
  };
  cta: {
    title: string;
    buttons: {
      contact: string;
      demo: string;
      distributor: string;
    };
  };
  footer: {
    tagline: string;
    contact: string;
    country: string;
  };
}