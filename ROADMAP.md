# Portfolio Development Roadmap (6 Phases)

This roadmap keeps changes small and incremental while making the site easier to maintain with a single configuration file.

## Phase 1 — Structure Analysis and Lightweight Plan
- Keep the current section architecture and animation system.
- Introduce a single configuration file (`src/data/portfolio-settings.json`) to reduce repeated code edits.
- Define the content contract for resume data, projects, contact details, and testimonials.

## Phase 2 — Data Integration (Resume-driven)
- Populate profile and professional data from your resume.
- Replace placeholder entries in experience, education, and projects.
- Configure resume download URL in settings.

## Phase 3 — Contact Experience (Functional)
- Ensure **Contact Me** CTA is available in both Hero and Navbar.
- Keep recipient email configurable in settings.
- Connect EmailJS values through environment variables and validate end-to-end sending.

## Phase 4 — Visual Polish (Minimal + Creative)
- Apply modern developer/creative but minimal refinements.
- Improve spacing, hierarchy, and section rhythm without redesigning the whole app.

## Phase 5 — Social Proof and Testimonials
- Activate testimonials section from settings when data is available.
- Add configurable testimonial entries with quote, author, role, and optional image.
- Optionally include highlighted email feedback excerpts (sanitized and permission-safe).

## Phase 6 — QA + Deployment Readiness
- Validate mobile responsiveness and links.
- Check contact form UX and error handling.
- Final cleanup and release checklist.

## Data needed from you
1. Resume PDF (for profile/experience/education/projects).
2. Project links: source repo and optional live demo URL.
3. Resume file URL/path to enable download button.
4. Testimonials or email feedback snippets with:
   - quote text
   - person name
   - role/company (optional)
   - profile image URL (optional)
