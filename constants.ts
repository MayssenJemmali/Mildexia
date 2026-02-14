import { Content, Language } from './types';

export const CONTENT: Record<Language, Content> = {
  fr: {
    hero: {
      title: "Bouclier Préventif Contre le Mildiou",
      subtitle: "Produit phytosanitaire à usage préventif. Formule à base d’extraits végétaux pour renforcer les défenses des cultures.",
      buttons: {
        contact: "Nous contacter",
        learnMore: "Découvrir Mildexia"
      }
    },
    about: {
      title: "Qu'est-ce que Mildexia ?",
      description: "Mildexia est un produit phytosanitaire à usage préventif.",
      description2: "Il contribue à limiter l’apparition des maladies fongiques telles que le mildiou et l’oïdium, tout en soutenant les mécanismes naturels de défense des plantes."
    },
    usage: {
      title: "Mode d'Utilisation",
      cards: {
        dosage: { title: "DOSE", text: "5 kg pour 200 L d’eau" },
        prep: { title: "PRÉPARATION", text: "Dissoudre la poudre dans l’eau avec une agitation suffisante." },
        app: { title: "APPLICATION", text: "Pulvériser uniformément sur les feuilles (dessus et dessous)." }
      }
    },
    crops: {
      title: "Cultures Cibles",
      items: ["Tomate", "Pomme de terre", "Vigne"]
    },
    formulation: {
      title: "Composition Fonctionnelle",
      disclaimer: "Formule développée à partir de matières premières d’origine végétale et minérale.",
      ingredients: [
        "Prêle sèche",
        "Extrait ail",
        "Neem",
        "Huile romarin",
        "Bicarbonate",
        "Argile kaolin",
        "Extrait algues"
      ]
    },
    sustainability: {
      title: "Engagement Agricole Durable",
      points: [
        "Conçu pour accompagner une agriculture responsable.",
        "Sans résidus chimiques persistants.",
        "Compatible avec des pratiques culturales durables."
      ]
    },
    product: {
      title: "Spécifications Techniques",
      specs: [
        "Poudre soluble",
        "Application préventive",
        "Conservation longue durée",
        "Fabrication en Tunisie"
      ],
      packaging: {
        title: "Conditionnements Disponibles",
        options: [
          {
            weight: "5 kg",
            label: "Professionnel",
            description: "Idéal pour les exploitations agricoles et les grandes surfaces de culture."
          },
          {
            weight: "1 kg",
            label: "Petit exploitant",
            description: "Adapté aux petites parcelles et à l'agriculture familiale."
          }
        ]
      }
    },
    cta: {
      title: "Protégez vos cultures dès aujourd’hui.",
      buttons: {
        contact: "Nous contacter",
        demo: "Demander une démonstration",
        distributor: "Devenir distributeur"
      }
    },
    footer: {
      tagline: "Produit phytosanitaire préventif",
      contact: "contact@mildexia.com",
      country: "Tunisie 🇹🇳"
    }
  },
  en: {
    hero: {
      title: "Preventive Shield Against Downy Mildew",
      subtitle: "Preventive phytosanitary solution formulated with plant-derived extracts to strengthen crop resilience.",
      buttons: {
        contact: "Contact Us",
        learnMore: "Discover Mildexia"
      }
    },
    about: {
      title: "What is Mildexia?",
      description: "Mildexia is a preventive phytosanitary solution.",
      description2: "It helps limit the development of fungal diseases such as downy mildew and powdery mildew while supporting plant defense mechanisms."
    },
    usage: {
      title: "Instructions for Use",
      cards: {
        dosage: { title: "DOSAGE", text: "5 kg per 200 L of water" },
        prep: { title: "PREPARATION", text: "Dissolve the powder in water with proper agitation." },
        app: { title: "APPLICATION", text: "Spray evenly on both upper and lower leaf surfaces." }
      }
    },
    crops: {
      title: "Target Crops",
      items: ["Tomato", "Potato", "Vine"]
    },
    formulation: {
      title: "Functional Composition",
      disclaimer: "Formulated from raw materials of plant and mineral origin.",
      ingredients: [
        "Dried Horsetail",
        "Garlic Extract",
        "Neem",
        "Rosemary Oil",
        "Bicarbonate",
        "Kaolin Clay",
        "Seaweed Extract"
      ]
    },
    sustainability: {
      title: "Sustainable Agricultural Commitment",
      points: [
        "Designed to support responsible farming.",
        "No persistent chemical residues.",
        "Compatible with sustainable agricultural practices."
      ]
    },
    product: {
      title: "Technical Specifications",
      specs: [
        "Soluble Powder",
        "Preventive Application",
        "Long-term Storage",
        "Made in Tunisia"
      ],
      packaging: {
        title: "Available Packaging",
        options: [
          {
            weight: "5 kg",
            label: "Professional",
            description: "Ideal for farms and large-scale cultivation."
          },
          {
            weight: "1 kg",
            label: "Smallholder",
            description: "Suited for small plots and family farming."
          }
        ]
      }
    },
    cta: {
      title: "Protect your crops today.",
      buttons: {
        contact: "Contact Us",
        demo: "Request a Demo",
        distributor: "Become a Distributor"
      }
    },
    footer: {
      tagline: "Preventive Phytosanitary Product",
      contact: "contact@mildexia.com",
      country: "Tunisia 🇹🇳"
    }
  },
  ar: {
    hero: {
      title: "درع وقائي ضد العفن الفطري",
      subtitle: "منتج وقائي للصحة النباتية. تركيبة تعتمد على مستخلصات نباتية لتعزيز دفاعات المحاصيل.",
      buttons: {
        contact: "اتصل بنا",
        learnMore: "اكتشف Mildexia"
      }
    },
    about: {
      title: "ما هو Mildexia؟",
      description: "Mildexia هو منتج وقائي للصحة النباتية.",
      description2: "يساهم في الحد من ظهور الأمراض الفطرية مثل العفن الفطري والبياض الدقيقي، مع دعم آليات الدفاع الطبيعية للنباتات."
    },
    usage: {
      title: "طريقة الاستخدام",
      cards: {
        dosage: { title: "الجرعة", text: "5 كجم لكل 200 لتر من الماء" },
        prep: { title: "التحضير", text: "قم بإذابة المسحوق في الماء مع التحريك الكافي." },
        app: { title: "التطبيق", text: "رشه بانتظام على الأوراق (من الأعلى والأسفل)." }
      }
    },
    crops: {
      title: "المحاصيل المستهدفة",
      items: ["طماطم", "بطاطس", "كرمة"]
    },
    formulation: {
      title: "التركيبة الوظيفية",
      disclaimer: "تركيبة مطورة من مواد خام من أصل نباتي ومعدني.",
      ingredients: [
        "ذيل الحصان المجفف",
        "مستخلص الثوم",
        "نيم",
        "زيت إكليل الجبل",
        "بيكربونات",
        "طين الكاولين",
        "مستخلص الطحالب"
      ]
    },
    sustainability: {
      title: "التزام زراعي مستدام",
      points: [
        "مصمم لدعم الزراعة المسؤولة.",
        "بدون بقايا كيميائية دائمة.",
        "متوافق مع الممارسات الزراعية المستدامة."
      ]
    },
    product: {
      title: "المواصفات التقنية",
      specs: [
        "مسحوق قابل للذوبان",
        "تطبيق وقائي",
        "تخزين طويل الأمد",
        "صنع في تونس"
      ],
      packaging: {
        title: "التعبئة المتوفرة",
        options: [
          {
            weight: "5 كجم",
            label: "محترف",
            description: "مثالي للمزارع والمساحات الكبيرة."
          },
          {
            weight: "1 كجم",
            label: "مزارع صغير",
            description: "مناسب لقطع الأراضي الصغيرة والزراعة العائلية."
          }
        ]
      }
    },
    cta: {
      title: "احمِ محاصيلك اليوم.",
      buttons: {
        contact: "اتصل بنا",
        demo: "طلب عرض توضيحي",
        distributor: "كن موزعًا"
      }
    },
    footer: {
      tagline: "منتج وقائي للصحة النباتية",
      contact: "contact@mildexia.com",
      country: "تونس 🇹🇳"
    }
  }
};