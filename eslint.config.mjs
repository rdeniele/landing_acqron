import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

/**
 * ESLint Flat Config for Next.js + TypeScript + Prettier
 * Uses plugin/prettier and configures Prettier as a plugin, not via extends.
 */

export default (async () =>
  defineConfig([
    ...nextVitals,
    ...nextTs,
    {
      plugins: {
        prettier: (await import('eslint-plugin-prettier')).default,
      },
      rules: {
        'prettier/prettier': 'error',
      },
    },
    globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  ]))();
