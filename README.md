# Astro-Bootstrap
[![npm](https://img.shields.io/npm/v/astro-bootstrap?style=flat-square)](https://www.npmjs.com/package/astro-bootstrap)
[![npm](https://img.shields.io/npm/dt/astro-bootstrap?style=flat-square)](https://www.npmjs.com/package/astro-bootstrap)
[![GitHub License](https://img.shields.io/github/license/astro-bootstrap/astro-bootstrap?style=flat-square)](https://github.com/astro-bootstrap/astro-bootstrap/blob/master/LICENSE)


Bootstrap components crafted for use with Astro

For docs, [view the docs website](http://astro-bootstrap.github.io)

## Quick Start


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
npm install bootstrap @popperjs/core @types/bootstrap

# yarn
yarn add bootstrap @popperjs/core @types/bootstrap

# pnpm
pnpm add bootstrap @popperjs/core @types/bootstrap
```

**Step 3 - Ensure that the bootstrap CSS (your your modified version of it) is being loaded**

```astro
---
// /src/layouts/Layout.astro
import 'bootstrap/dist/css/bootstrap.css'
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <main>
    <slot />
  </main>
</body>
</html>
```

**Step 5 - Import and use an Astro-Bootstrap component**

e.g.

```astro
---
import Layout from '../layouts/Layout.astro';
import { Breadcrumbs } from 'astro-bootstrap';
---
<BaseLayout>  
  <Breadcrumbs />
</BaseLayout>
```

