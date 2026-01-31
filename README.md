# Mantis Digital Website  
**Eleventy + Nunjucks + Netlify JAMstack Website Template**

A lightweight, fast, SEO-friendly starter template for building modern, mobile-optimized websites using **Eleventy (11ty)**, **Nunjucks**, and **Netlify**. Designed for rapid development, clean structure, and easy reuse across multiple projects.

---

## Features
- ⚡ Static site generation with Eleventy (fast + SEO friendly)  
- 🧩 Nunjucks layouts and partials (header, footer, reusable sections)  
- 🎨 Centralized CSS variables for easy theming and branding  
- 📁 Clean asset pipeline (CSS, images, JS passthrough)  
- 📄 Page-based routing (`/about/`, `/services/`, etc.)  
- 📬 Netlify-ready contact form support  
- 🔁 Reusable project template for rapid site cloning  

---

## Folder Structure
```
src/
  _includes/
    layouts/
      base.njk
    partials/
      header.njk
      footer.njk
      sections/
        one-col.njk
        two-col.njk
        three-col.njk
        four-col.njk
  assets/
    css/
      style.css
    images/
    js/
  index.njk
  about/
    index.njk
  services/
    index.njk
  work/
    index.njk
  contact/
    index.njk

.eleventy.js
package.json
.gitignore
README.md
```

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run local dev server
```bash
npm run start
```
Site will be available at:
```
http://localhost:8080
```

### 3. Build for production
```bash
npm run build
```
Output will be in:
```
_site/
```

---

## Creating Pages
Create folders inside `src/` with an `index.njk` file:
```
src/contact/index.njk
```

Example page:
```njk
---
layout: layouts/base.njk
title: Contact
description: Contact Mantis Digital Media in Connecticut
---
<h1>Contact</h1>
<p>Let’s build something great.</p>
```

---

## Layout System

### Layout Flow
- `base.njk` → Full HTML shell, `<head>`, header/footer includes  
- `header.njk` → Navigation and branding  
- `footer.njk` → Footer content  
- Page content is injected into the layout with:
```njk
{{ content | safe }}
```

---

## Assets
All static files live in:
```
src/assets/
```

Always reference them using root paths:
```html
/assets/css/style.css
/assets/images/logo.svg
/assets/js/main.js
```

Eleventy copies this folder directly to:
```
_site/assets/
```

---

## SEO + Page Metadata
Each page controls its own SEO using front matter.

Example:
```njk
---
title: Web Design in Shelton, CT
description: Clean, fast, SEO-friendly websites for local Connecticut businesses.
---
```

Rendered in `base.njk`:
```html
<title>{{ title }} | Mantis Digital Media</title>
<meta name="description" content="{{ description | default('Clean, creative websites for small businesses in Connecticut.') }}">
```

---

## Reusable Sections (Page Builder System)
Reusable layout sections live in:
```
src/_includes/partials/sections/
```

Example usage:
```njk
{% include "partials/sections/two-col.njk",
  left: "<h2>Web Design</h2><p>Fast, modern, mobile-first websites.</p>",
  right: "<h2>SEO</h2><p>AI-friendly content that gets found.</p>"
%}
```

This allows you to:
- Design once  
- Reuse everywhere  
- Update site-wide from one file  

---

## Netlify Deployment

### Build Settings
In Netlify:
- **Build command:** `npm run build`  
- **Publish directory:** `_site`  

---

## Netlify Forms
Use this in your contact form:
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact">
  <label>
    Name:
    <input type="text" name="name" required>
  </label>
  <label>
    Email:
    <input type="email" name="email" required>
  </label>
  <label>
    Message:
    <textarea name="message" required></textarea>
  </label>
  <button type="submit">Send</button>
</form>
```

Deploy once — Netlify will automatically detect and enable the form.

---

## Reusing This Template
To start a new site from this template:
```bash
git clone <repo-url> new-site-name
cd new-site-name
npm install
npm run start
```

Then:
- Update branding  
- Edit pages  
- Connect repo to Netlify  
- Deploy  

---

## Client Deployment Checklist
- Update site name and footer copyright  
- Replace logo in `/assets/images/`  
- Update page titles + descriptions  
- Test mobile navigation  
- Submit contact form test  
- Connect custom domain in Netlify  
- Enable HTTPS  
- Push final commit  

---

## Git Ignore
Recommended `.gitignore`:
```
node_modules/
_site/
.env
```

---

## License
This template is free to use, modify, and adapt for personal or commercial projects.

---

## Author
Built and maintained by **Mantis Digital Media LLC**  
Clean code. Creative design. Websites that get found.
