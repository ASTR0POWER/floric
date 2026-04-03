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
      "Der Tag, an dem alles perfekt sein muss. Wir sorgen dafür, dass er es wird – damit Sie eintreten, innehalten und einfach nur fühlen. Kein Stress. Nur dieser eine, magische Moment.",
    cta1: "Kostenloses Erstgespräch",
    cta2: "Unsere Leistungen",
  },
  services: {
    tag: "Was wir für Sie tun",
    title: "Jeder Moment verdient Magie",
    desc: "Jedes Detail trägt die Geschichte Ihres Moments. Wir hören zu, träumen mit Ihnen – und erschaffen etwas, das noch schöner wird, als Sie es sich je vorgestellt hätten.",
    items: [
      { title: "Hochzeitsdekoration", desc: "Der wichtigste Tag Ihres Lebens verdient mehr als schöne Deko – er verdient einen Raum, der Ihre Liebe sichtbar macht." },
      { title: "Tischdekoration", desc: "Wenn Ihre Gäste die Tische sehen, sollen sie spüren: Hier wurde an alles gedacht. Mit Liebe, nicht mit Listen." },
      { title: "Licht & Ambiente", desc: "Das richtige Licht verwandelt einen Raum in ein Gefühl – und ein Gefühl in eine Erinnerung, die ein Leben lang bleibt." },
      { title: "Geburtstagsdekoration", desc: "Ein runder Geburtstag ist mehr als eine Zahl. Er ist ein Lebenskapitel – und der Raum dazu soll das widerspiegeln." },
      { title: "Jubiläen & Familienfeiern", desc: "Die Menschen, die Ihnen am meisten bedeuten, verdienen einen Abend, den niemand vergisst." },
      { title: "Verlobungen", desc: "Das Ja-Wort beginnt mit einem Moment. Wir schaffen den Rahmen, der ihn unvergesslich macht." },
      { title: "Bühnen & Hallendekoration", desc: "Große Räume brauchen große Ideen. Wir denken in Dimensionen, die andere nicht sehen." },
      { title: "Blumenarrangements", desc: "Jede Blüte, die wir wählen, hat einen Grund. Zusammen erzählen sie Ihre Geschichte." },
      { title: "Individuelle Konzepte", desc: "Ihr Event ist einzigartig. Ihr Design soll es auch sein – maßgeschneidert auf Sie, nicht auf eine Vorlage." },
    ],
  },
  about: {
    tag: "Wer hinter Floric steht",
    title: "Mit ganzer Seele",
    titleAccent: "für Ihren Moment",
    p1: "Mein Name ist Olga. Ich habe Floric gegründet, weil ich selbst weiß, wie viel ein einziger Moment bedeuten kann. Dieses Staunen, wenn man einen Saal betritt und die Worte fehlen – genau das ist es, was ich für Sie erschaffe.",
    p2: "Ich arbeite mit einer fast obsessiven Liebe zum Detail. Jede Blüte hat einen Grund. Jedes Licht erzeugt ein Gefühl. Ich überlasse nichts dem Zufall – denn Ihr Tag verdient keine Kompromisse.",
    p3: "Viele meiner Kundinnen und Kunden sagen mir am Morgen danach: 'Ich hätte nicht gedacht, dass es so sein kann.' Genau dieser Satz treibt mich an. Immer wieder.",
    p4: "Ich spreche Ihr Herz an – auf Deutsch, Russisch oder Englisch. Denn wenn wir über Ihren schönsten Tag reden, soll kein Wort verloren gehen.",
    founderTitle: "Gründerin & Geschäftsführerin",
  },
  gallery: {
    tag: "Einblicke",
    title: "Momente, die bleiben",
  },
  process: {
    tag: "So arbeiten wir",
    title: "Ihr Weg zu einem unvergesslichen Tag",
    steps: [
      { num: "01", title: "Erstgespräch", desc: "Wir hören zu. Vollständig. Wir wollen wissen, was Sie träumen – nicht nur, was Sie planen." },
      { num: "02", title: "Vision & Konzept", desc: "Aus Ihren Worten entstehen Bilder. Wir entwickeln ein Designkonzept, das sich anfühlt wie Sie." },
      { num: "03", title: "Auswahl & Gestaltung", desc: "Jedes Material, jede Blüte, jedes Detail wird bewusst gewählt – damit alles zusammen eine Geschichte erzählt." },
      { num: "04", title: "Aufbau mit Sorgfalt", desc: "Wir sind vor Ort, bis der letzte Kerzenleuchter sitzt. Pünktlich, ruhig, präzise." },
      { num: "05", title: "Ihr Moment", desc: "Sie treten ein. Und dann – dieser Augenblick. Der war es wert." },
    ],
  },
  testimonials: {
    tag: "Was unsere Kunden sagen",
    title: "Worte, die uns berühren",
    items: [
      {
        text: "Als wir in den Saal traten, hat mein Mann geweint – und er weint nie. Was Olga aus unserem Wunsch gemacht hat, übertraf alles, was wir uns je vorstellen konnten. Wir werden diesen Moment nie vergessen.",
        author: "Elena & Maximilian",
        event: "Hochzeit in Hamm",
      },
      {
        text: "Ich habe ihr erzählt, was ich mir vorstelle – manchmal in halben Sätzen, manchmal nur in Gefühlen. Sie hat verstanden. Nicht nur, was ich gesagt habe, sondern was ich gemeint habe. Das ist ein Geschenk.",
        author: "Dr. Sophie von Berg",
        event: "Jubiläumsgala Westfalen",
      },
      {
        text: "Noch Monate später kommen Freunde auf uns zu und fragen: 'Wer hat das gemacht?' Jede Ecke war ein Kunstwerk. Jedes Detail hatte eine Bedeutung. Floric ist mehr als Dekoration – das ist Kunst.",
        author: "Julia & Thomas",
        event: "Hochzeit in Dortmund",
      },
    ],
  },
  contact: {
    tag: "Schreiben Sie uns",
    title: "Ihr schönster Tag beginnt hier",
    intro: "Erzählen Sie mir von Ihrem Traum – von dem Moment, den Sie sich so sehr wünschen. Das erste Gespräch ist kostenlos, unverbindlich und von Herzen. Das Gefühl danach? Unbezahlbar.",
    langLine1: "Beratung auf Deutsch, Russisch & Englisch",
    langLine2: "Persönlich · Herzlich · In Ihrer Sprache",
    addressTitle: "Adresse",
    contactTitle: "Kontakt",
    whatsapp: "WhatsApp Nachricht",
    form: {
      name: "Vollständiger Name *",
      email: "E-Mail Adresse *",
      phone: "Telefonnummer *",
      eventType: "Art des Events *",
      eventTypePlaceholder: "z.B. Hochzeit, Jubiläum",
      date: "Wunschdatum *",
      location: "Location (falls bekannt)",
      locationLabel: "Location (falls bekannt)",
      message: "Erzählen Sie mir von Ihrem Traum *",
      submit: "Anfrage senden – ich freue mich auf Sie",
    },
    successTitle: "Ihre Anfrage ist angekommen",
    successDesc: "Ich melde mich persönlich bei Ihnen – versprochen.",
  },
  footer: {
    desc: "Jeder Moment verdient Magie. Ich erschaffe Räume, die Geschichten erzählen, Herzen berühren und für immer in Erinnerung bleiben.",
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
      "День, когда всё должно быть идеальным. Мы позаботимся о том, чтобы так и было — чтобы вы вошли, замерли и просто почувствовали. Никакого стресса. Только один волшебный момент.",
    cta1: "Бесплатная консультация",
    cta2: "Наши услуги",
  },
  services: {
    tag: "Что мы делаем для вас",
    title: "Каждый момент заслуживает магии",
    desc: "Каждая деталь несёт в себе историю вашего момента. Мы слушаем, мечтаем вместе с вами — и создаём нечто более прекрасное, чем вы когда-либо могли себе представить.",
    items: [
      { title: "Свадебная декорация", desc: "Самый важный день вашей жизни заслуживает большего, чем просто красивый декор — он заслуживает пространства, в котором видна ваша любовь." },
      { title: "Сервировка столов", desc: "Когда ваши гости увидят столы, они должны почувствовать: здесь подумали обо всём. С любовью, а не по списку." },
      { title: "Свет и атмосфера", desc: "Правильный свет превращает пространство в ощущение — а ощущение в воспоминание, которое остаётся на всю жизнь." },
      { title: "Декор ко Дню рождения", desc: "Юбилей — это больше, чем цифра. Это глава жизни, и пространство вокруг должно это отразить." },
      { title: "Юбилеи и семейные торжества", desc: "Люди, которые значат для вас больше всего, заслуживают вечера, который никто не забудет." },
      { title: "Помолвки", desc: "Самое важное «да» начинается с одного момента. Мы создаём рамку, которая делает его незабываемым." },
      { title: "Декор залов и сцен", desc: "Большие пространства требуют больших идей. Мы видим то, что другие не замечают." },
      { title: "Цветочные аранжировки", desc: "Каждый цветок, который мы выбираем, имеет причину. Вместе они рассказывают вашу историю." },
      { title: "Индивидуальные концепции", desc: "Ваше мероприятие уникально. Ваш дизайн тоже должен быть — созданный для вас, а не по шаблону." },
    ],
  },
  about: {
    tag: "Кто стоит за Floric",
    title: "Всей душой",
    titleAccent: "для вашего момента",
    p1: "Меня зовут Ольга. Я основала Floric, потому что сама знаю, как много значит один-единственный момент. То изумление, когда входишь в зал и теряешь дар речи — именно это я создаю для вас.",
    p2: "Я работаю с почти одержимым вниманием к деталям. Каждый цветок — не случайность. Каждый свет — это чувство. Я не оставляю ничего на волю случая, потому что ваш день не терпит компромиссов.",
    p3: "Многие мои клиенты говорят мне на следующее утро: «Я не думала, что так бывает.» Именно эти слова снова и снова двигают меня вперёд.",
    p4: "Я говорю с вашим сердцем — по-русски, по-немецки или по-английски. Потому что когда мы говорим о вашем самом прекрасном дне, ни одно слово не должно потеряться.",
    founderTitle: "Основатель и генеральный директор",
  },
  gallery: {
    tag: "Наши работы",
    title: "Моменты, которые остаются",
  },
  process: {
    tag: "Как мы работаем",
    title: "Ваш путь к незабываемому дню",
    steps: [
      { num: "01", title: "Первая встреча", desc: "Мы слушаем. Полностью. Нам важно знать, о чём вы мечтаете — не только то, что вы планируете." },
      { num: "02", title: "Видение и концепция", desc: "Из ваших слов рождаются образы. Мы создаём дизайн-концепцию, которая звучит как вы." },
      { num: "03", title: "Подбор и создание", desc: "Каждый материал, каждый цветок, каждая деталь — выбраны осознанно, чтобы вместе они рассказывали историю." },
      { num: "04", title: "Монтаж с заботой", desc: "Мы на месте до последнего подсвечника. Вовремя, спокойно, точно." },
      { num: "05", title: "Ваш момент", desc: "Вы входите. И тогда — этот миг. Он того стоил." },
    ],
  },
  testimonials: {
    tag: "Что говорят наши клиенты",
    title: "Слова, которые трогают нас",
    items: [
      {
        text: "Когда мы вошли в зал, муж заплакал — а он никогда не плачет. То, что Ольга сделала из нашей мечты, превзошло всё, что мы могли себе представить. Этот момент мы не забудем никогда.",
        author: "Елена и Максимилиан",
        event: "Свадьба в Хамме",
      },
      {
        text: "Я рассказывала ей о своих пожеланиях — иногда полупредложениями, иногда просто ощущениями. Она поняла. Не только то, что я сказала, но и то, что я имела в виду. Это — дар.",
        author: "Д-р Зофия фон Берг",
        event: "Юбилейный гала-вечер",
      },
      {
        text: "Спустя месяцы друзья до сих пор подходят и спрашивают: «Кто это сделал?» Каждый уголок зала был произведением искусства. Floric — это больше чем декор. Это искусство.",
        author: "Юлия и Томас",
        event: "Свадьба в Дортмунде",
      },
    ],
  },
  contact: {
    tag: "Напишите нам",
    title: "Ваш прекрасный день начинается здесь",
    intro: "Расскажите мне о своей мечте — о том моменте, которого вы так ждёте. Первая консультация бесплатна, ни к чему не обязывает и идёт от сердца. Ощущение после? Бесценно.",
    langLine1: "Консультация на русском, немецком и английском",
    langLine2: "Лично · С душой · На вашем языке",
    addressTitle: "Адрес",
    contactTitle: "Контакт",
    whatsapp: "Написать в WhatsApp",
    form: {
      name: "Полное имя *",
      email: "Адрес эл. почты *",
      phone: "Номер телефона *",
      eventType: "Тип мероприятия *",
      eventTypePlaceholder: "Например: свадьба, юбилей",
      date: "Желаемая дата *",
      location: "Площадка (если известна)",
      locationLabel: "Площадка (если известна)",
      message: "Расскажите мне о своей мечте *",
      submit: "Отправить запрос — я буду рада",
    },
    successTitle: "Ваш запрос получен",
    successDesc: "Я свяжусь с вами лично — обещаю.",
  },
  footer: {
    desc: "Каждый момент заслуживает магии. Я создаю пространства, которые рассказывают истории, трогают сердца и остаются в памяти навсегда.",
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
      "The day when everything needs to be perfect. We make sure it is – so you can walk in, stop for a moment, and simply feel. No stress. Just one magical moment that is entirely yours.",
    cta1: "Free Consultation",
    cta2: "Our Services",
  },
  services: {
    tag: "What we do for you",
    title: "Every moment deserves magic",
    desc: "Every detail carries the story of your moment. We listen, we dream with you – and we create something even more beautiful than you ever imagined possible.",
    items: [
      { title: "Wedding Decoration", desc: "The most important day of your life deserves more than beautiful décor – it deserves a space that makes your love visible." },
      { title: "Table Decoration", desc: "When your guests see the tables, they should feel it: every detail was considered. With love, not with checklists." },
      { title: "Light & Ambiance", desc: "The right light turns a room into a feeling – and a feeling into a memory that stays with you for a lifetime." },
      { title: "Birthday Decoration", desc: "A milestone birthday is more than a number. It's a chapter of life – and the space around it should reflect that." },
      { title: "Anniversaries & Family Celebrations", desc: "The people who mean the most to you deserve an evening nobody will ever forget." },
      { title: "Engagements", desc: "The most important yes starts with one moment. We create the setting that makes it unforgettable." },
      { title: "Stage & Hall Decoration", desc: "Large spaces need bold ideas. We think in dimensions that others simply don't see." },
      { title: "Floral Arrangements", desc: "Every bloom we choose has a reason. Together, they tell your story." },
      { title: "Individual Concepts", desc: "Your event is unique. Your design should be too – made for you, not from a template." },
    ],
  },
  about: {
    tag: "The person behind Floric",
    title: "With all my heart",
    titleAccent: "for your moment",
    p1: "My name is Olga. I founded Floric because I know how much a single moment can mean. That sense of wonder when you walk into a room and words fail you – that is exactly what I create for you.",
    p2: "I work with an almost obsessive love of detail. Every flower has a purpose. Every light creates a feeling. I leave nothing to chance – because your day deserves nothing less than everything.",
    p3: "Many of my clients tell me the morning after: 'I didn't think it could be like this.' Those words are what keep driving me forward. Every single time.",
    p4: "I speak to your heart – in German, Russian or English. Because when we talk about your most beautiful day, not a single word should be lost.",
    founderTitle: "Founder & CEO",
  },
  gallery: {
    tag: "Our work",
    title: "Moments that stay",
  },
  process: {
    tag: "How we work",
    title: "Your journey to an unforgettable day",
    steps: [
      { num: "01", title: "First conversation", desc: "We listen. Fully. We want to know what you dream of – not just what you're planning." },
      { num: "02", title: "Vision & concept", desc: "Your words become images. We develop a design concept that feels like you." },
      { num: "03", title: "Selection & creation", desc: "Every material, every bloom, every detail is chosen with intention – so that together they tell a story." },
      { num: "04", title: "Setup with care", desc: "We're on site until the last candle is in place. On time, calm, and precise." },
      { num: "05", title: "Your moment", desc: "You walk in. And then – that instant. It was worth it." },
    ],
  },
  testimonials: {
    tag: "What our clients say",
    title: "Words that move us",
    items: [
      {
        text: "When we walked into the hall, my husband cried – and he never cries. What Olga made from our dream exceeded everything we could ever have imagined. We will never forget that moment.",
        author: "Elena & Maximilian",
        event: "Wedding in Hamm",
      },
      {
        text: "I told her what I had in mind – sometimes in half-sentences, sometimes just in feelings. She understood. Not just what I said, but what I meant. That is a rare gift.",
        author: "Dr. Sophie von Berg",
        event: "Anniversary Gala Westphalia",
      },
      {
        text: "Months later, friends still come up and ask: 'Who did this?' Every corner was a work of art. Every detail had meaning. Floric is more than decoration – it is art.",
        author: "Julia & Thomas",
        event: "Wedding in Dortmund",
      },
    ],
  },
  contact: {
    tag: "Get in touch",
    title: "Your most beautiful day starts here",
    intro: "Tell me about your dream – about the moment you've been longing for. The first conversation is free, no obligation, and comes from the heart. The feeling afterwards? Priceless.",
    langLine1: "Consultation in German, Russian & English",
    langLine2: "Personal · Warm · In your language",
    addressTitle: "Address",
    contactTitle: "Contact",
    whatsapp: "WhatsApp Message",
    form: {
      name: "Full Name *",
      email: "Email Address *",
      phone: "Phone Number *",
      eventType: "Type of Event *",
      eventTypePlaceholder: "e.g. Wedding, Anniversary",
      date: "Preferred Date *",
      location: "Venue (if known)",
      locationLabel: "Venue (if known)",
      message: "Tell me about your dream *",
      submit: "Send enquiry – I look forward to hearing from you",
    },
    successTitle: "Your enquiry has arrived",
    successDesc: "I will get back to you personally – I promise.",
  },
  footer: {
    desc: "Every moment deserves magic. I create spaces that tell stories, touch hearts and stay in memory forever.",
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
