const nextConfig = {
  output: "standalone" as const,
  webpack: (config, { isServer }) => {
    return config;
  },
};

export default nextConfig;
