# Lamb Strategy Consulting Website

A modern, highly performant, accessible, and responsive website built for **Lamb Strategy** — a premium management consulting firm focused on Revenue Growth, Digital Strategy, and Strategic Operations.

The website incorporates a subtle, elegant aviation co-pilot theme alongside structured layouts, custom components, and standard integrations.

## Tech Stack
- **Framework:** Next.js (App Router, version 15+)
- **Styling:** Tailwind CSS (v4)
- **Icons:** Lucide React
- **Types:** TypeScript

---

## File Structure

```text
src/
 ├── app/                      # App router page paths
 │    ├── accessibility/       # Accessibility Statement
 │    ├── contact/             # Contact Form / Consultation
 │    ├── oneroom-ai/          # OneRoom OS detail page
 │    ├── privacy/             # Privacy Policy page
 │    ├── services/            # Deep services list
 │    ├── globals.css          # Custom animations and core variables
 │    ├── layout.tsx           # Global shell & SEO MetaTags
 │    └── page.tsx             # Homepage
 ├── components/               # Reusable UI elements
 │    ├── ContactForm.tsx      # Multi-field interactive lead generator
 │    ├── CTASection.tsx       # Standard buttons and actions
 │    ├── Footer.tsx           # Multi-column links directory
 │    ├── LambLogo.tsx         # Vector SVG of the lamb logo & branding
 │    ├── Navbar.tsx           # Responsive sticky header (a11y-enhanced)
 │    ├── ProcessSection.tsx   # 4-Step consulting timeline
 │    ├── SectionHeading.tsx   # Typography headers with flight indicators
 │    ├── ServiceCard.tsx      # Services overview grid cards
 │    └── TestimonialCard.tsx  # Quote component
 ├── data/                     # Local data files
 │    ├── navigation.ts        # Sidebar/navbar links
 │    └── services.ts          # Service descriptions & strategic ops tags
 └── lib/                      # Helper scripts
      └── utils.ts             # Tailwind class merging utility
```

---

## Design Choices

1. **Aero / Co-pilot Theme:**
   - Soft cloud-inspired radial-gradients.
   - Interactive dot grids reminiscent of navigational dashboards.
   - Floating paper-plane animation and movement vectors indicating direction.
2. **Typography & Styling:**
   - Dark Slate backgrounds (`bg-slate-900`) contrasted with Sky blue accents (`text-sky-500` / `bg-sky-50`) to suggest air travel.
   - Rounded corners (`rounded-2xl` / `rounded-3xl`) and soft shadows for cards.
3. **Accessibility Commitment:**
   - Complete keyboard tab controls.
   - Focus outline highlights for visually impaired navigation.
   - Supports `prefers-reduced-motion` settings in CSS, turning off transitions and floating SVG paths if selected by the user.

---

## Development Setup

### Installation
First, install all package dependencies:
```bash
npm install
```

### Running Locally
Run the local Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) on your local browser to view the interface.

### Quality Control
Ensure code rules and types compile correctly:
```bash
# Run linting tests
npm run lint

# Run production build
npm run build
```

---

## Production Deployment on Vercel
The easiest way to host this project is on the Vercel Platform:
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Connect your repository to Vercel.
3. Configure target environment variables (copied from `.env.example`).
4. Click **Deploy**. Vercel will automatically run `npm run build` and launch the server.
