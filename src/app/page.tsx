import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Data Protection Impact Assessment",
    overview: "Comprehensive DPIA for a cloud-based healthcare application, assessing risks associated with processing sensitive patient data and recommending mitigation strategies.",
    skills: ["Privacy Assessment", "Risk Mitigation", "Healthcare Data", "Regulatory Compliance", "Data Mapping"],
    deliverables: [
      "DPIA Report",
      "Risk Register",
      "Mitigation Roadmap",
      "Compliance Checklist"
    ],
    folderLink: "https://drive.google.com/drive/folders/[INSERT_DPIA_FOLDER_ID]",
    reportLink: "https://drive.google.com/file/d/[INSERT_DPIA_REPORT_ID]/view",
    focusArea: "Privacy & Data Protection"
  },
  {
    id: 2,
    title: "GDPR Gap Assessment",
    overview: "Gap analysis against GDPR requirements for an organization's current data handling practices, policies, and technical controls. Identifies compliance gaps and remediation roadmap.",
    skills: ["GDPR Compliance", "Regulatory Assessment", "Gap Analysis", "Control Mapping", "Legal Research"],
    deliverables: [
      "Gap Assessment Report",
      "Control Matrix",
      "Remediation Roadmap",
      "Policy Recommendations"
    ],
    folderLink: "https://drive.google.com/drive/folders/[INSERT_GDPR_FOLDER_ID]",
    reportLink: "https://drive.google.com/file/d/[INSERT_GDPR_REPORT_ID]/view",
    focusArea: "Privacy & Data Protection"
  },
  {
    id: 3,
    title: "AI Governance Review",
    overview: "Governance framework assessment for AI systems, evaluating oversight structures, risk management, stakeholder accountability, and alignment with responsible AI principles.",
    skills: ["AI Governance", "Policy Framework", "Risk Management", "Stakeholder Analysis", "Framework Design"],
    deliverables: [
      "Governance Assessment Report",
      "Framework Recommendations",
      "Risk Assessment",
      "Implementation Roadmap"
    ],
    folderLink: "https://drive.google.com/drive/folders/[INSERT_AI_GOV_FOLDER_ID]",
    reportLink: "https://drive.google.com/file/d/[INSERT_AI_GOV_REPORT_ID]/view",
    focusArea: "AI Governance"
  },
  {
    id: 4,
    title: "AML / CDD Assessment",
    overview: "Anti-Money Laundering and Customer Due Diligence review, assessing compliance with AML/CFT frameworks, KYC procedures, and regulatory requirements.",
    skills: ["AML Compliance", "KYC/CDD", "Regulatory Requirements", "Risk Scoring", "Control Assessment"],
    deliverables: [
      "AML/CDD Assessment Report",
      "Control Assessment",
      "Risk Matrix",
      "Compliance Recommendations"
    ],
    folderLink: "https://drive.google.com/drive/folders/[INSERT_AML_FOLDER_ID]",
    reportLink: "https://drive.google.com/file/d/[INSERT_AML_REPORT_ID]/view",
    focusArea: "Governance, Risk & Compliance (GRC)"
  },
  {
    id: 5,
    title: "Information Security Governance Assessment",
    overview: "Evaluation of an organization's information security governance structure, controls, policies, and alignment with ISO 27001 and security best practices.",
    skills: ["Information Security Governance", "ISO 27001", "Control Assessment", "Policy Audit", "Risk Management"],
    deliverables: [
      "Governance Assessment Report",
      "Control Gap Analysis",
      "Policy Recommendations",
      "Implementation Roadmap"
    ],
    folderLink: "https://drive.google.com/drive/folders/[INSERT_ISG_FOLDER_ID]",
    reportLink: "https://drive.google.com/file/d/[INSERT_ISG_REPORT_ID]/view",
    focusArea: "Governance, Risk & Compliance (GRC)"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 relative selection:bg-rose-500/30">
      {/* Subtle background glow effect */}
      <div className="pointer-events-none fixed inset-0 flex justify-center">
        <div className="h-[500px] w-full max-w-[1000px] bg-rose-600/5 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight text-white">
            Portfolio <span className="text-rose-500 font-medium">Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            Governance, risk, and compliance assessments demonstrating practical expertise across AI governance, privacy law, and organizational compliance frameworks.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
