import nextConfig from "eslint-config-next";

// Base Next.js flat config, plus project-specific ignores migrated from the old .eslintignore
export default [
  ...nextConfig,
  {
    ignores: ["*.js", "*.mjs", "*.cjs", ".yarn/**", "node_modules/**"],
  },
];

