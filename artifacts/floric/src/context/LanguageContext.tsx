import { createContext, useContext, useState } from "react";

export type Language = "de" | "ru" | "en";

export interface Translations {
  nav: {
    services: string;
    about: string;
    gallery: string;
    contact: string;
    cta: string;
  };
  hero: {
    tag: string;
    langBadge: string;
    h1pre: string;
    h1italic: string;
    h1post: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
  services: {
    tag: string;
    title: string;
    desc: string;
    items: { title: string; desc: string }[];
  };
  about: {
    tag: string;
    title: string;
    titleAccent: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    founderTitle: string;
  };
  gallery: {
    tag: string;
    title: string;
  };
  process: {
    tag: string;
    title: string;
    steps: { num: string; title: string; desc: string }[];
  };
  testimonials: {
    tag: string;
    title: string;
    items: { text: string; author: string; event: string }[];
  };
  contact: {
    tag: string;
    title: string;
    intro: string;
    langLine1: string;
    langLine2: string;
    addressTitle: string;
    contactTitle: string;
    whatsapp: string;
    form: {
      name: string;
      email: string;
      phone: string;
      eventType: string;
      eventTypePlaceholder: string;
      date: string;
      location: string;
      locationLabel: string;
      message: string;
      submit: string;
    };
    successTitle: string;
    successDesc: string;
  };
  footer: {
    desc: string;
    address: string;
    navTitle: string;
    socialTitle: string;
    navLinks: { services: string; about: string; gallery: string; contact: string };
    copyright: string;
    impressum: string;
    datenschutz: string;
  };
}

const de: Translations = {
  nav: {
    services: "Leistungen",
    about: "Über uns",
    gallery: "Galerie",
    contact: "Kontakt",
    cta: "Anfrage senden",
  },
  hero: {
    tag: "Exklusives Eventdesign · Hamm & Umgebung",
    langBadge: "Beratung auf Deutsch, Russisch & Englisch",
    h1pre: "Wir verwandeln Eventhallen in",
    h1italic: "unvergessliche",
    h1post: "Erlebnisse",
    subtitle:
      "Floric steht für atemberaubendes Hochzeitsdesign und luxuriöse Eventdekoration in Hamm und der gesamten Region Westfalen. Wir kreieren emotionale Momente, die für die Ewigkeit bestimmt sind – mit höchstem Anspruch an Perfektion.",
    cta1: "Kostenloses Erstgespräch",
    cta2: "Unsere Leistungen",
  },
  services: {
    tag: "Expertise",
    title: "Unsere Leistungen",
    desc: "Von der ersten Skizze bis zur finalen Inszenierung – wir bieten ganzheitliches Eventdesign auf höchstem Niveau. Jedes Detail wird mit größter Sorgfalt orchestriert.",
    items: [
      { title: "Hochzeitsdekoration", desc: "Atemraubende Konzepte für den wichtigsten Tag in Ihrem Leben." },
      { title: "Tischdekoration", desc: "Elegante Arrangements, die Ihre Gäste verzaubern werden." },
      { title: "Licht & Ambiente", desc: "Atmosphärische Beleuchtung für romantische und magische Momente." },
      { title: "Geburtstagsdekoration", desc: "Exklusive Gestaltungen für runde Geburtstage und Meilensteine." },
      { title: "Jubiläen & Familienfeiern", desc: "Stilvoller Rahmen für Ihre bedeutungsvollsten Zusammenkünfte." },
      { title: "Verlobungen", desc: "Der perfekte, intime Rahmen für die wichtigste Frage." },
      { title: "Bühnen & Hallendekoration", desc: "Monumentale Transformationen großer Eventflächen." },
      { title: "Blumenarrangements", desc: "Floristische Meisterwerke aus den edelsten Blüten." },
      { title: "Individuelle Konzepte", desc: "Maßgeschneiderte Designs, die Ihre persönliche Handschrift tragen." },
    ],
  },
  about: {
    tag: "Die Philosophie",
    title: "Perfektion in jedem",
    titleAccent: "Detail",
    p1: "Floric wurde aus einer tiefen Leidenschaft für Ästhetik und räumliche Harmonie geboren. Als Eventdekoration mit Herz und Sitz in Hamm betreuen wir Hochzeiten, Feiern und besondere Anlässe in der gesamten Region Westfalen – von Dortmund über Soest bis Münster.",
    p2: "Wir arbeiten mit einer fast obsessiven Liebe zum Detail. Von der Auswahl der feinsten Blüten bis zur exakten Positionierung jedes einzelnen Kerzenleuchters überlassen wir nichts dem Zufall. Jede Location in Hamm und Umgebung kennen wir genau – und wissen, wie wir sie in etwas Unvergessliches verwandeln.",
    p3: "Für uns ist Eleganz keine Frage des Budgets, sondern eine Philosophie der Reduktion auf das Wesentliche und der absoluten Hingabe an die Schönheit des Moments.",
    p4: "Wir beraten Sie persönlich und herzlich – auf Deutsch, Russisch und Englisch. So können wir sicherstellen, dass jeder Wunsch wirklich verstanden und perfekt umgesetzt wird.",
    founderTitle: "Gründerin & Geschäftsführerin",
  },
  gallery: {
    tag: "Portfolio",
    title: "Unsere Arbeiten",
  },
  process: {
    tag: "Der Weg zur Perfektion",
    title: "Unser Ablauf",
    steps: [
      { num: "01", title: "Erstgespräch", desc: "Wir lernen Ihre Vision, Ihre Wünsche und die Location kennen." },
      { num: "02", title: "Planung & Konzept", desc: "Erstellung eines maßgeschneiderten Designkonzepts und Moodboards." },
      { num: "03", title: "Individuelle Gestaltung", desc: "Auswahl der feinsten Materialien, Blumen und Dekorationselemente." },
      { num: "04", title: "Aufbau & Dekoration", desc: "Präzise und termingerechte Umsetzung in der Eventlocation." },
      { num: "05", title: "Perfekte Umsetzung", desc: "Ihr Moment der Magie – makellos bis ins letzte Detail." },
    ],
  },
  testimonials: {
    tag: "Referenzen",
    title: "Stimmen unserer Kunden",
    items: [
      {
        text: "Floric hat unsere kühnsten Träume übertroffen. Als wir den Saal betraten, stockte uns der Atem. Die Blumenarrangements und das Lichtkonzept waren pure Magie.",
        author: "Elena & Maximilian",
        event: "Hochzeit in Hamm",
      },
      {
        text: "Eine absolut professionelle und stressfreie Zusammenarbeit. Das Team versteht es meisterhaft, Eleganz und Emotionen in Räumen spürbar zu machen.",
        author: "Dr. Sophie von Berg",
        event: "Jubiläumsgala Westfalen",
      },
      {
        text: "Ihre Liebe zum Detail ist unvergleichlich. Jeder Tisch, jede Ecke des Raumes war ein Kunstwerk für sich. Unsere Gäste schwärmen noch heute von der Dekoration.",
        author: "Julia & Thomas",
        event: "Hochzeit in Dortmund",
      },
    ],
  },
  contact: {
    tag: "Kontakt",
    title: "Lassen Sie uns sprechen",
    intro: "Jedes großartige Event beginnt mit einer Vision. Kontaktieren Sie uns für ein unverbindliches Erstgespräch – wir freuen uns auf Sie.",
    langLine1: "Wir beraten auf Deutsch, Russisch & Englisch",
    langLine2: "Persönliche Beratung in allen drei Sprachen",
    addressTitle: "Adresse",
    contactTitle: "Kontakt",
    whatsapp: "WhatsApp Chat",
    form: {
      name: "Vollständiger Name *",
      email: "E-Mail Adresse *",
      phone: "Telefonnummer *",
      eventType: "Art des Events *",
      eventTypePlaceholder: "z.B. Hochzeit, Jubiläum",
      date: "Datum *",
      location: "Location (falls bekannt) *",
      locationLabel: "Location (falls bekannt) *",
      message: "Ihre Vision / Nachricht *",
      submit: "Anfrage verbindlich absenden",
    },
    successTitle: "Anfrage erfolgreich gesendet",
    successDesc: "Wir werden uns in Kürze bei Ihnen melden.",
  },
  footer: {
    desc: "Exklusive Eventdekoration und atemberaubendes Hochzeitsdesign. Wir kreieren Räume, die Geschichten erzählen und Emotionen wecken.",
    address: "Papenweg 28 · 59071 Hamm · Deutschland",
    navTitle: "Navigation",
    socialTitle: "Social",
    navLinks: { services: "Leistungen", about: "Über uns", gallery: "Galerie", contact: "Kontakt" },
    copyright: `© ${new Date().getFullYear()} Floric Event Design · Olga Dück. Alle Rechte vorbehalten.`,
    impressum: "Impressum",
    datenschutz: "Datenschutz",
  },
};

const ru: Translations = {
  nav: {
    services: "Услуги",
    about: "О нас",
    gallery: "Галерея",
    contact: "Контакт",
    cta: "Отправить запрос",
  },
  hero: {
    tag: "Эксклюзивный дизайн · Хамм и окрестности",
    langBadge: "Консультация на русском, немецком и английском языке",
    h1pre: "Мы превращаем залы в",
    h1italic: "незабываемые",
    h1post: "моменты",
    subtitle:
      "Floric — это захватывающий свадебный дизайн и роскошное оформление мероприятий в Хамме и регионе Вестфалия. Мы создаём эмоциональные моменты, которые останутся навечно — с высочайшими требованиями к совершенству.",
    cta1: "Бесплатная консультация",
    cta2: "Наши услуги",
  },
  services: {
    tag: "Экспертиза",
    title: "Наши услуги",
    desc: "От первого эскиза до финального воплощения — мы предлагаем комплексный event-дизайн высочайшего уровня. Каждая деталь оркеструется с максимальной тщательностью.",
    items: [
      { title: "Свадебная декорация", desc: "Захватывающие концепции для самого важного дня в вашей жизни." },
      { title: "Сервировка столов", desc: "Элегантные композиции, которые очаруют ваших гостей." },
      { title: "Свет и атмосфера", desc: "Атмосферное освещение для романтических и волшебных моментов." },
      { title: "Декор ко Дню рождения", desc: "Эксклюзивное оформление юбилеев и знаменательных дат." },
      { title: "Юбилеи и семейные торжества", desc: "Стильное оформление для самых значимых встреч." },
      { title: "Помолвки", desc: "Идеальная, интимная обстановка для самого важного вопроса." },
      { title: "Декор залов и сцен", desc: "Монументальные трансформации больших event-площадей." },
      { title: "Цветочные аранжировки", desc: "Флористические шедевры из самых изысканных цветов." },
      { title: "Индивидуальные концепции", desc: "Дизайн, созданный специально под ваш неповторимый стиль." },
    ],
  },
  about: {
    tag: "Наша философия",
    title: "Совершенство в каждой",
    titleAccent: "детали",
    p1: "Floric родился из глубокой страсти к эстетике и пространственной гармонии. Как декораторы мероприятий с душой и офисом в Хамме, мы обслуживаем свадьбы, торжества и особые события по всему региону Вестфалия — от Дортмунда до Зоста и Мюнстера.",
    p2: "Мы работаем с почти маниакальным вниманием к деталям. От выбора лучших цветов до точного расположения каждого подсвечника — ничто не остаётся на волю случая. Каждую площадку в Хамме и окрестностях мы знаем досконально — и умеем превратить её в нечто незабываемое.",
    p3: "Для нас элегантность — не вопрос бюджета, а философия сведения к главному и абсолютной преданности красоте момента.",
    p4: "Мы консультируем вас лично и с душой — на русском, немецком и английском языке. Так мы гарантируем, что каждое желание будет по-настоящему понято и идеально воплощено.",
    founderTitle: "Основатель и генеральный директор",
  },
  gallery: {
    tag: "Портфолио",
    title: "Наши работы",
  },
  process: {
    tag: "Путь к совершенству",
    title: "Наш процесс",
    steps: [
      { num: "01", title: "Первая встреча", desc: "Знакомимся с вашим видением, пожеланиями и площадкой." },
      { num: "02", title: "Планирование и концепция", desc: "Разработка индивидуального дизайн-концепта и мудборда." },
      { num: "03", title: "Индивидуальное оформление", desc: "Подбор лучших материалов, цветов и декоративных элементов." },
      { num: "04", title: "Монтаж и декорирование", desc: "Точная и своевременная реализация в месте проведения мероприятия." },
      { num: "05", title: "Безупречное воплощение", desc: "Ваш волшебный момент — безупречный до последней детали." },
    ],
  },
  testimonials: {
    tag: "Отзывы",
    title: "Слова наших клиентов",
    items: [
      {
        text: "Floric превзошёл наши самые смелые мечты. Когда мы вошли в зал, у нас перехватило дыхание. Цветочные композиции и световая концепция — это была настоящая магия.",
        author: "Елена и Максимилиан",
        event: "Свадьба в Хамме",
      },
      {
        text: "Абсолютно профессиональное и беззаботное сотрудничество. Команда мастерски умеет наполнять пространство элегантностью и эмоциями.",
        author: "Д-р Зофия фон Берг",
        event: "Юбилейный гала-вечер",
      },
      {
        text: "Их внимание к деталям несравнимо ни с чем. Каждый стол, каждый уголок зала был произведением искусства. Наши гости до сих пор восхищаются декорацией.",
        author: "Юлия и Томас",
        event: "Свадьба в Дортмунде",
      },
    ],
  },
  contact: {
    tag: "Контакт",
    title: "Давайте поговорим",
    intro: "Любое замечательное мероприятие начинается с идеи. Свяжитесь с нами для бесплатной первой консультации — мы рады вас видеть.",
    langLine1: "Мы консультируем на русском, немецком и английском",
    langLine2: "Beratung auf Deutsch verfügbar · English available",
    addressTitle: "Адрес",
    contactTitle: "Контакт",
    whatsapp: "WhatsApp Чат",
    form: {
      name: "Полное имя *",
      email: "Адрес эл. почты *",
      phone: "Номер телефона *",
      eventType: "Тип мероприятия *",
      eventTypePlaceholder: "Например: свадьба, юбилей",
      date: "Дата *",
      location: "Площадка (если известна) *",
      locationLabel: "Площадка (если известна) *",
      message: "Ваше пожелание / сообщение *",
      submit: "Отправить запрос",
    },
    successTitle: "Запрос успешно отправлен",
    successDesc: "Мы свяжемся с вами в ближайшее время.",
  },
  footer: {
    desc: "Эксклюзивное оформление мероприятий и захватывающий свадебный дизайн. Мы создаём пространства, которые рассказывают истории и пробуждают эмоции.",
    address: "Papenweg 28 · 59071 Hamm · Deutschland",
    navTitle: "Навигация",
    socialTitle: "Соцсети",
    navLinks: { services: "Услуги", about: "О нас", gallery: "Галерея", contact: "Контакт" },
    copyright: `© ${new Date().getFullYear()} Floric Event Design · Олга Дюк. Все права защищены.`,
    impressum: "Импрессум",
    datenschutz: "Конфиденциальность",
  },
};

const en: Translations = {
  nav: {
    services: "Services",
    about: "About",
    gallery: "Gallery",
    contact: "Contact",
    cta: "Send Enquiry",
  },
  hero: {
    tag: "Exclusive Event Design · Hamm & Region",
    langBadge: "Consultation in German, Russian & English",
    h1pre: "We transform event halls into",
    h1italic: "unforgettable",
    h1post: "experiences",
    subtitle:
      "Floric stands for breathtaking wedding design and luxury event decoration in Hamm and the Westphalia region. We create emotional moments destined to last forever – with the highest standards of perfection.",
    cta1: "Free Consultation",
    cta2: "Our Services",
  },
  services: {
    tag: "Expertise",
    title: "Our Services",
    desc: "From the first sketch to the final staging – we offer holistic event design at the highest level. Every detail is orchestrated with the utmost care.",
    items: [
      { title: "Wedding Decoration", desc: "Breathtaking concepts for the most important day of your life." },
      { title: "Table Decoration", desc: "Elegant arrangements that will enchant your guests." },
      { title: "Light & Ambiance", desc: "Atmospheric lighting for romantic and magical moments." },
      { title: "Birthday Decoration", desc: "Exclusive designs for milestone birthdays and special occasions." },
      { title: "Anniversaries & Family Celebrations", desc: "A stylish setting for your most meaningful gatherings." },
      { title: "Engagements", desc: "The perfect, intimate setting for the most important question." },
      { title: "Stage & Hall Decoration", desc: "Monumental transformations of large event spaces." },
      { title: "Floral Arrangements", desc: "Floral masterpieces crafted from the finest blooms." },
      { title: "Individual Concepts", desc: "Bespoke designs that carry your personal signature." },
    ],
  },
  about: {
    tag: "Our Philosophy",
    title: "Perfection in every",
    titleAccent: "detail",
    p1: "Floric was born from a deep passion for aesthetics and spatial harmony. As an event decoration studio with heart, based in Hamm, we serve weddings, celebrations and special occasions throughout the Westphalia region – from Dortmund to Soest and Münster.",
    p2: "We work with an almost obsessive love of detail. From selecting the finest blooms to the exact positioning of every single candelabra, we leave nothing to chance. We know every venue in Hamm and the surrounding area intimately – and know how to transform them into something unforgettable.",
    p3: "For us, elegance is not a matter of budget, but a philosophy of reduction to the essential and absolute devotion to the beauty of the moment.",
    p4: "We consult you personally and warmly – in German, Russian and English. This ensures that every wish is truly understood and perfectly realised.",
    founderTitle: "Founder & CEO",
  },
  gallery: {
    tag: "Portfolio",
    title: "Our Work",
  },
  process: {
    tag: "The Path to Perfection",
    title: "Our Process",
    steps: [
      { num: "01", title: "Consultation", desc: "We get to know your vision, wishes and the venue." },
      { num: "02", title: "Planning & Concept", desc: "Creation of a bespoke design concept and moodboard." },
      { num: "03", title: "Individual Design", desc: "Selection of the finest materials, flowers and decorative elements." },
      { num: "04", title: "Setup & Decoration", desc: "Precise and on-time execution at the event venue." },
      { num: "05", title: "Perfect Execution", desc: "Your moment of magic – flawless down to the last detail." },
    ],
  },
  testimonials: {
    tag: "Testimonials",
    title: "Words from our clients",
    items: [
      {
        text: "Floric exceeded our wildest dreams. When we entered the hall, we were left breathless. The floral arrangements and the lighting concept were pure magic.",
        author: "Elena & Maximilian",
        event: "Wedding in Hamm",
      },
      {
        text: "An absolutely professional and stress-free collaboration. The team masterfully creates spaces that radiate elegance and emotion.",
        author: "Dr. Sophie von Berg",
        event: "Anniversary Gala Westphalia",
      },
      {
        text: "Their attention to detail is incomparable. Every table, every corner of the room was a work of art. Our guests still rave about the decoration.",
        author: "Julia & Thomas",
        event: "Wedding in Dortmund",
      },
    ],
  },
  contact: {
    tag: "Contact",
    title: "Let's talk",
    intro: "Every great event begins with a vision. Contact us for a no-obligation consultation – we look forward to hearing from you.",
    langLine1: "We consult in German, Russian & English",
    langLine2: "Personal consultation available in all three languages",
    addressTitle: "Address",
    contactTitle: "Contact",
    whatsapp: "WhatsApp Chat",
    form: {
      name: "Full Name *",
      email: "Email Address *",
      phone: "Phone Number *",
      eventType: "Type of Event *",
      eventTypePlaceholder: "e.g. Wedding, Anniversary",
      date: "Date *",
      location: "Venue (if known) *",
      locationLabel: "Venue (if known) *",
      message: "Your Vision / Message *",
      submit: "Submit Enquiry",
    },
    successTitle: "Enquiry sent successfully",
    successDesc: "We will get back to you shortly.",
  },
  footer: {
    desc: "Exclusive event decoration and breathtaking wedding design. We create spaces that tell stories and stir emotions.",
    address: "Papenweg 28 · 59071 Hamm · Germany",
    navTitle: "Navigation",
    socialTitle: "Social",
    navLinks: { services: "Services", about: "About", gallery: "Gallery", contact: "Contact" },
    copyright: `© ${new Date().getFullYear()} Floric Event Design · Olga Dück. All rights reserved.`,
    impressum: "Imprint",
    datenschutz: "Privacy Policy",
  },
};

export const translations: Record<Language, Translations> = { de, ru, en };

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "de",
  setLang: () => {},
  t: de,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("de");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
