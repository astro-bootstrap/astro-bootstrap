# Astro-Bootstrap
[![npm](https://img.shields.io/npm/v/astro-bootstrap?style=flat-square)](https://www.npmjs.com/package/astro-bootstrap)
[![npm](https://img.shields.io/npm/dt/astro-bootstrap?style=flat-square)](https://www.npmjs.com/package/astro-bootstrap)
[![GitHub License](https://img.shields.io/github/license/astro-bootstrap/astro-bootstrap?style=flat-square)](https://github.com/astro-bootstrap/astro-bootstrap/blob/master/LICENSE)


Bootstrap components crafted for use with Astro

For docs, [view the docs website](http://astro-bootstrap.github.io)


## Quick Start

**Step 1 - Create a new astro project**

```bash
# create a new project with npm
npm create astro@latest

# create a new project with yarn
yarn create astro

# create a new project with pnpm
pnpm create astro@latest
```

**Step 2 - Install with the package manager of your choice:**

```bash
#npm
npm install astro-bootstrap

# yarn
yarn add astro-bootstrap

# pnpm
pnpm add astro-bootstrap
```

**Step 3 - Ensure that you have bootstrap v5.x installed, along with type definitions (it's a peer dependency, so install the version that you want)**

e.g.

```bash
#npm
npm install bootstrap @popperjs/core @types/bootstrap

# yarn
yarn add bootstrap @popperjs/core @types/bootstrap

# pnpm
pnpm add bootstrap @popperjs/core @types/bootstrap
```

**Step 4 - Ensure that the bootstrap CSS (your your modified version of it) is being loaded**

```astro
---
// /src/layouts/Layout.astro
import 'bootstrap/dist/css/bootstrap.css'
---
<!DOCTYPE html>
<html lang="en">
.....
```

**Step 6 - Import and use an Astro-Bootstrap component**

e.g.

```astro
---
// /src/layouts/Layout.astro
export interface Props {
	title: string;
}
const { title } = Astro.props;

import 'bootstrap/dist/css/bootstrap.css'
import { Breadcrumb } from 'astro-bootstrap';
---

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="description" content="Astro description">
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="generator" content={Astro.generator} />
		<title>{title}</title>
	</head>
	<body>
    <Breadcrumb />
		<slot />
	</body>
</html>
```

