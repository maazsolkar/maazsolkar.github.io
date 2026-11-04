# Maaz Solkar - Professional Profile & ATS-Friendly Website

**Domain:** `https://maazsolkar.github.io`  
**Official Email:** `contact.maazsolkar@gmail.com`  
**Target Roles:** Junior Cloud Engineer | Cloud Support Engineer L1 | IT & Cloud Administrator | Junior Cloud Operations Engineer | Junior System Administrator  
**Location:** Mumbai, India (Open to Relocation & Remote)  

---

## 🚀 Overview

This repository contains the complete, production-ready source code for **Maaz Solkar's personal profile website and ATS-optimized career portfolio**.

Designed from the ground up to satisfy enterprise ATS scanners (Workday, Taleo, Greenhouse, Lever, iCIMS) while providing a modern, interactive, and secure experience across desktop, tablet, and mobile devices.

---

## 🌟 Key Features

1. **ATS-Friendly Architecture:**
   - Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
   - Standard headings mapped directly to recruiter applicant parsing dictionaries.
   - 100% extractable, machine-readable text verified via `pdftotext`.
   - Rich **Schema.org JSON-LD microdata** for Google, LinkedIn, and ATS search bots.
   - Interactive **Job Description Keyword Matcher** on the resume page.
   - 1-Click **Copy ATS Plain-Text Resume** for text-only application portals.

2. **Downloadable Official PDF Resume:**
   - Generated at `assets/docs/Maaz_Solkar_Cloud_Operations_Resume.pdf`.
   - Formatted in an exact, clean 2-page linear hierarchy.
   - Re-compilable on demand via Chromium headless from `resume-template.html`.

3. **Multi-Page Experience:**
   - **`index.html` (Home):** High-impact hero, targeted roles, live operational telemetry, key metrics, core specializations, featured project previews, and latest experience.
   - **`about.html` (About & Profile):** Systems engineering journey (transition from process engineering to cloud ops), philosophy of high availability, continuous learning, and academic background.
   - **`experience.html` (Work Experience):** Complete timeline covering all 6 roles with interactive category filtering (`All`, `Cloud & IT Infrastructure`, `Data & Operations`).
   - **`projects.html` (Cloud Projects):** In-depth architecture specs, operational handover documentation, security controls, and interactive modal diagrams for:
     - *GCP Serverless Weather Data Logger*
     - *Automated IP Geolocation Analytics Logger*
     - *Containerized Local AI Inference Stack (Docker & Ollama)*
     - *Windows Server Active Directory Domain Services Lab*
   - **`skills.html` (Skills Matrix):** Searchable technical skills categorized across Cloud, Systems/Identity, Linux/Docker, Networking, Scripting, and ITSM. Verified badges for Microsoft AZ-900 and AWS Solutions Architect training.
   - **`resume.html` (ATS Resume Hub):** Full crawler-friendly web resume, interactive ATS job description scanner, and 1-click clipboard plain-text generator.
   - **`contact.html` (Contact & Inquiries):** Direct contact form with client-side sanitization, honeypot spam protection, 1-click email copy button, and FAQ.

4. **Security & Privacy by Design:**
   - Strictly conforms to data privacy requirements: **zero exposure of sensitive private data** (mobile phone number, passport number, full street address, and birth date are completely excluded).
   - Content Security Policy (CSP) & HTTP security headers (`nosniff`, `DENY`, `strict-origin-when-cross-origin`).
   - Honeypot bot protection and client-side input sanitization.
   - External links protected with `rel="noopener noreferrer"`.

5. **Human-Crafted Professional Aesthetic:**
   - Dark & Light mode toggle with automatic OS preference detection and `localStorage` persistence.
   - Responsive layout engineered for 320px mobile screens through 4K displays.
   - Purposeful micro-animations and smooth transitions (`prefers-reduced-motion` respected).
   - Custom SVG architecture blueprints and brand monogram.

---

## 📁 Directory Structure

```text
/home/maaz/claude-workspace/
├── index.html                  # Root entry redirect to site/index.html
├── README.md                   # Project documentation & deployment guide
└── site/
    ├── index.html              # Home page
    ├── about.html              # About & career journey
    ├── experience.html         # Interactive work experience timeline
    ├── projects.html           # Cloud projects & architecture specs
    ├── skills.html             # Searchable skills matrix & certifications
    ├── resume.html             # ATS resume hub & interactive keyword matcher
    ├── contact.html            # Contact form & recruiter FAQs
    ├── resume-template.html    # Standalone HTML template for PDF compilation
    ├── robots.txt              # Search engine crawler permissions
    ├── sitemap.xml             # XML sitemap for SEO
    ├── css/
    │   ├── main.css            # Design tokens, themes, typography, layout
    │   ├── components.css      # Header, drawer, timeline, modals, cards
    │   └── print.css           # Print stylesheet for clean physical printing
    ├── js/
    │   ├── main.js             # Theme toggle, mobile drawer, modals, toast
    │   ├── filters.js          # Interactive category filtering & skill search
    │   ├── ats-checker.js      # Real-time job description matcher & copier
    │   └── contact.js          # Form validation, sanitization, mailto builder
    └── assets/
        ├── docs/
        │   └── Maaz_Solkar_Cloud_Operations_Resume.pdf  # ATS-ready PDF resume
        └── images/
            ├── favicon.svg          # Brand monogram icon
            ├── gcp-weather-arch.svg # GCP serverless architecture diagram
            ├── ip-geo-arch.svg      # IP geolocation pipeline diagram
            ├── local-ai-arch.svg    # Docker container stack diagram
            └── ad-lab-arch.svg      # Active Directory domain lab diagram
```

---

## 🛠️ Re-generating the PDF Resume

To recompile the official ATS PDF resume after modifying `resume-template.html`, run:

```bash
chromium-browser --headless --no-sandbox --no-pdf-header-footer \
  --print-to-pdf=/home/maaz/claude-workspace/site/assets/docs/Maaz_Solkar_Cloud_Operations_Resume.pdf \
  /home/maaz/claude-workspace/site/resume-template.html
```

Verify ATS extraction anytime using:
```bash
pdftotext /home/maaz/claude-workspace/site/assets/docs/Maaz_Solkar_Cloud_Operations_Resume.pdf -
```

---

## 🌐 Deployment Options

### 1. Cloudflare Pages / Vercel / Netlify
- Build command: *(None required - purely static HTML/CSS/JS)*
- Publish directory: `site`
- Add custom domain: `https://maazsolkar.github.io`

### 2. AWS S3 + CloudFront
1. Create an S3 bucket (e.g. `https://maazsolkar.github.io`) configured for static website hosting.
2. Sync the `site/` folder contents:
   ```bash
   aws s3 sync /home/maaz/claude-workspace/site/ s3://https://maazsolkar.github.io/ --delete
   ```
3. Set up an AWS CloudFront distribution pointing to the S3 bucket with an ACM SSL/TLS certificate for `https://maazsolkar.github.io`.
4. Point Route 53 CNAME / Alias records to the CloudFront distribution.

---

## ✉️ Official Contact
- **Email:** `contact.maazsolkar@gmail.com`
- **Domain:** `https://maazsolkar.github.io`
- **LinkedIn:** [linkedin.com/in/maaz-solkar](https://linkedin.com/in/maaz-solkar)
