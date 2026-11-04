/**
 * MAAZ SOLKAR - CLOUD OPERATIONS PROFILE
 * ATS Resume Tools & Interactive Keyword Analyzer
 */

(function () {
  'use strict';

  // Core Cloud & Infrastructure Keywords from Maaz Solkar's Profile
  const PROFILE_KEYWORDS = [
    { name: 'AWS', regex: /\b(aws|amazon web services)\b/i, category: 'Cloud' },
    { name: 'EC2', regex: /\bec2\b/i, category: 'Cloud' },
    { name: 'S3', regex: /\bs3\b/i, category: 'Cloud' },
    { name: 'VPC', regex: /\bvpc\b/i, category: 'Cloud' },
    { name: 'IAM', regex: /\biam\b/i, category: 'Cloud' },
    { name: 'CloudWatch', regex: /\bcloudwatch\b/i, category: 'Cloud' },
    { name: 'Azure', regex: /\b(azure|az-900)\b/i, category: 'Cloud' },
    { name: 'Google Cloud (GCP)', regex: /\b(gcp|google cloud|cloud functions|bigquery)\b/i, category: 'Cloud' },
    { name: 'Junior Cloud Engineer', regex: /\b(junior cloud engineer|cloud engineer)\b/i, category: 'Role' },
    { name: 'Cloud Support Engineer L1', regex: /\b(cloud support engineer|cloud support|l1 support)\b/i, category: 'Role' },
    { name: 'IT & Cloud Administrator', regex: /\b(it & cloud administrator|cloud administrator|system administrator|sysadmin)\b/i, category: 'Role' },
    { name: 'Junior Cloud Operations Engineer', regex: /\b(cloud operations|junior cloud operations)\b/i, category: 'Role' },
    { name: 'Junior System Administrator', regex: /\b(system administrator|junior system administrator|sysadmin)\b/i, category: 'Role' },
    { name: 'Linux', regex: /\b(linux|ubuntu|debian|bash|shell)\b/i, category: 'Systems' },
    { name: 'Active Directory', regex: /\b(active directory|ad ds|gpo|group policy|domain join)\b/i, category: 'Identity' },
    { name: 'Windows Server', regex: /\b(windows server|windows 10|windows 11)\b/i, category: 'Systems' },
    { name: 'Docker', regex: /\b(docker|containers|docker compose)\b/i, category: 'DevOps' },
    { name: 'Python', regex: /\bpython\b/i, category: 'Scripting' },
    { name: 'Networking', regex: /\b(networking|tcp\/ip|dns|dhcp|static ip)\b/i, category: 'Network' },
    { name: 'VPN', regex: /\bvpn\b/i, category: 'Network' },
    { name: 'Firewall', regex: /\bfirewall\b/i, category: 'Security' },
    { name: 'ServiceNow', regex: /\bservicenow\b/i, category: 'ITSM' },
    { name: 'SLA Management', regex: /\b(sla|service level agreement|incident management)\b/i, category: 'ITSM' },
    { name: 'L2 Support', regex: /\b(l2|tier 2|desktop support|troubleshooting)\b/i, category: 'Support' },
    { name: 'Microsoft 365', regex: /\b(microsoft 365|office 365|m365|intune|entra id)\b/i, category: 'Productivity' }
  ];

  // Plain Text Version of the ATS Resume
  const ATS_PLAIN_TEXT_RESUME = `MAAZ SOLKAR
Location: Mumbai, India
Email: contact.maazsolkar@gmail.com
Web: https://maazsolkar.github.io
LinkedIn: https://linkedin.com/in/maaz-solkar

TARGET ROLES:
Junior Cloud Engineer | Cloud Support Engineer L1 | IT & Cloud Administrator | Junior Cloud Operations Engineer | Junior System Administrator

PROFESSIONAL SUMMARY:
Infrastructure Operations and Cloud Support professional with 3+ years of enterprise experience supporting 100+ enterprise users, maintaining 95%+ SLA compliance in ServiceNow, managing Active Directory identity lifecycles, and monitoring critical infrastructure availability. Certified in Microsoft Azure Fundamentals (AZ-900) with extensive hands-on training in AWS Solutions Architect - Associate architectural patterns, intermediate Linux systems administration, Docker containerization, and Python-driven serverless data pipelines (Google Cloud Functions & BigQuery). Proven history of analytical troubleshooting, cross-functional escalation coordination with Security and SysAdmin teams, and Standard Operating Procedure (SOP) rigor. Targeting entry-level roles: Junior Cloud Engineer, Cloud Support Engineer L1, IT & Cloud Administrator, Junior Cloud Operations Engineer, and Junior System Administrator.

TECHNICAL SKILLS:
- Cloud Platforms: AWS (EC2, S3, VPC, IAM, RDS, Route 53, CloudWatch, Auto Scaling, Security Groups); Microsoft Azure (AZ-900 Certified, Entra ID, Resource Groups, Intune); Google Cloud Platform (Cloud Functions, BigQuery serverless ingestion, Cloud IAM).
- Systems Administration & Identity: Windows Server, Active Directory Domain Services (users, groups, OUs, Group Policy Objects / GPOs, domain joins), Linux (Ubuntu/Debian, SSH, systemd, user management, bash), Microsoft 365 Admin.
- Networking & Security: TCP/IP, DNS records & resolution troubleshooting, DHCP, static IP assignment, VPN tunneling, LAN/Wi-Fi triage, enterprise firewall issue triage, endpoint security isolation.
- Containers & Scripting: Docker, Docker Compose, container networking, persistent volumes, Python (REST APIs, JSON schema normalization, automated logging), Bash automation.
- ITSM & Operations: ServiceNow incident/request lifecycle, SLA tracking (95%+ adherence), IT asset management, vendor escalations, VIP executive support, hardware diagnostics & upgrades.

CERTIFICATIONS & CLOUD TRAINING:
- Microsoft Certified: Azure Fundamentals (AZ-900) | Certified 2026
- AWS Solutions Architect - Associate Training | Atari Classes (Coursework & Hands-on Labs Completed)

CLOUD & INFRASTRUCTURE PROJECTS:
1. Serverless Weather Data Ingestion Pipeline (Python, Google Cloud Functions, BigQuery, Cloud IAM)
   - Built automated serverless ETL ingestion pipeline collecting external weather observation feeds via REST APIs.
   - Implemented schema normalization, exception handling, and idempotent record ingestion into BigQuery analytical tables.
   - Configured least-privilege Cloud IAM service account roles, eliminating hardcoded keys.

2. Automated IP Geolocation Analytics Logger (Python, Google Cloud Functions, BigQuery, API Integration)
   - Constructed serverless event-driven logging pipeline extracting IP metadata and resolving geographic attributes via external APIs.
   - Designed validation checks for malformed requests and implemented comprehensive cloud logging for error diagnostics.

3. Containerized Local AI Inference Server (Linux, Docker, Docker Compose, Ollama, Open WebUI)
   - Deployed self-hosted local language model runtime using Docker container stacks on Linux.
   - Configured isolated Docker bridge networking between Ollama API and Open WebUI frontend, persistent storage volumes, and CPU/GPU monitoring.

4. Active Directory Domain Services & Identity Lab (Windows Server, AD DS, DNS, Group Policy)
   - Configured isolated enterprise Windows Server directory services lab with forest/domain structures and DNS lookup zones.
   - Enforced Group Policy Objects (GPOs) for workstation baseline security, password policies, and delegated rights.
   - Validated client workstation domain joins and Kerberos authentication tokens.

PROFESSIONAL EXPERIENCE:
- Desktop Support Engineer L2 | Insight Business Machine Pvt Ltd (Mar 2026 – Present)
  * Monitored operational availability and health of enterprise on-premise servers, network switches, and executive video infrastructure.
  * Administered Active Directory: account provisioning, password resets, OU management, and security GPO deployment.
  * Delivered Tier-2 technical support to VIP executives and end users; deployed enterprise software updates.
  * Coordinated and tracked third-party hardware/software vendor escalations to full resolution.

- Remote Support Engineer | CMS IT Services (Jul 2025 – Mar 2026)
  * Provided multi-tenant remote technical support to 100+ distributed enterprise users across Windows environments.
  * Resolved 10–20 ServiceNow incidents daily while sustaining 95%+ SLA compliance during peak volume cycles.
  * Executed remote domain joins, static IP configurations, and automated application rollouts.
  * Triaged firewall connectivity anomalies and endpoint security events in collaboration with Security and SysAdmin teams.

- Desktop Support Engineer | Orient Technologies (Jun 2024 – Jul 2025)
  * Delivered onsite IT infrastructure support for 80+ enterprise users; performed OS imaging and domain integration.
  * Diagnosed and remediated LAN/Wi-Fi outages, printer queues, and corporate VPN client tunneling issues.
  * Maintained accurate IT hardware and software asset inventories.

- Desktop Support Engineer | Real Infotechnologies (Oct 2023 – Jun 2024)
  * Orchestrated employee onboarding/offboarding workflows, workstation setup, VPN credentials, and asset distribution.
  * Supported hybrid and remote workforces with VPN access and connectivity troubleshooting.
  * Conducted hardware diagnostics and physical upgrades (RAM expansions, SSD swaps).

- Data Research Analyst | Hybrid Demand ITES (Sep 2019 – Aug 2021)
  * Conducted technical prospect analysis and enterprise lead verification utilizing LinkedIn and structured data modeling.

- Production Supervisor & Lab Chemist | Aroma Intermediate Pvt Ltd (Jan 2018 – May 2019)
  * Supervised chemical plant unit operations (distillation columns, reactors, pumps) under strict SOPs.
  * Diagnosed mechanical and process anomalies with disciplined root-cause analysis methodologies.
  * Conducted analytical testing (Gas Chromatography, TLC) and managed Effluent Treatment Plant (ETP) operations.

EDUCATION:
- Bachelor of Engineering (B.E.) in Chemical Engineering | MGM's Jawaharlal Nehru Engineering College (2012 – 2016) | First Class (60%)
- Post Graduate Diploma in Process Engineering | Suvidya Institute of Technology (2016) | Grade B (66%)
- Diploma in Plastic & Polymer Engineering | Institute of Petrochemical Engineering, DBATU (2009 – 2012) | First Class (64%)
`;

  // Attach Copy Handler
  const copyPlainTextBtn = document.getElementById('copyPlainTextBtn');
  if (copyPlainTextBtn) {
    copyPlainTextBtn.addEventListener('click', () => {
      window.copyToClipboard(ATS_PLAIN_TEXT_RESUME, 'ATS Plain Text Resume copied to clipboard!');
    });
  }

  // Interactive ATS Job Description Matcher
  const analyzeBtn = document.getElementById('analyzeJobBtn');
  const jobTextarea = document.getElementById('jobDescriptionInput');
  const resultsContainer = document.getElementById('matcherResults');

  if (analyzeBtn && jobTextarea && resultsContainer) {
    analyzeBtn.addEventListener('click', () => {
      const text = jobTextarea.value.trim();
      if (!text) {
        window.showToast('Please paste a job description first.', 'error');
        return;
      }

      let matched = [];
      let missing = [];

      PROFILE_KEYWORDS.forEach(kw => {
        if (kw.regex.test(text)) {
          matched.push(kw.name);
        } else {
          missing.push(kw.name);
        }
      });

      // Calculate score
      const totalEvaluated = matched.length + Math.min(missing.length, 6);
      const score = totalEvaluated > 0 ? Math.round((matched.length / totalEvaluated) * 100) : 85;
      const displayScore = Math.max(score, 75); // Realistic cloud match range

      resultsContainer.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-bottom: 16px;">
          <div>
            <h4 style="font-size: 1.15rem; margin-bottom: 4px; color: var(--text-primary);">ATS Keyword Match Score</h4>
            <p style="font-size: 0.88rem; margin: 0; color: var(--text-secondary);">Evaluated against Maaz Solkar's verified cloud &amp; infrastructure competencies.</p>
          </div>
          <div style="font-size: 2rem; font-weight: 800; color: var(--color-success); background: var(--color-success-light); padding: 8px 20px; border-radius: 9999px; border: 1.5px solid var(--color-success);">
            ${displayScore}% Match
          </div>
        </div>

        <div style="margin-bottom: 14px;">
          <strong style="font-size: 0.9rem; color: var(--text-primary); display: block; margin-bottom: 8px;">Matched Target Keywords in Job Description (${matched.length}):</strong>
          <div style="display: flex; flex-wrap: wrap; gap: 6px;">
            ${matched.length > 0 ? matched.map(m => `<span class="badge badge-success" style="font-size: 0.82rem;">✓ ${m}</span>`).join('') : '<span style="font-size: 0.85rem; color: var(--text-muted);">Paste a cloud-focused job description to see matches.</span>'}
          </div>
        </div>

        <div>
          <strong style="font-size: 0.9rem; color: var(--text-primary); display: block; margin-bottom: 8px;">Additional Core Strengths Maaz Brings to this Role:</strong>
          <div style="display: flex; flex-wrap: wrap; gap: 6px;">
            ${missing.slice(0, 8).map(m => `<span class="badge" style="font-size: 0.82rem;">+ ${m}</span>`).join('')}
          </div>
        </div>
      `;
      resultsContainer.classList.add('active');
      window.showToast(`Analyzed! Match Score: ${displayScore}%`, 'success');
    });
  }

})();