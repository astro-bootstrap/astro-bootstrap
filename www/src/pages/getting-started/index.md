---
title: Getting Started
layout: '@layouts/Default.astro'
---

**Step 1 - Install with the package manager of your choice:**

```bash
#npm
npm install astro-bootstrap

# yarn
yarn add astro-bootstrap

# pnpm
pnpm add astro-bootstrap
```

**Step 2 - Ensure that you have bootstrap v5.x installed, along with type definitions (it's a peer dependency, so install the version that you want)**

e.g.

```bash
#npm
npm install bootstrap @types/bootstrap

# yarn
yarn add bootstrap @types/bootstrap

# pnpm
pnpm add bootstrap @types/bootstrap
```

**Step 3 - Ensure that the bootstrap CSS (your your modified version of it) is being loaded**

You should create a BaseLayout component which is imported into each layout file that you use e.g.

```astro
---
// /src/layouts/BaseLayout.astro
import 'bootstrap/dist/css/bootstrap.css'
---
{/* the rest of your layout file here */}
```

**Step 4 - Import and use an Astro-Bootstrap component**

e.g.

```astro
---
import { Breadcrumbs } from 'astro-bootstrap';
---
<Breadcrumbs />
```
