"use client";

import React, { useState } from 'react';
import { Menu, X, ArrowRight, ExternalLink, Folder } from 'lucide-react';

// ============================================================================
// MULTI-PAGE PORTFOLIO WEBSITE
// Almas Adedoyin Hamzat | AI Governance | Privacy & Data Protection | Compliance
// ============================================================================

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo/Brand */}
          <button onClick={() => navigate('home')} className="font-semibold text-lg tracking-tight hover:text-rose-600 transition">
            <span className="text-rose-600">Almas</span> Adedoyin
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <button onClick={() => navigate('home')} className={`${currentPage === 'home' ? 'text-rose-600' : 'hover:text-rose-600'} transition`}>Home</button>
            <button onClick={() => navigate('about')} className={`${currentPage === 'about' ? 'text-rose-600' : 'hover:text-rose-600'} transition`}>About</button>
            <button onClick={() => navigate('portfolio')} className={`${currentPage === 'portfolio' ? 'text-rose-600' : 'hover:text-rose-600'} transition`}>Portfolio</button>
            <button onClick={() => navigate('articles')} className={`${currentPage === 'articles' ? 'text-rose-600' : 'hover:text-rose-600'} transition`}>Articles</button>
            <button onClick={() => navigate('contact')} className={`${currentPage === 'contact' ? 'text-rose-600' : 'hover:text-rose-600'} transition`}>Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 px-6 py-4 space-y-4">
            <button onClick={() => navigate('home')} className={`block w-full text-left py-2 ${currentPage === 'home' ? 'text-rose-600 font-semibold' : ''}`}>Home</button>
            <button onClick={() => navigate('about')} className={`block w-full text-left py-2 ${currentPage === 'about' ? 'text-rose-600 font-semibold' : ''}`}>About</button>
            <button onClick={() => navigate('portfolio')} className={`block w-full text-left py-2 ${currentPage === 'portfolio' ? 'text-rose-600 font-semibold' : ''}`}>Portfolio</button>
            <button onClick={() => navigate('articles')} className={`block w-full text-left py-2 ${currentPage === 'articles' ? 'text-rose-600 font-semibold' : ''}`}>Articles</button>
            <button onClick={() => navigate('contact')} className={`block w-full text-left py-2 ${currentPage === 'contact' ? 'text-rose-600 font-semibold' : ''}`}>Contact</button>
          </div>
        )}
      </nav>

      {/* PAGE CONTENT */}
      {currentPage === 'home' && <HomePage navigate={navigate} />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'portfolio' && <PortfolioPage />}
      {currentPage === 'articles' && <ArticlesPage />}
      {currentPage === 'contact' && <ContactPage />}

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 text-sm py-12 mt-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p>© 2026 Almas Adedoyin. All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Medium</a>
            <a href="#" className="hover:text-white transition">Research</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ============================================================================
