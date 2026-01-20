# Travl Guru - Agentic Coding Guidelines

This repository hosts the Travl Guru application, built with **Astro v5**, **TypeScript**, **Tailwind CSS v4**, **DaisyUI**, and **Directus CMS**.

## 1. Build, Lint, and Test Commands

Use `pnpm` for all package management commands.

### Development
- **Start Dev Server:** `pnpm dev`
  - Automatically runs `pnpm generate-types` before starting.
  - Accessible at `http://localhost:4321`.
- **Generate Types:** `pnpm generate-types`
  - Generates TypeScript definitions from the Directus CMS schema.
  - Requires `.env` with `CMS_URL`, `CMS_EMAIL`, and `CMS_PASSWORD`.

### Build & Production
- **Build Application:** `pnpm build`
  - Output directory: `dist/`
- **Preview Build:** `pnpm preview`

### Linting & Formatting
- **Lint:** `pnpm lint` (Runs `biome lint --write .`)
- **Fix Issues:** `pnpm lint:fix` (Runs `biome check --write .`)
- **Configuration:** See `biome.json`.
  - **Indentation:** 4 spaces (Strictly enforced).
  - **Quotes:** Single quotes.
  - **Semicolons:** Always.
  - **Line Width:** 160 characters.

### Testing
- **Status:** No automated testing framework (Vitest/Jest) is currently configured.
- **Action:** For now, rely on manual verification via `pnpm dev` and type checking.
- **Future:** If adding significant logic, propose adding Vitest to the project.

## 2. Code Style & Architecture

### Directory Structure (Atomic Design)
Follow the Atomic Design methodology for components in `src/components/`:
- **Atoms (`@/atoms/*`):** Basic building blocks (buttons, inputs, icons).
- **Molecules (`@/molecules/*`):** Groups of atoms (search bars, cards).
- **Organisms (`@/organisms/*`):** Complex UI sections (headers, footers, hero sections).
- **Templates (`@/templates/*`):** Page layouts without specific content.
- **Pages (`src/pages/*`):** Astro file routing entries.

### Naming Conventions
- **Files:** `kebab-case.ts`, `kebab-case.astro`, `kebab-case.tsx`.
- **Components:** PascalCase (e.g., `HomeButton`, `WelcomeHero`).
- **Variables/Functions:** camelCase.
- **Constants:** UPPER_SNAKE_CASE.

### TypeScript & Types
- **Strict Mode:** Enabled. Avoid `any` types.
- **Environment Variables:** Use `astro:env/server` for type-safe access (e.g., `import { CDN_URL } from 'astro:env/server';`).
- **CMS Types:** Import generated Directus types from `@/generated/directus`.

### Imports & Path Aliases
Use configured path aliases instead of relative paths:
- `@/*` -> `./src/*`
- `@/atoms/*` -> `./src/components/atoms/*`
- `@/molecules/*` -> `./src/components/molecules/*`
- `@/organisms/*` -> `./src/components/organisms/*`
- `@/templates/*` -> `./src/components/templates/*`
- `@/generated/*` -> `./generated/*`

**Example:**
```astro
---
import ThemeToggle from '@/atoms/theme-toggle.astro';
import { directusRequest } from '@/lib/directus';
---
```

### CSS & Styling
- **Tailwind CSS v4:** Use utility classes for styling.
- **DaisyUI:** Leverage DaisyUI component classes (e.g., `btn`, `card`, `divider`) where possible.
- **Icons:** Use `astro-icon` (e.g., `<Icon name="home" />`).

### Data Fetching
- Use the `@directus/sdk`.
- Use the wrapper `directusRequest` from '@/lib/directus'.
- Fetch data in the frontmatter (`---`) of Astro components.

**Example:**
```typescript
const location = await directusRequest(readItem('location', id));
```

### Error Handling
- Handle async operations with `try/catch` blocks if they can fail during build or runtime.
- For Directus requests, ensure the instance is properly authenticated if accessing private collections.

## 3. General Workflow for Agents

1.  **Explore First:** Before making changes, check `biome.json` and `tsconfig.json`.
2.  **Generate Types:** If modifying CMS schemas or queries, run `pnpm generate-types`.
3.  **Atomic Design:** Place new components in the correct atomic folder (`atoms`, `molecules`, etc.).
4.  **Linting:** Always run `pnpm lint:fix` before finalizing changes to ensure Biome compliance.
5.  **Environment:** Do not hardcode URLs. Use `CDN_URL` or `CMS_URL` from environment variables.

Do not commit your changes.
