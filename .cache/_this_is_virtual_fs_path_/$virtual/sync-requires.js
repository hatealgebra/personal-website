
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/pavelvondra/Work/Coding/Portfolio/my-website/.cache/dev-404-page.js")),
  "component---src-pages-about-tsx": preferDefault(require("/Users/pavelvondra/Work/Coding/Portfolio/my-website/src/pages/about.tsx")),
  "component---src-pages-contact-tsx": preferDefault(require("/Users/pavelvondra/Work/Coding/Portfolio/my-website/src/pages/contact.tsx")),
  "component---src-pages-homepage-tsx": preferDefault(require("/Users/pavelvondra/Work/Coding/Portfolio/my-website/src/pages/homepage.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/pavelvondra/Work/Coding/Portfolio/my-website/src/pages/index.tsx")),
  "component---src-pages-work-tsx": preferDefault(require("/Users/pavelvondra/Work/Coding/Portfolio/my-website/src/pages/work.tsx"))
}

