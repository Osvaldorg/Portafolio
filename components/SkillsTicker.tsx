"use client";

const SKILLS = [
  "TypeScript", "JavaScript (ES6+)", "React", "React Native", "Next.js 15", "Node.js",
  "Expo", "Express.js", "Prisma ORM", "PostgreSQL", "MongoDB", "MySQL",
  "Firebase FCM", "Socket.io", "REST APIs", "JWT Auth", "Postman",
  "Git & GitHub", "Tailwind CSS", "Zustand", "Zod", "Jira", "Agile / Scrum",
  "QA & Testing", "Stripe Integration", "Clerk Auth",
];

export default function SkillsTicker() {
  // Duplicate for seamless infinite loop
  const doubled = [...SKILLS, ...SKILLS];

  return (
    <div className="overflow-hidden w-full select-none">
      <div className="ticker-inner">
        {doubled.map((skill, idx) => (
          <span key={idx} className="flex items-center gap-6 pr-6">
            <span className="text-sm font-mono text-white/50 hover:text-white transition-colors whitespace-nowrap">
              {skill}
            </span>
            <span className="text-[#E8FF00]/40 text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