// HOME PAGE
// ============================================================================
function HomePage({ navigate }: { navigate: (page: string) => void }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="text-rose-600 text-sm font-semibold tracking-wide uppercase">Professional Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight">
            AI Governance<span className="text-rose-600">.</span> <br/>
            Privacy &amp; Data Protection<span className="text-rose-600">.</span> <br/>
            Compliance &amp; Cybersecurity Governance<span className="text-rose-600">.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
            Governance professional specializing in AI governance, privacy law, and compliance frameworks. Portfolio-driven approach demonstrating practical expertise across emerging technologies, organizational resilience, and risk management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <button 
              onClick={() => navigate('portfolio')}
              className="bg-rose-600 text-white px-8 py-3 font-medium hover:bg-rose-700 transition flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              View Portfolio <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => navigate('about')}
              className="border border-gray-300 px-8 py-3 font-medium hover:border-rose-600 hover:text-rose-600 transition w-full sm:w-auto"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Focus Areas Preview */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-light mb-12">Focus Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "AI Governance", desc: "Policy, frameworks, and governance structures for responsible AI development and deployment" },
              { title: "Privacy & Data Protection", desc: "Data protection law, privacy impact assessment, GDPR compliance, and privacy by design" },
              { title: "Governance, Risk & Compliance", desc: "GRC frameworks, technology risk, cybersecurity governance, vendor risk, and information security" }
            ].map((area, idx) => (
              <div key={idx} className="p-6 border border-gray-200 hover:border-rose-600 transition">
                <h3 className="font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-sm text-gray-600">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Projects */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-light mb-2">Portfolio Projects</h2>
          <p className="text-gray-600">Practical governance work across assessment and compliance frameworks</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "GDPR Gap Assessment", icon: "📋" },
            { title: "Data Protection Impact Assessment", icon: "🔐" },
            { title: "AI Governance Review", icon: "🤖" },
            { title: "Information Security Governance Assessment", icon: "🛡️" }
          ].map((project, idx) => (
            <button 
              key={idx}
              onClick={() => navigate('portfolio')}
              className="group p-6 border border-gray-200 hover:border-rose-600 hover:bg-rose-50 transition text-left"
            >
              <div className="text-2xl mb-3">{project.icon}</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 transition">{project.title}</h3>
              <p className="text-sm text-gray-500 mt-2">View project details →</p>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// ABOUT PAGE
// ============================================================================
function AboutPage() {
  return (
    <div>
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-6">About</h1>
          <p className="text-lg text-gray-600 font-light">Governance professional specializing in AI governance, privacy law, compliance frameworks, and cybersecurity governance.</p>
        </div>

        {/* Background */}
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-light mb-4">Background</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              I hold a Bachelor of Laws (LL.B.) degree and have built experience across law, entrepreneurship, and technology. My professional journey has led me to focus specifically on governance, risk, and compliance — particularly at the intersection of emerging technologies and regulatory frameworks.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I've developed expertise across AI governance, data protection, and compliance frameworks through portfolio projects, certifications, and practical governance work. This approach combines rigorous academic foundation with demonstrated capability in real-world governance challenges.
            </p>
          </div>

          {/* Key Interests */}
          <div>
            <h2 className="text-2xl font-light mb-4">Key Interests</h2>
            <div className="space-y-3">
              {[
                { title: "AI Governance", desc: "Policy frameworks, responsible AI deployment, governance of emerging AI risks" },
                { title: "Privacy & Data Protection", desc: "GDPR and data protection regulations, privacy impact assessment, privacy by design" },
                { title: "Cybersecurity Governance", desc: "Information security governance, ISO 27001, security frameworks, technology risk management" },
                { title: "Governance, Risk & Compliance", desc: "GRC frameworks, vendor risk, AML/CDD, control assessment, regulatory compliance" }
              ].map((interest, idx) => (
                <div key={idx} className="p-4 border border-gray-200 rounded">
                  <h3 className="font-semibold text-gray-900">{interest.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{interest.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Development */}
          <div>
            <h2 className="text-2xl font-light mb-4">Certifications & Credentials</h2>
            <div className="space-y-3">
              <div className="text-sm text-gray-600 leading-relaxed">
                <h3 className="font-semibold text-gray-900 mb-3">AI Governance & Technology</h3>
                <ul className="space-y-1">
                  <li>• AI Governance — Oxford</li>
                  <li>• AI Essentials — Oxford</li>
                  <li>• AI and Law — Lund University</li>
                  <li>• AI For Everyone — DeepLearning.AI</li>
                  <li>• AI Security and Governance — Securiti.AI</li>
                </ul>
              </div>
              <div className="text-sm text-gray-600 leading-relaxed mt-4">
                <h3 className="font-semibold text-gray-900 mb-3">Privacy, Compliance & Security</h3>
                <ul className="space-y-1">
                  <li>• Privacy Law and Data Protection — University of Pennsylvania</li>
                  <li>• Cyber Security: Data Privacy — Macquarie University</li>
                  <li>• Certified in Cybersecurity (CC) — ISC2 (in progress)</li>
                  <li>• ISO 27001 foundations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ventures & Leadership */}
          <div>
            <h2 className="text-2xl font-light mb-4">Ventures & Leadership</h2>
            
            <div className="space-y-8">
              {/* Kiniso */}
              <div className="border-l-4 border-rose-600 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Kiniso Limited</h3>
                <p className="text-sm text-rose-600 font-medium mb-3">Educational Initiative</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  An educational initiative focused on preparing Nigerian secondary school students for success in an AI-driven future.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• AI Literacy & Responsible AI Usage</li>
                  <li>• Opportunity Awareness & Scholarship Discovery</li>
                  <li>• Career Exploration & Future Readiness</li>
                </ul>
              </div>

              {/* Oriven */}
              <div className="border-l-4 border-rose-600 pl-6">
                <h3 className="font-semibold text-gray-900 mb-2">Oriven Limited</h3>
                <p className="text-sm text-rose-600 font-medium mb-3">Business Support & Talent Development</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  A business support, talent development, and technology-focused company demonstrating leadership, operations, and systems thinking.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Operations Support & CRM Management</li>
                  <li>• Lead Generation & AI Automation</li>
                  <li>• Cohort-Based Talent Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// PORTFOLIO PAGE (CENTERPIECE)
// ============================================================================
function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Data Protection Impact Assessment (DPIA)",
      overview: "Comprehensive DPIA for [organization/system], identifying privacy risks, regulatory compliance requirements, and mitigation strategies across data lifecycle.",
      skills: ["Privacy by Design", "Data Protection Law", "Risk Assessment", "Regulatory Compliance", "Stakeholder Engagement"],
      deliverables: [
        "DPIA Report",
        "Risk Register",
        "Mitigation Roadmap",
        "Compliance Checklist"
      ],
      // PLACEHOLDER: Insert Google Drive folder link
      folderLink: "https://drive.google.com/drive/folders/[INSERT_DPIA_FOLDER_ID]",
      // PLACEHOLDER: Insert report document link
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
      // PLACEHOLDER: Insert Google Drive folder link
      folderLink: "https://drive.google.com/drive/folders/[INSERT_GDPR_FOLDER_ID]",
      // PLACEHOLDER: Insert report document link
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
      // PLACEHOLDER: Insert Google Drive folder link
      folderLink: "https://drive.google.com/drive/folders/[INSERT_AI_GOV_FOLDER_ID]",
      // PLACEHOLDER: Insert report document link
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
      // PLACEHOLDER: Insert Google Drive folder link
      folderLink: "https://drive.google.com/drive/folders/[INSERT_AML_FOLDER_ID]",
      // PLACEHOLDER: Insert report document link
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
      // PLACEHOLDER: Insert Google Drive folder link
      folderLink: "https://drive.google.com/drive/folders/[INSERT_ISG_FOLDER_ID]",
      // PLACEHOLDER: Insert report document link
      reportLink: "https://drive.google.com/file/d/[INSERT_ISG_REPORT_ID]/view",
      focusArea: "Governance, Risk & Compliance (GRC)"
    }
  ];

  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-6">Portfolio Projects</h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl">
            Governance, risk, and compliance assessments demonstrating practical expertise across AI governance, privacy law, and organizational compliance frameworks.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="border border-gray-200 p-8 hover:border-rose-600 transition">
              {/* Project Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-2xl font-semibold text-gray-900">{project.title}</h2>
                  <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-3 py-1 whitespace-nowrap">
                    {project.focusArea}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{project.overview}</p>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Skills Demonstrated</h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Deliverables</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {project.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-rose-600">✓</span>
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Links */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200">
                {/* PLACEHOLDER: Google Drive Folder */}
                <a 
                  href={project.folderLink}
                  className="flex items-center gap-2 text-sm font-medium text-rose-600 hover:text-rose-700 transition"
                  title="EDIT: Replace with actual Google Drive folder link"
                >
                  <Folder size={16} />
                  View Project Folder
                </a>
                
                {/* PLACEHOLDER: Report Document */}
                <a 
                  href={project.reportLink}
                  className="flex items-center gap-2 text-sm font-medium text-rose-600 hover:text-rose-700 transition"
                  title="EDIT: Replace with actual Google Drive document link"
                >
                  <ExternalLink size={16} />
                  View Full Report
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// ARTICLES PAGE
// ============================================================================
function ArticlesPage() {
  const articles = [
    {
      title: "AI vs Humans vs Law: Is AI Taking Away Our Freedom?",
      status: "Published",
      platform: "Medium",
      // PLACEHOLDER: Insert Medium article link
      link: "https://medium.com/@[INSERT_USERNAME]/[INSERT_ARTICLE_ID]",
      date: "2026",
      description: "Exploring the intersection of AI capability, human agency, and legal frameworks in the era of generative AI.",
      category: "AI Governance"
    },
    {
      title: "Data Protection by Design: More Than Compliance",
      status: "In Progress",
      platform: "Substack",
      // PLACEHOLDER: Insert Substack article link
      link: "https://substack.com/@[INSERT_USERNAME]/[INSERT_ARTICLE_ID]",
      date: "Q3 2026",
      description: "How embedding privacy into product and organizational design creates competitive advantage and regulatory safety.",
      category: "Privacy & Data Protection"
    },
    {
      title: "Governing Synthetic Media Harm: A Framework for Deepfakes and Non-Consensual AI-Generated Imagery",
      status: "In Progress",
      platform: "Research",
      // PLACEHOLDER: Insert research document/paper link
      link: "https://drive.google.com/file/d/[INSERT_RESEARCH_PAPER_ID]/view",
      date: "Q2 2026",
      description: "Framework addressing governance of AI-generated synthetic media harm, balancing technical, legal, and human approaches.",
      category: "AI Governance"
    },
    {
      title: "Africa's Digital Future: Talent, Policy, and Opportunity",
      status: "In Progress",
      platform: "Medium",
      // PLACEHOLDER: Insert Medium article link
      link: "https://medium.com/@[INSERT_USERNAME]/[INSERT_ARTICLE_ID]",
      date: "Q1 2026",
      description: "Analysis of Africa's tech and governance landscape as a source of both urgent risk and extraordinary opportunity.",
      category: "Strategy & Policy"
    }
  ];

  return (
    <div>
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-6">Articles & Research</h1>
          <p className="text-lg text-gray-600 font-light">
            Thought leadership on AI governance, privacy law, compliance, and responsible technology development.
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-8">
          {articles.map((article, idx) => (
            <article key={idx} className="border-b border-gray-200 pb-8 last:border-b-0">
              {/* Article Header */}
              <div className="mb-3 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h2>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className={`font-medium ${article.status === 'Published' ? 'text-green-600' : 'text-gray-500'}`}>
                      {article.status}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">{article.platform}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">{article.date}</span>
                  </div>
                </div>
                <span className="text-xs font-medium text-rose-600 bg-rose-50 px-3 py-1 whitespace-nowrap">
                  {article.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-4">{article.description}</p>

              {/* Link */}
              <a 
                href={article.link}
                className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-medium text-sm transition"
                title={`EDIT: Replace with actual ${article.platform} link`}
              >
                Read Article <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// CONTACT PAGE
// ============================================================================
function ContactPage() {
  return (
    <div>
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-6">Connect</h1>
          <p className="text-lg text-gray-600 font-light">
            Questions about my work, research, or interests in AI governance and privacy? I'm open to conversations.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Email */}
          <div className="p-8 border border-gray-200 hover:border-rose-600 transition">
            <h3 className="font-semibold text-gray-900 mb-3">Email</h3>
            <p className="text-gray-600 text-sm mb-4">
              For professional inquiries, collaboration, or conversation:
            </p>
            {/* PLACEHOLDER: Insert email address */}
            <a 
              href="mailto:[INSERT_EMAIL]"
              className="text-rose-600 font-medium hover:text-rose-700 transition"
              title="EDIT: Replace [INSERT_EMAIL] with your actual email address"
            >
              [INSERT_EMAIL]
            </a>
          </div>

          {/* LinkedIn */}
          <div className="p-8 border border-gray-200 hover:border-rose-600 transition">
            <h3 className="font-semibold text-gray-900 mb-3">LinkedIn</h3>
            <p className="text-gray-600 text-sm mb-4">
              Connect with me professionally to stay updated on my work:
            </p>
            {/* PLACEHOLDER: Insert LinkedIn profile URL */}
            <a 
              href="https://linkedin.com/in/[INSERT_LINKEDIN_PROFILE]"
              className="text-rose-600 font-medium hover:text-rose-700 transition flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
              title="EDIT: Replace [INSERT_LINKEDIN_PROFILE] with your actual LinkedIn profile username"
            >
              View Profile <ExternalLink size={16} />
            </a>
          </div>

          {/* Medium */}
          <div className="p-8 border border-gray-200 hover:border-rose-600 transition">
            <h3 className="font-semibold text-gray-900 mb-3">Medium</h3>
            <p className="text-gray-600 text-sm mb-4">
              Follow my thought leadership on AI governance and privacy:
            </p>
            {/* PLACEHOLDER: Insert Medium profile URL */}
            <a 
              href="https://medium.com/@[INSERT_MEDIUM_USERNAME]"
              className="text-rose-600 font-medium hover:text-rose-700 transition flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
              title="EDIT: Replace [INSERT_MEDIUM_USERNAME] with your actual Medium username"
            >
              View Articles <ExternalLink size={16} />
            </a>
          </div>

          {/* Substack */}
          <div className="p-8 border border-gray-200 hover:border-rose-600 transition">
            <h3 className="font-semibold text-gray-900 mb-3">Substack</h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to my newsletter for governance and privacy insights:
            </p>
            {/* PLACEHOLDER: Insert Substack publication URL */}
            <a 
              href="https://substack.com/@[INSERT_SUBSTACK_USERNAME]"
              className="text-rose-600 font-medium hover:text-rose-700 transition flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
              title="EDIT: Replace [INSERT_SUBSTACK_USERNAME] with your actual Substack username"
            >
              Subscribe <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Email Signature Template */}
        <div className="p-6 bg-rose-50 border border-rose-200">
          <h3 className="font-semibold text-gray-900 mb-2">Email Signature Template</h3>
          <p className="text-xs text-gray-600 mb-3">Recommended format for professional correspondence:</p>
          <div className="bg-white p-3 rounded text-xs text-gray-700 font-mono border border-gray-200">
            <p>Almas Adedoyin Hamzat</p>
            <p>AI Governance | Privacy & Data Protection | Compliance & Cybersecurity Governance</p>
            <p className="text-rose-600 mt-2">LinkedIn | Medium | Substack</p>
          </div>
        </div>
      </section>
    </div>
  );
}
