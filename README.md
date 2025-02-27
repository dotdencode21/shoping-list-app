## Getting started

Recommended version of Node: 20.12.2

## Launch the application

1. Clone the repo:

```bash
git clone https://github.com/dotdencode21/shopping-list-app.git
```

2. Move to project folder:

```bash
cd shopping-list-app
```

3. Install dependecies:

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Result

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result

## Project structure

#### components

- /button - button components
- /card - card components
- /common - common componnets (Dropdown, SearchInput, etc.)
- /layout - layut components
- /modal - modal components
- /ui - components initialized by [shadcn/ui](https://ui.shadcn.com/)

#### lib

- utils.ts - helpers functions

#### pages

- /error - error pages (Not found, Fallback, etc.)
- /public - public pages

#### store

- shoppingList.ts - store for the application created by using [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)

#### types

- TypeScript types for the application

## What else could be added?

- Implement unit tests (Jest + React Testing Library) for critical components and logic
- Undo the last action (within the same session).
