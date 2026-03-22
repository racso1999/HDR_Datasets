import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build a self-contained production server bundle used by the Docker image.
  output: "standalone",
};

export default nextConfig;
