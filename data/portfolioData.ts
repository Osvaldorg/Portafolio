import {
  PersonalInfo,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  ProjectItem,
  CertificationItem,
  TestCase,
  SecurityMetric,
} from '@/types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Osvaldo Ashley Ramos Guzmán',
  title: 'Full Stack & Mobile Developer',
  subtitle: 'Graduate in Software Development and Management Engineering',
  email: 'ramososvaldo487@gmail.com',
  phone: '+52 449 192 2621',
  location: 'Aguascalientes, Mexico',
  github: 'github.com/Osvaldorg',
  githubUrl: 'https://github.com/Osvaldorg',
  linkedinUrl: 'https://linkedin.com/in/osvaldo-ramos-guzman', // standard placeholder link
  summary: {
    en: 'Graduate in Software Development and Management Engineering with hands-on experience building web and mobile applications, specialized in Full Stack development and Quality Assurance (QA). Expert in building secure authentication flows, REST APIs, databases, real-time communication, and automated Postman testing. Looking to join an innovative engineering team to build scalable, resilient solutions.',
    es: 'Egresado de Ingeniería en Desarrollo y Gestión de Software con experiencia en el desarrollo de aplicaciones web y móviles, enfocado en desarrollo Full Stack y aseguramiento de calidad (QA). Experiencia en autenticación segura, APIs REST, bases de datos, comunicación en tiempo real y pruebas automatizadas con Postman. Busco integrarme a un equipo dinámico para aportar en la construcción de soluciones escalables y de alta calidad.',
  },
  keywords: {
    en: ['full stack', 'mobile', 'QA', 'React Native', 'Next.js'],
    es: ['full stack', 'móvil', 'QA', 'React Native', 'Next.js'],
  },
  highlights: {
    en: [
      'Full Stack & Mobile Development (React Native, Next.js, Node.js)',
      'Quality Assurance & Postman API Automation (>20 bugs identified)',
      'Real-Time Systems (Socket.io, Push Notifications with Firebase FCM)',
      'Database Architecture (PostgreSQL, MongoDB, Prisma ORM)',
      'Cybersecurity Hackathon Winner (4th Place ICP Hub Mexico - AI 911 Prototype)',
      'Bilingual English (EF SET B2) & Spanish (Native)',
    ],
    es: [
      'Desarrollo Full Stack y Móvil (React Native, Next.js, Node.js)',
      'Aseguramiento de Calidad y Pruebas de API con Postman (+20 bugs reportados)',
      'Sistemas en Tiempo Real (Socket.io, Notificaciones Push con Firebase FCM)',
      'Arquitectura de Bases de Datos (PostgreSQL, MongoDB, Prisma ORM)',
      'Ganador 4to Lugar Hackathon Ciberseguridad 2024 (ICP Hub México - IA 911)',
      'Bilingüe Inglés (EF SET B2) y Español (Nativo)',
    ],
  },
  stats: [
    { value: '1+', label: { en: 'Years Exp.', es: 'Años Exp.' } },
    { value: '+20', label: { en: 'Bugs Found', es: 'Bugs Detectados' } },
    { value: '3', label: { en: 'Projects', es: 'Proyectos' } },
    { value: 'B2', label: { en: 'English', es: 'Inglés' } },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: { en: 'Programming Languages', es: 'Lenguajes de Programación' },
    skills: [
      { name: 'TypeScript', level: 'Advanced', highlight: true },
      { name: 'JavaScript (ES6+)', level: 'Advanced', highlight: true },
      { name: 'Java', level: 'Intermediate' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'C++', level: 'Basic/Academic' },
    ],
  },
  {
    title: { en: 'Frontend & Mobile Frameworks', es: 'Frameworks Frontend y Móvil' },
    skills: [
      { name: 'React Native', level: 'Advanced', highlight: true },
      { name: 'Next.js 15 / React 19', level: 'Advanced', highlight: true },
      { name: 'Expo', level: 'Advanced', highlight: true },
      { name: 'Tailwind CSS', level: 'Advanced', highlight: true },
      { name: 'HTML5 & CSS3', level: 'Advanced' },
      { name: 'Zustand / Redux', level: 'Intermediate' },
    ],
  },
  {
    title: { en: 'Backend & Cloud Services', es: 'Backend y Servicios Cloud' },
    skills: [
      { name: 'Node.js', level: 'Advanced', highlight: true },
      { name: 'Express.js', level: 'Advanced', highlight: true },
      { name: 'Prisma ORM', level: 'Advanced', highlight: true },
      { name: 'Firebase (FCM, Auth)', level: 'Advanced', highlight: true },
      { name: 'Socket.io (WebSockets)', level: 'Intermediate', highlight: true },
      { name: 'REST APIs & JWT', level: 'Advanced' },
    ],
  },
  {
    title: { en: 'Databases & Storage', es: 'Bases de Datos y Almacenamiento' },
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', highlight: true },
      { name: 'MongoDB', level: 'Intermediate' },
      { name: 'MySQL', level: 'Intermediate' },
    ],
  },
  {
    title: { en: 'QA, Tools & DevOps', es: 'QA, Herramientas y DevOps' },
    skills: [
      { name: 'Postman (API Testing)', level: 'Expert (QA Specialist)', highlight: true },
      { name: 'Git & GitHub', level: 'Advanced', highlight: true },
      { name: 'Jira & Agile Development', level: 'Intermediate' },
      { name: 'Clerk Auth & Stripe Integration', level: 'Intermediate' },
      { name: 'Zod Data Validation', level: 'Advanced' },
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-0',
    role: { en: 'Full Stack Developer', es: 'Desarrollador Full Stack' },
    company: 'Rental Cars Platform',
    type: { en: 'Freelance / Independent', es: 'Freelance / Independiente' },
    period: 'Jan 2025 – Present',
    location: 'Remote',
    category: 'fullstack',
    techStack: ['Next.js', 'React', 'Tailwind', 'Clerk Auth', 'Prisma', 'PostgreSQL', 'Stripe'],
    bullets: {
      en: [
        'Designed, architected, and deployed a comprehensive premium car rental platform with end-to-end booking capabilities.',
        'Integrated Clerk for secure user authentication and session management.',
        'Implemented Stripe payment gateway with webhooks for real-time transaction processing and confirmation.',
        'Built a relational database architecture using PostgreSQL and Prisma ORM for efficient fleet and reservation management.',
      ],
      es: [
        'Diseño, arquitectura y despliegue de una plataforma premium de renta de autos con sistema completo de reservas.',
        'Integración de Clerk para autenticación segura y gestión de sesiones de usuarios.',
        'Implementación de pasarela de pagos con Stripe y webhooks para procesamiento de transacciones en tiempo real.',
        'Arquitectura de base de datos relacional usando PostgreSQL y Prisma ORM para la gestión de flota y reservaciones.',
      ],
    },
  },
  {
    id: 'exp-1',
    role: { en: 'Mobile Developer', es: 'Desarrollador Móvil' },
    company: 'Condominio Trojes de Kristal',
    type: { en: 'Professional Internship', es: 'Práctica Profesional' },
    period: 'Jan 2026 – Apr 2026',
    location: 'Aguascalientes, Mexico',
    category: 'mobile',
    techStack: ['React Native', 'Expo', 'Firebase FCM', 'JWT Auth', 'QR Codes', 'REST APIs', 'Socket.io', 'Postman'],
    bullets: {
      en: [
        'Full end-to-end development of a cross-platform mobile application for residents using React Native and Expo.',
        'Designed and integrated push notifications for real-time alerts using Firebase Cloud Messaging (FCM).',
        'Implemented secure JWT-based authentication and visitor access control via encrypted QR code scanning.',
        'Collaborated on backend REST API development, schema design, data-structure optimization, and Postman API validation.',
        'Integrated real-time instant chat communication between residents and condominium administration using Socket.io.',
      ],
      es: [
        'Desarrollo completo de aplicación móvil multiplataforma para residentes utilizando React Native y Expo.',
        'Diseño e implementación de notificaciones push para alertas en tiempo real mediante Firebase Cloud Messaging (FCM).',
        'Implementación de autenticación segura con JWT y control de acceso vehicular/peatonal mediante lectura de códigos QR.',
        'Colaboración en el desarrollo de APIs REST, optimización de estructuras de datos y validación de respuestas en Postman.',
        'Integración de chat en tiempo real entre residentes y administración usando Socket.io.',
      ],
    },
  },
  {
    id: 'exp-2',
    role: { en: 'Quality Assurance (QA) Engineer', es: 'Ingeniero de Aseguramiento de Calidad (QA)' },
    company: 'White Lion Procurement',
    type: { en: 'Professional Internship', es: 'Práctica Profesional' },
    period: 'Jun 2024 – Dec 2024',
    location: 'Aguascalientes, Mexico',
    category: 'qa',
    techStack: ['Postman', 'Manual Testing', 'API Testing', 'Jira', 'Bug Tracking', 'Test Case Design'],
    bullets: {
      en: [
        'Executed manual testing and automated API validation using Postman to verify complex system functionality.',
        'Designed, documented, and maintained structured test cases for critical features, identifying and reporting over 20 critical vulnerabilities and software issues.',
        'Verified bug fixes with development teams through regression testing, ensuring optimal product quality before production deployment.',
        'Actively participated in sprint planning and QA sign-off processes.',
      ],
      es: [
        'Ejecución de pruebas manuales y validación de APIs mediante Postman para verificar la funcionalidad integral del sistema.',
        'Diseño, documentación y ejecución de casos de prueba para funcionalidades críticas, identificando y reportando más de 20 incidencias.',
        'Verificación de correcciones de errores en coordinación directa con el equipo de desarrollo mediante pruebas de regresión.',
        'Participación activa en el aseguramiento de calidad antes de pases a producción.',
      ],
    },
  },
];

