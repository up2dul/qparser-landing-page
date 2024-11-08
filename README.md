<div align="center">
  <i><h1>QParser Landing Page</h1></i>
</div>

![image](https://github.com/user-attachments/assets/1a13ca36-75ba-43ac-907d-04df38437a23)


# About
Built with React along with:
- ⚡ [Vite](https://vitejs.dev)
- 🔷 [TypeScript](https://typescriptlang.org)
- 📝 [Biome](https://biomejs.dev) — Code formatter and linter

Also some additional development tools:
- 🔤 [Commitlint](https://commitlint.js.org) — Make sure the commit messages are well formatted
- 🐶 [Husky](https://typicode.github.io/husky) — A git hooks
- 📋 [Lint Staged](https://github.com/lint-staged/lint-staged) — Running some scripts before committing

# Getting Started

## Clone this repository
```bash
git clone https://github.com/up2dul/qparser-landing-page.git

# or if you have SSH keys setup
git clone git@github.com:up2dul/qparser-landing-page.git
```

## Usage
> Requires [Node.js](https://nodejs.org) `>=18.x`. And [pnpm](https://pnpm.io) `>=8.x` is recommended as the package manager.

### Install dependencies
Make sure you have already in the project directory.
```bash
pnpm install
```

### Run the development server
Start the development server by running the following command, and the application will be available at [http://localhost:5173](http://localhost:5173).
```bash
pnpm dev
```

## Build for production
Run the following command to build the application for production, and the build will be available at the `dist` directory.
```bash
pnpm build
```

# Components Structure
```
components/
├── common/
│   ├── navbar.tsx
│   └── pricing-card.tsx
├── layout/
│   ├── footer.tsx
│   └── header.tsx
├── section/
|   ├── detail.tsx
│   ├── hero.tsx
│   ├── install.tsx
│   ├── join-us.tsx
│   ├── payment.tsx
│   └── pricing.tsx
└── ui/
    ├── button.tsx
    ├── link.tsx
    ├── mark-arrow.tsx
    ├── mark.tsx
    ├── nav-logo.tsx
    └── tab.tsx
```
