This is a clean rebuild of the Farm to Grocer MVP source-only app shell.

Replace these folders in your local repo:
- app/
- components/
- lib/

Keep your existing:
- package.json
- next.config.ts/js
- tsconfig.json
- node_modules

Then run:
- npm run dev

Notes:
- This rebuild is intentionally local-demo-data driven
- No Supabase dependency is required for this pass
- Demo entry starts at /demo