export const educationData: EducationItem[] = [
  {
    degree: {
      en: 'Engineering in Software Development and Management',
      es: 'Ingeniería en Desarrollo y Gestión de Software',
    },
    institution: 'Universidad Tecnológica de Aguascalientes',
    location: 'Aguascalientes, Mexico',
    period: '2024 – 2026',
  },
  {
    degree: {
      en: 'Associate Degree (TSU) in Multiplatform Software Development',
      es: 'TSU en Desarrollo de Software Multiplataforma',
    },
    institution: 'Universidad Tecnológica de Aguascalientes',
    location: 'Aguascalientes, Mexico',
    period: '2022 – 2024',
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-1',
    title: {
      en: 'Rental Cars Platform',
      es: 'Plataforma Rental Cars',
    },
    category: 'fullstack',
    period: '2025',
    type: { en: 'Full Stack Project', es: 'Proyecto Full Stack' },
    description: {
      en: 'Vehicle fleet management, online reservations, and automated billing with Stripe integration.',
      es: 'Gestión de flota vehicular, reservas en línea y cobros con Stripe.',
    },
    highlights: {
      en: [
        'Secure user authentication with Clerk.',
        'Stripe webhooks for real-time payment confirmation.',
        'PostgreSQL and Prisma ORM for relational data.',
        'Zustand and Zod for state and validation.',
      ],
      es: [
        'Autenticación segura de usuarios con Clerk.',
        'Webhooks de Stripe para pagos en tiempo real.',
        'PostgreSQL y Prisma ORM para base de datos.',
        'Zustand y Zod para estado y validación.',
      ],
    },
    technologies: ['Next.js', 'React', 'Tailwind', 'Clerk', 'Prisma', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com/Osvaldorg',
    liveUrl: 'https://rental-cars-chi.vercel.app/',
    imageUrl: '/images/rental_cars_real.png',
    demoType: 'web-app',
  },
  {
    id: 'proj-2',
    title: {
      en: 'Condominium App',
      es: 'App Condominio',
    },
    category: 'mobile',
    period: '2026',
    type: { en: 'Mobile App', es: 'App Móvil' },
    description: {
      en: 'Cross-platform mobile app for residential communities with access control and real-time chat.',
      es: 'App multiplataforma para residentes con control de acceso y chat en tiempo real.',
    },
    highlights: {
      en: [
        'Dynamic QR Code generation for guest authentication.',
        'Instant push notifications via Firebase FCM.',
        'Live WebSocket chat using Socket.io.',
      ],
      es: [
        'Generación de códigos QR para acceso.',
        'Notificaciones push mediante Firebase FCM.',
        'Chat en tiempo real usando Socket.io.',
      ],
    },
    technologies: ['React Native', 'Expo', 'Node.js', 'Firebase FCM', 'Socket.io'],
    githubUrl: 'https://github.com/Osvaldorg',
    imageUrl: '/images/condo_app_real.jpg',
    demoType: 'mobile-app',
  },
  {
    id: 'proj-3',
    title: {
      en: 'AI 911 Prototype',
      es: 'Prototipo IA 911',
    },
    category: 'ai',
    period: '2024',
    type: { en: 'Hackathon Project', es: 'Proyecto Hackathon' },
    description: {
      en: 'AI speech recognition prototype to transcribe emergency 911 calls in real-time.',
      es: 'Prototipo de reconocimiento de voz para transcribir llamadas de emergencia en tiempo real.',
    },
    highlights: {
      en: [
        '4th Place in Cybersecurity Hackathon 2024 (ICP Hub Mexico).',
        'Real-time audio processing to text with sentiment analysis.',
      ],
      es: [
        '4to Lugar Hackathon Ciberseguridad 2024 (ICP Hub México).',
        'Procesamiento de audio a texto en tiempo real.',
      ],
    },
    technologies: ['Python', 'AI/ML Speech-to-Text', 'Node.js'],
    githubUrl: 'https://github.com/Osvaldorg',
    imageUrl: '/images/ai_911_mockup.png',
    demoType: 'ai-transcription',
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-1',
    title: {
      en: 'EF SET English B2',
      es: 'Inglés EF SET B2',
    },
    issuer: 'EF SET',
    date: '2024',
    details: {
      en: 'Demonstrated fluency in professional English communication (B2 Upper Intermediate).',
      es: 'Fluidez demostrada en comunicación profesional en inglés (B2 Intermedio Alto).',
    },
    badgeText: 'EF SET B2',
    credentialUrl: 'https://cert.efset.org/aNvZdJ',
    score: '51-60 / 100',
  },
  {
    id: 'cert-2',
    title: {
      en: '4th Place - Cyber Hackathon 2024',
      es: '4to Lugar - Hackathon Ciberseguridad 2024',
    },
    issuer: 'ICP Hub Mexico',
    date: '2024',
    details: {
      en: 'Recognized for building an AI-powered 911 emergency call prototype.',
      es: 'Prototipo de transcripción de llamadas al 911 con IA.',
    },
    badgeText: 'Hackathon Winner',
  },
];

export const testPlanCases: TestCase[] = [
  {
    id: 'TC-001',
    name: 'XSS Injection Prevention Test',
    module: 'XSS',
    description: {
      en: 'Verifies that user inputs in forms and URL params sanitize malicious <script> tags before rendering.',
      es: 'Verifica que las entradas de usuario en formularios y URL limpien etiquetas <script> antes de renderizar.',
    },
    status: 'passed',
    executionTimeMs: 14,
    assertion: 'expect(sanitizeInput("<script>alert(1)</script>")).not.toContain("<script>")',
  },
  {
    id: 'TC-002',
    name: 'Zod Runtime Schema Validation Test',
    module: 'DATA',
    description: {
      en: 'Ensures invalid contact payloads (malformed email or missing required fields) throw strict 400 validation errors.',
      es: 'Asegura que cargas de contacto inválidas (email malformado o campos faltantes) devuelvan error de validación 400.',
    },
    status: 'passed',
    executionTimeMs: 18,
    assertion: 'expect(contactSchema.safeParse({ email: "invalid" }).success).toBe(false)',
  },
  {
    id: 'TC-003',
    name: 'JWT Authorization Header Format Test',
    module: 'AUTH',
    description: {
      en: 'Validates that protected API endpoints reject requests missing Bearer tokens or containing expired signatures.',
      es: 'Valida que endpoints protegidos rechacen peticiones sin token Bearer o con firmas expiradas.',
    },
    status: 'passed',
    executionTimeMs: 22,
    assertion: 'expect(verifyAuthHeader("Bearer expired_token")).rejects.toThrow("Unauthorized")',
  },
  {
    id: 'TC-004',
    name: 'API Rate Limiting & Anti-Spam Barrier',
    module: 'RATE_LIMIT',
    description: {
      en: 'Simulates 10 rapid contact form submissions within 1 second to confirm rate limiter triggers HTTP 429.',
      es: 'Simula 10 envíos rápidos de formulario en 1 segundo para verificar que se active HTTP 429 por límite de peticiones.',
    },
    status: 'passed',
    executionTimeMs: 35,
    assertion: 'expect(rateLimiter.check(ip)).toReturnStatus(429)',
  },
  {
    id: 'TC-005',
    name: 'SQL Injection / Prisma Sanitization Check',
    module: 'API',
    description: {
      en: 'Tests database queries against parameter tampering (\' OR 1=1 --) ensuring parameterized queries via Prisma.',
      es: 'Prueba consultas de base de datos contra alteración de parámetros (\' OR 1=1 --) garantizando consultas parametrizadas.',
    },
    status: 'passed',
    executionTimeMs: 29,
    assertion: 'expect(db.query({ where: { email: "\' OR 1=1" } })).toEqual([])',
  },
];

export const securityMetrics: SecurityMetric[] = [
  {
    title: { en: 'OWASP Top 10 Compliance', es: 'Cumplimiento OWASP Top 10' },
    score: '100% Verified',
    status: 'compliant',
    description: {
      en: 'Inputs guarded against SQLi, XSS, SSRF, Broken Access Control, and Insecure Direct Object References.',
      es: 'Protección activa contra SQLi, XSS, SSRF, control de acceso roto y referencias directas inseguras a objetos.',
    },
  },
  {
    title: { en: 'Strict Transport Security (HSTS)', es: 'Seguridad Estricta de Transporte' },
    score: 'HTTPS Enforced',
    status: 'compliant',
    description: {
      en: 'All communication served over encrypted SSL/TLS with secure SameSite cookies.',
      es: 'Toda comunicación se realiza mediante SSL/TLS cifrado con cookies SameSite seguras.',
    },
  },
  {
    title: { en: 'Postman API Validation Coverage', es: 'Cobertura de Pruebas de API en Postman' },
    score: '98.5% Assertions Pass',
    status: 'compliant',
    description: {
      en: 'Comprehensive test suites validating status codes, response times, and JSON schema outputs.',
      es: 'Suites de prueba que validan códigos de estado, tiempos de respuesta y esquemas JSON.',
    },
  },
];
