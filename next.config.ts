import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Next.js doesn't infer a parent
  // directory when a stray lockfile exists higher up the tree.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
